import { Story, UserStory } from '../types/stories';

// Sample user data
export const users: UserStory[] = [
  {
    id: '1',
    username: 'saurav_kumar',
    fullName: 'Saurav Kumar',
    avatar:
      'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600',
    stories: [
      {
        id: '1-1',
        imageUrl:
          'https://images.pexels.com/photos/32224339/pexels-photo-32224339/free-photo-of-elderly-woman-sitting-outdoors-in-nakodar-india.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        location: 'Kharar, Punjab',
      },
      {
        id: '1-2',
        imageUrl:
          'https://images.pexels.com/photos/15669533/pexels-photo-15669533/free-photo-of-the-golden-temple-in-amritsar-india.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        location: 'Amritsar, Punjab',
      },
      {
        id: '1-3',
        imageUrl:
          'https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        location: 'Amritsar, Punjab',
      },
    ],
  },
  {
    id: '2',
    username: 'sunil_tamta',
    fullName: 'Sunil Kumar',
    avatar:
      'https://images.pexels.com/photos/20542650/pexels-photo-20542650/free-photo-of-picture-of-a-male-model.jpeg?auto=compress&cs=tinysrgb&w=600',
    stories: [
      {
        id: '2-1',
        imageUrl:
          'https://images.pexels.com/photos/14374972/pexels-photo-14374972.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        location: 'Durg, CG',
      },
      {
        id: '2-2',
        imageUrl:
          'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        location: 'Delhi, india',
      },
    ],
  },
  {
    id: '3',
    username: 'manoj_kumar',
    fullName: 'Manoj Kumar',
    avatar:
      'https://images.pexels.com/photos/4763665/pexels-photo-4763665.jpeg?auto=compress&cs=tinysrgb&w=600',
    stories: [
      {
        id: '3-1',
        imageUrl:
          'https://images.pexels.com/photos/1542620/pexels-photo-1542620.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 5400000).toISOString(),
        location: 'Delhi, India',
      },
      {
        id: '3-2',
        imageUrl:
          'https://images.pexels.com/photos/904272/pexels-photo-904272.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        location: 'Delhi, India',
      },
      {
        id: '3-3',
        imageUrl:
          'https://images.pexels.com/photos/1007431/pexels-photo-1007431.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        location: 'Delhi, India',
      },
    ],
  },
  {
    id: '4',
    username: 'akash_singh',
    fullName: 'Akash Singh',
    avatar:
      'https://images.pexels.com/photos/13013388/pexels-photo-13013388.jpeg?auto=compress&cs=tinysrgb&w=600',
    stories: [
      {
        id: '4-1',
        imageUrl:
          'https://images.pexels.com/photos/12377770/pexels-photo-12377770.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        location: 'Mathura, UP',
      },
      {
        id: '4-2',
        imageUrl:
          'https://images.pexels.com/photos/31203536/pexels-photo-31203536/free-photo-of-vibrant-holi-celebration-in-nandgaon-india.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        location: 'Mathura, UP',
      },
      {
        id: '4-3',
        imageUrl:
          'https://images.pexels.com/photos/12455914/pexels-photo-12455914.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        location: 'Mathura, UP',
      },
      {
        id: '4-4',
        imageUrl:
          'https://images.pexels.com/photos/29766203/pexels-photo-29766203/free-photo-of-portrait-of-smiling-indian-man-holding-child-at-window.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        location: 'Mathura, UP',
      },
      {
        id: '4-5',
        imageUrl:
          'https://images.pexels.com/photos/15433523/pexels-photo-15433523/free-photo-of-woman-taking-a-picture-on-a-color-festival.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        location: 'Mathura, UP',
      },
    ],
  },
  {
    id: '5',
    username: 'priya_Kumari',
    fullName: 'Priya Kumari',
    avatar:
      'https://images.pexels.com/photos/1376042/pexels-photo-1376042.jpeg?auto=compress&cs=tinysrgb&w=600',
    stories: [
      {
        id: '5-1',
        imageUrl:
          'https://images.pexels.com/photos/30218192/pexels-photo-30218192/free-photo-of-arial-view-of-kumbh-mela-at-triveni-sangam.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        location: 'prayagraj, UP',
      },
      {
        id: '5-2',
        imageUrl:
          'https://images.pexels.com/photos/30605309/pexels-photo-30605309/free-photo-of-priest-performing-ritual-at-kumbh-mela.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        location: 'prayagraj, UP',
      },
      {
        id: '5-3',
        imageUrl:
          'https://images.pexels.com/photos/30416453/pexels-photo-30416453/free-photo-of-street-vendor-in-traditional-attire-at-prayagraj.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        location: 'prayagraj, UP',
      },
    ],
  },
  {
    id: '6',
    username: 'priyanka_patel',
    fullName: 'Priyanka Patel',
    avatar:
      'https://images.pexels.com/photos/1324995/pexels-photo-1324995.jpeg?auto=compress&cs=tinysrgb&w=600',
    stories: [
      {
        id: '6-1',
        imageUrl:
          'https://images.pexels.com/photos/9268302/pexels-photo-9268302.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 5400000).toISOString(),
        location: 'Raipur, CG',
      },
      {
        id: '6-2',
        imageUrl:
          'https://images.pexels.com/photos/20621030/pexels-photo-20621030/free-photo-of-candles-on-river.jpeg?auto=compress&cs=tinysrgb&w=600',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        location: 'Raipur, CG',
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
