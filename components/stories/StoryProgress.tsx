import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";
import type { StoryProgressProps } from "../../types/stories";

export const StoryProgress: React.FC<StoryProgressProps> = ({
  stories,
  currentIndex,
  duration,
  isPlaying,
}) => {
  const progressAnim = useRef(new Animated.Value(0)).current;
  const progressAnimation = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    progressAnim.setValue(0);

    if (isPlaying) {
      progressAnimation.current = Animated.timing(progressAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      });

      progressAnimation.current.start();
    } else {
      progressAnimation.current?.stop();
    }

    return () => {
      progressAnimation.current?.stop();
    };
  }, [currentIndex, isPlaying, duration]);

  return (
    <View style={styles.container}>
      {stories.map((_, index) => (
        <View key={index} style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressBar,
              {
                backgroundColor:
                  index < currentIndex ? "white" : "rgba(255, 255, 255, 0.5)",
              },
            ]}
          />
          {index === currentIndex && (
            <Animated.View
              style={[
                styles.activeProgressBar,
                {
                  width: progressAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0%", "100%"],
                  }),
                },
              ]}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingTop: 12,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  progressBarContainer: {
    flex: 1,
    height: 3,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 3,
    marginHorizontal: 2,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 3,
  },
  activeProgressBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: "white",
    borderRadius: 3,
  },
});

export default StoryProgress;
