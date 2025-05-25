import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { StoryThumbnailProps } from "../../types/stories";

const AVATAR_SIZE = 70;
const { width } = Dimensions.get("window");

export const StoryThumbnail: React.FC<StoryThumbnailProps> = ({
  user,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(user.id)}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={["#CA1D7E", "#E35157", "#F2703F"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.gradientRing}
      >
        <View style={styles.avatarContainer}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
        </View>
      </LinearGradient>
      <Text style={styles.username} numberOfLines={1}>
        {user.username}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 8,
    width: AVATAR_SIZE + 6,
  },
  gradientRing: {
    width: AVATAR_SIZE + 6,
    height: AVATAR_SIZE + 6,
    borderRadius: (AVATAR_SIZE + 6) / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarContainer: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: "white",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: AVATAR_SIZE - 4,
    height: AVATAR_SIZE - 4,
    borderRadius: (AVATAR_SIZE - 4) / 2,
  },
  username: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
    textAlign: "center",
    width: AVATAR_SIZE + 6,
  },
});

export default StoryThumbnail;
