import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  Platform,
} from 'react-native';
import { StoryList } from '../../components/stories';
import { MessageSquare, Heart, Send, Bookmark } from 'lucide-react-native';
import Constants from 'expo-constants';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://fontmeme.com/images/instagram-new-logo.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerActions}>
          <Heart style={styles.icon} size={24} color="#000" />
          <MessageSquare style={styles.icon} size={24} color="#000" />
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Centered Story List */}
        <View style={styles.storyContainer}>
          <StoryList />
        </View>

        {/* Centered Feed */}
        <View style={styles.feedContainer}>
          {/* Sample feed post */}
          <View style={styles.postContainer}>
            <View style={styles.postHeader}>
              <View style={styles.postUser}>
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600',
                  }}
                  style={styles.postAvatar}
                />
                <Text style={styles.postUsername}>saurav_kumar</Text>
              </View>
            </View>

            <Image
              source={{
                uri: 'https://images.pexels.com/photos/3025496/pexels-photo-3025496.jpeg?auto=compress&cs=tinysrgb&w=600',
              }}
              style={styles.postImage}
            />

            <View style={styles.postActions}>
              <View style={styles.leftActions}>
                <Heart style={styles.actionIcon} size={24} color="#000" />
                <MessageSquare
                  style={styles.actionIcon}
                  size={24}
                  color="#000"
                />
                <Send style={styles.actionIcon} size={24} color="#000" />
              </View>
              <Bookmark size={24} color="#000" />
            </View>

            <View style={styles.postFooter}>
              <Text style={styles.likesText}>12,345 likes</Text>
              <Text style={styles.captionText}>
                <Text style={styles.boldText}>saurav_kumar</Text> Exploring
                Punjab 🌆
              </Text>
              <Text style={styles.viewCommentsText}>View all 243 comments</Text>
              <Text style={styles.timeText}>2 HOURS AGO</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#DBDBDB',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 24,
  },
  logo: {
    width: 104,
    height: 30,
  },
  scrollView: {
    flex: 1,
  },
  feedContainer: {
    flex: 1,
    paddingHorizontal: 0,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 600,
  },
  postContainer: {
    marginBottom: 12,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 56,
  },
  postUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  postUsername: {
    fontWeight: '600',
    fontSize: 14,
  },
  postImage: {
    width: '100%',
    height: 375,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  leftActions: {
    flexDirection: 'row',
  },
  actionIcon: {
    marginRight: 16,
  },
  postFooter: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  likesText: {
    fontWeight: '600',
    marginBottom: 6,
  },
  captionText: {
    marginBottom: 6,
  },
  boldText: {
    fontWeight: '600',
  },
  viewCommentsText: {
    color: '#8e8e8e',
    marginBottom: 6,
  },
  timeText: {
    fontSize: 10,
    color: '#8e8e8e',
  },
  storyContainer: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 600,
    paddingVertical: 12,
  },
});
