import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Animated,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import StoryProgress from './StoryProgress';
import StoryNavigation from './StoryNavigation';
import StoryHeader from './StoryHeader';
import { getUserStories, users } from '../../data/stories';
import type { Story, StoryViewerProps } from '../../types/stories';

const STORY_DURATION = 5000;

const UserCard = ({
  avatar,
  username,
  onPress,
}: {
  avatar: string;
  username: string;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={styles.userCard}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <View style={styles.userCardContent}>
      <Image source={{ uri: avatar }} style={styles.userAvatar} />
      <Text style={styles.userName}>{username}</Text>
    </View>
  </TouchableOpacity>
);

const StoryViewer: React.FC<StoryViewerProps> = ({
  initialUserId,
  onClose,
}) => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stories, setStories] = useState<Story[]>([]);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const index = initialUserId
      ? users.findIndex((user) => user.id === initialUserId)
      : 0;
    if (index !== -1) {
      setCurrentUserIndex(index);
      loadUserStories(index);
    }
  }, [initialUserId]);

  useEffect(() => {
    startStoryTimer();
    fadeIn();
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [currentUserIndex, currentStoryIndex, paused]);

  const loadUserStories = (userIndex: number) => {
    const user = users[userIndex];
    const userStories = getUserStories(user.id);
    setStories(userStories);
    setCurrentStoryIndex(0);
  };

  const fadeIn = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startStoryTimer = () => {
    if (timer.current) clearTimeout(timer.current);
    if (!paused) {
      timer.current = setTimeout(() => {
        goToNextStory();
      }, STORY_DURATION);
    }
  };

  const handlePause = () => {
    setPaused(true);
    if (timer.current) clearTimeout(timer.current);
  };

  const handleResume = () => {
    setPaused(false);
  };

  const goToPreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    } else if (currentUserIndex > 0) {
      const newIndex = currentUserIndex - 1;
      setCurrentUserIndex(newIndex);
      loadUserStories(newIndex);
    } else {
      onClose();
    }
  };

  const goToNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else if (currentUserIndex < users.length - 1) {
      const newIndex = currentUserIndex + 1;
      setCurrentUserIndex(newIndex);
      loadUserStories(newIndex);
    } else {
      onClose();
    }
  };

  // Fix user card click: Always load user if clicked and different than current
  const handleUserCardClick = (userIndex: number) => {
    if (
      userIndex !== currentUserIndex &&
      userIndex >= 0 &&
      userIndex < users.length
    ) {
      setCurrentUserIndex(userIndex);
      loadUserStories(userIndex);
    }
  };

  if (stories.length === 0) return null;

  const currentStory = stories[currentStoryIndex];

  // Pick exactly two previous users (if exist) in ascending order to display left to right horizontally
  const prevUsers = [];
  if (currentUserIndex - 2 >= 0) prevUsers.push(users[currentUserIndex - 2]);
  if (currentUserIndex - 1 >= 0) prevUsers.push(users[currentUserIndex - 1]);

  // Pick exactly two next users (if exist) in ascending order
  const nextUsers = [];
  if (currentUserIndex + 1 < users.length)
    nextUsers.push(users[currentUserIndex + 1]);
  if (currentUserIndex + 2 < users.length)
    nextUsers.push(users[currentUserIndex + 2]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.viewerWrapper, isDesktop && styles.viewerDesktop]}>
        {/* LEFT SIDE: 2 users horizontally */}
        {isDesktop && (
          <View style={styles.sideUserCardsRow}>
            {prevUsers.map((user, idx) => (
              <UserCard
                key={user.id}
                avatar={user.avatar}
                username={user.username}
                onPress={() =>
                  handleUserCardClick(currentUserIndex - prevUsers.length + idx)
                }
              />
            ))}
          </View>
        )}

        {/* MAIN STORY */}
        <View style={[styles.storyWrapper, isDesktop && styles.storyDesktop]}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.imageContainer}
            onLongPress={handlePause}
            onPressOut={handleResume}
          >
            {/* Progress bar INSIDE storyWrapper */}
            <View style={styles.progressBar}>
              <StoryProgress
                stories={stories}
                currentIndex={currentStoryIndex}
                duration={STORY_DURATION}
                isPlaying={!paused}
              />
            </View>

            <Animated.View style={[styles.imageWrapper, { opacity: fadeAnim }]}>
              <Image
                source={{ uri: currentStory.imageUrl }}
                style={styles.image}
                resizeMode="center"
              />
              <LinearGradient
                colors={['rgba(0,0,0,0.4)', 'transparent', 'rgba(0,0,0,0.3)']}
                style={styles.gradient}
              />
            </Animated.View>
          </TouchableOpacity>

          <View style={styles.header}>
            <StoryHeader
              username={currentStory.username || ''}
              userAvatar={currentStory.userAvatar || ''}
              timestamp={currentStory.timestamp}
              location={currentStory.location}
              onClose={onClose}
            />
          </View>

          <StoryNavigation
            onPrevious={goToPreviousStory}
            onNext={goToNextStory}
          />
        </View>

        {/* RIGHT SIDE: 2 users horizontally */}
        {isDesktop && (
          <View style={styles.sideUserCardsRow}>
            {nextUsers.map((user, idx) => (
              <UserCard
                key={user.id}
                avatar={user.avatar}
                username={user.username}
                onPress={() => handleUserCardClick(currentUserIndex + 1 + idx)}
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  viewerWrapper: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewerDesktop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  storyWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  storyDesktop: {
    width: 600,
    height: 600,
    overflow: 'hidden',
  },
  sideUserCardsRow: {
    flexDirection: 'row',
    width: 280,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  userCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    width: 120,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  userCardContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 10,
  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  progressBar: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    zIndex: 200,
    paddingHorizontal: 10,
  },
  header: {
    position: 'absolute',
    width: '100%',
    zIndex: 200,
  },
  imageContainer: {
    flex: 1,
  },
  imageWrapper: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default StoryViewer;
