import React, { useEffect } from "react";
import { View, StyleSheet, SafeAreaView, Platform } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StoryViewer } from "@/components/stories";
import Constants from "expo-constants";

export default function StoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  useEffect(() => {
    if (Platform.OS !== "web") {
      try {
        import("expo-status-bar").then(({ StatusBar }) => {
          StatusBar.setStatusBarHidden(true, "fade");
        });
      } catch (error) {
        console.warn("Failed to hide status bar:", error);
      }

      return () => {
        import("expo-status-bar").then(({ StatusBar }) => {
          StatusBar.setStatusBarHidden(false, "fade");
        });
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
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
