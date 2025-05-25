export interface Story {
  id: string;
  imageUrl: string;
  timestamp: string;
  location?: string;
  userId?: string;
  username?: string;
  userAvatar?: string;
  userFullName?: string;
}

export interface UserStory {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  stories: {
    id: string;
    imageUrl: string;
    timestamp: string;
    location?: string;
  }[];
}

export interface StoryViewerProps {
  initialStoryId?: string;
  initialUserId?: string;
  onClose: () => void;
}

export interface StoryThumbnailProps {
  user: UserStory;
  onPress: (userId: string) => void;
}

export interface StoryProgressProps {
  stories: Story[];
  currentIndex: number;
  duration: number;
  isPlaying: boolean;
}

export interface StoryNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}
