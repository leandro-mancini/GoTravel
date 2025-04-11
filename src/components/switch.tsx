import React, { useEffect, useRef } from 'react';
import {
  Pressable,
  Animated,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { switchRecipe } from '../theme';
import { useTheme } from '@emotion/react';

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
}

export const Switch: React.FC<SwitchProps> = ({
  value,
  onValueChange,
  style,
}) => {
  const offset = useRef(new Animated.Value(value ? 1 : 0)).current;
  const theme = useTheme();
  const styles = switchRecipe(theme);

  useEffect(() => {
    Animated.timing(offset, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const thumbTranslate = offset.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 20], // posição do thumb
  });

  const backgroundColor = offset.interpolate({
    inputRange: [0, 1],
    outputRange: ['#F2F2F2', '#003AD2'],
  });

  return (
    <Pressable
      onPress={() => onValueChange(!value)}
      style={[styles.container, style]}
    >
      <Animated.View style={[styles.track, { backgroundColor }]}>
        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [{ translateX: thumbTranslate }],
            },
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};