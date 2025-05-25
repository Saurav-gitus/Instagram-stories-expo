import React from 'react';
import { Tabs, Slot, usePathname, useRouter } from 'expo-router';
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Platform,
} from 'react-native';
import {
  Chrome as Home,
  Search,
  SquarePlus as PlusSquare,
  Heart,
  User,
} from 'lucide-react-native';

export default function ResponsiveLayout() {
  const { width } = useWindowDimensions();
  const pathname = usePathname();
  const router = useRouter();
  const isLargeScreen = width >= 768;

  const routes = [
    { name: '/', icon: Home, label: 'Home' },
    { name: '/search', icon: Search, label: 'Search' },
    { name: '/create', icon: PlusSquare, label: 'Create' },
    { name: '/activity', icon: Heart, label: 'Activity' },
    { name: '/profile', icon: User, label: 'Profile' },
  ];

  if (!isLargeScreen) {
    // ✅ MOBILE VIEW: Bottom Tab Navigation
    return (
      <Tabs
        screenOptions={{
          tabBarStyle: {
            height: 50,
            borderTopWidth: 0.5,
            borderTopColor: '#DBDBDB',
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#000',
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Search color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            tabBarIcon: ({ color, size }) => (
              <PlusSquare color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="activity"
          options={{
            title: 'Activity',
            tabBarIcon: ({ color, size }) => (
              <Heart color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
          }}
        />
      </Tabs>
    );
  }

  // ✅ DESKTOP VIEW: Sidebar on the Left
  return (
    <SafeAreaView style={styles.desktopContainer}>
      <View style={styles.sidebar}>
        {routes.map(({ name, icon: Icon, label }) => {
          const isActive = pathname === name;
          return (
            <Pressable
              key={name}
              onPress={() => router.push(name as any)}
              style={[styles.navItem, isActive && styles.navItemActive]}
            >
              <View style={styles.navItemContent}>
                <Icon size={24} color={isActive ? '#000' : '#888'} />
                <Text
                  style={[styles.navLabel, isActive && styles.navLabelActive]}
                >
                  {label}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.divider} />

      <View style={styles.mainContent}>
        <Slot />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  desktopContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  sidebar: {
    width: 200,
    paddingTop: Platform.OS === 'web' ? 32 : 16,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#DBDBDB',
  },
  navItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  navItemActive: {
    backgroundColor: '#f5f5f5',
  },
  navItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  navLabel: {
    fontSize: 16,
    color: '#888',
  },
  navLabelActive: {
    color: '#000',
    fontWeight: '600',
  },
  divider: {
    width: 1,
    backgroundColor: '#DBDBDB',
  },
  mainContent: {
    flex: 1,
  },
});
