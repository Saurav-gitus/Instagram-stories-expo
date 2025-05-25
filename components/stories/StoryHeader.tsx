import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { X } from "lucide-react-native";
import { formatDistanceToNow } from "../../utils/dateUtils";

interface StoryHeaderProps {
  username: string;
  userAvatar: string;
  timestamp: string;
  location?: string;
  onClose: () => void;
}

export const StoryHeader: React.FC<StoryHeaderProps> = ({
  username,
  userAvatar,
  timestamp,
  location,
  onClose,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image source={{ uri: userAvatar }} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.timestamp}>
            {formatDistanceToNow(new Date(timestamp))}
            {location ? ` • ${location}` : ""}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <X color="white" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "white",
  },
  textContainer: {
    marginLeft: 10,
  },
  username: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  timestamp: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 12,
  },
  closeButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StoryHeader;
