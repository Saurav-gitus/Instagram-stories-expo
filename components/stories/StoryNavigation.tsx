import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import type { StoryNavigationProps } from '../../types/stories';

const { width } = Dimensions.get('window');

export const StoryNavigation: React.FC<StoryNavigationProps> = ({
  onPrevious,
  onNext,
}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPrevious}>
        <View style={styles.leftNav} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={onNext}>
        <View style={styles.rightNav} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
  },
  leftNav: {
    width: width * 0.3,
    height: '100%',
  },
  rightNav: {
    width: width * 0.7,
    height: '100%',
  },
});

export default StoryNavigation;
