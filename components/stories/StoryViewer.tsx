import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import StoryProgress from './StoryProgress';
import StoryNavigation from './StoryNavigation';
import StoryHeader from './StoryHeader';
import { getUserStories, users } from '../../data/stories';
import type { Story, StoryViewerProps } from '../../types/stories';

const { width, height } = Dimensions.get('window');
const STORY_DURATION = 5000; // 5 seconds

export const StoryViewer: React.FC<StoryViewerProps> = ({
  initialUserId,
  onClose,
}) => {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [allUserStories, setAllUserStories] = useState<Story[]>([]);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const timer = useRef<NodeJS.Timeout | null>(null);

  // Find the initial user index if provided
  useEffect(() => {
    if (initialUserId) {
      const index = users.findIndex((user) => user.id === initialUserId);
      if (index !== -1) {
        setCurrentUserIndex(index);
      }
    }

    loadUserStories(currentUserIndex);
  }, [initialUserId]);

  // Load stories for the current user
  const loadUserStories = (userIndex: number) => {
    const user = users[userIndex];
    if (user) {
      const stories = getUserStories(user.id);
      setAllUserStories(stories);
      setCurrentStoryIndex(0);
    }
  };

  // Start timer when story changes
  useEffect(() => {
    startStoryTimer();
    fadeIn();

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [currentUserIndex, currentStoryIndex]);

  const fadeIn = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startStoryTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    if (!paused) {
      timer.current = setTimeout(() => {
        goToNextStory();
      }, STORY_DURATION);
    }
  };

  const goToPreviousStory = () => {
    if (currentStoryIndex > 0) {
      // Go to previous story in current user's stories
      setCurrentStoryIndex(currentStoryIndex - 1);
    } else if (currentUserIndex > 0) {
      // Go to previous user's last story
      const prevUserIndex = currentUserIndex - 1;
      setCurrentUserIndex(prevUserIndex);
      const prevUserStories = getUserStories(users[prevUserIndex].id);
      setAllUserStories(prevUserStories);
      setCurrentStoryIndex(prevUserStories.length - 1);
    } else {
      // We're at the first story, loop back to the last one
      const lastUserIndex = users.length - 1;
      setCurrentUserIndex(lastUserIndex);
      const lastUserStories = getUserStories(users[lastUserIndex].id);
      setAllUserStories(lastUserStories);
      setCurrentStoryIndex(lastUserStories.length - 1);
    }
  };

  const goToNextStory = () => {
    if (currentStoryIndex < allUserStories.length - 1) {
      // Go to next story in current user's stories
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else if (currentUserIndex < users.length - 1) {
      // Go to next user's first story
      const nextUserIndex = currentUserIndex + 1;
      setCurrentUserIndex(nextUserIndex);
      loadUserStories(nextUserIndex);
    } else {
      // We're at the last story, close the viewer or loop back
      onClose();
    }
  };

  const handlePause = () => {
    setPaused(true);
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };

  const handleResume = () => {
    setPaused(false);
    startStoryTimer();
  };

  if (allUserStories.length === 0) {
    return null;
  }

  const currentStory = allUserStories[currentStoryIndex];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <StoryProgress
        stories={allUserStories}
        currentIndex={currentStoryIndex}
        duration={STORY_DURATION}
        isPlaying={!paused}
      />

      <StoryHeader
        username={currentStory.username || ''}
        userAvatar={currentStory.userAvatar || ''}
        timestamp={currentStory.timestamp}
        location={currentStory.location}
        onClose={onClose}
      />

      <TouchableOpacity
        activeOpacity={1}
        style={styles.imageContainer}
        onLongPress={handlePause}
        onPressOut={handleResume}
      >
        <Animated.View style={[styles.imageWrapper, { opacity: fadeAnim }]}>
          <Image
            source={{ uri: currentStory.imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
          <LinearGradient
            colors={[
              'rgba(0,0,0,0.5)',
              'transparent',
              'transparent',
              'rgba(0,0,0,0.3)',
            ]}
            style={styles.gradient}
          />
        </Animated.View>
      </TouchableOpacity>

      <StoryNavigation onPrevious={goToPreviousStory} onNext={goToNextStory} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: width,
    height: height,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default StoryViewer;
