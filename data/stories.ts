import { Story, UserStory } from "../types/stories";

// Sample user data
export const users: UserStory[] = [
  {
    id: "1",
    username: "jane_doe",
    fullName: "Jane Doe",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    stories: [
      {
        id: "1-1",
        imageUrl:
          "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg",
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        location: "New York, NY",
      },
      {
        id: "1-2",
        imageUrl:
          "https://images.pexels.com/photos/1056553/pexels-photo-1056553.jpeg",
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        location: "Brooklyn, NY",
      },
    ],
  },
  {
    id: "2",
    username: "travel_guy",
    fullName: "Alex Johnson",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    stories: [
      {
        id: "2-1",
        imageUrl:
          "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg",
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        location: "Bali, Indonesia",
      },
    ],
  },
  {
    id: "3",
    username: "photo_enthusiast",
    fullName: "Sarah Williams",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    stories: [
      {
        id: "3-1",
        imageUrl:
          "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg",
        timestamp: new Date(Date.now() - 5400000).toISOString(),
        location: "Paris, France",
      },
      {
        id: "3-2",
        imageUrl:
          "https://images.pexels.com/photos/2403101/pexels-photo-2403101.jpeg",
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        location: "Paris, France",
      },
      {
        id: "3-3",
        imageUrl:
          "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg",
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        location: "Paris, France",
      },
    ],
  },
  {
    id: "4",
    username: "food_lover",
    fullName: "Mike Chen",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    stories: [
      {
        id: "4-1",
        imageUrl:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        location: "Tokyo, Japan",
      },
      {
        id: "4-2",
        imageUrl:
          "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        location: "Tokyo, Japan",
      },
    ],
  },
  {
    id: "5",
    username: "nature_explorer",
    fullName: "Emma Wilson",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    stories: [
      {
        id: "5-1",
        imageUrl:
          "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        location: "Yosemite, CA",
      },
    ],
  },
  {
    id: "6",
    username: "urban_artist",
    fullName: "David Kim",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    stories: [
      {
        id: "6-1",
        imageUrl:
          "https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg",
        timestamp: new Date(Date.now() - 5400000).toISOString(),
        location: "Berlin, Germany",
      },
      {
        id: "6-2",
        imageUrl:
          "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg",
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        location: "Berlin, Germany",
      },
    ],
  },
];

// Function to get all stories flattened
export const getAllStories = (): Story[] => {
  return users.flatMap((user) =>
    user.stories.map((story) => ({
      ...story,
      userId: user.id,
      username: user.username,
      userAvatar: user.avatar,
      userFullName: user.fullName,
    }))
  );
};

// Function to get stories for a specific user
export const getUserStories = (userId: string): Story[] => {
  const user = users.find((u) => u.id === userId);
  if (!user) return [];

  return user.stories.map((story) => ({
    ...story,
    userId: user.id,
    username: user.username,
    userAvatar: user.avatar,
    userFullName: user.fullName,
  }));
};

// Function to get a specific story
export const getStory = (storyId: string): Story | undefined => {
  for (const user of users) {
    const story = user.stories.find((s) => s.id === storyId);
    if (story) {
      return {
        ...story,
        userId: user.id,
        username: user.username,
        userAvatar: user.avatar,
        userFullName: user.fullName,
      };
    }
  }
  return undefined;
};
