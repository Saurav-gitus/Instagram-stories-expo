import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StoryViewer } from '@/components/stories';
import Constants from 'expo-constants';

export default function StoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  useEffect(() => {
    if (Platform.OS !== 'web') {
      StatusBar.setHidden(true, 'fade');

      return () => {
        StatusBar.setHidden(false, 'fade');
      };
    }
  }, []);

  const handleClose = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StoryViewer initialUserId={id} onClose={handleClose} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
