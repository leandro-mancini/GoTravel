import React, { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
  StyleProp,
} from 'react-native';
import Ripple from 'react-native-material-ripple';

type Variant = 'outline' | 'ghost';

interface IconButtonProps {
    children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  size?: number;
  variant?: Variant;
  style?: StyleProp<ViewStyle>;
  color?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  onPress,
  size = 24,
  variant = 'outline',
  style,
  color = '#1c1c1c',
}) => {
  const containerStyle: StyleProp<ViewStyle> = [
    styles.base,
    variant === 'outline' && styles.outline,
    variant === 'ghost' && styles.ghost,
    { width: size + 16, height: size + 16, borderRadius: (size + 16) / 2 },
    style,
  ];

  return (
    <Ripple onPress={onPress} style={containerStyle} rippleContainerBorderRadius={50}>
        {children}
    </Ripple>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  outline: {
    borderWidth: 1,
    borderColor: '#EAF0F3',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
});