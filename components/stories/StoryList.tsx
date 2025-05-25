import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import StoryThumbnail from './StoryThumbnail';
import { users } from '../../data/stories';
import { useRouter } from 'expo-router';

export const StoryList: React.FC = () => {
  const router = useRouter();

  const handleStoryPress = (userId: string) => {
    router.push(`/story/${userId}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {users.map((user) => (
          <StoryThumbnail
            key={user.id}
            user={user}
            onPress={handleStoryPress}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#DBDBDB',
  },
  scrollContent: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
});

export default StoryList;
