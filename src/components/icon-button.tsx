import { useTheme } from '@emotion/react';
import React, { ReactNode } from 'react';
import {
  ViewStyle,
  GestureResponderEvent,
  StyleProp,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import { iconButtonRecipe } from '../theme';

type Variant = 'outline' | 'ghost';

interface IconButtonProps {
    children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  size?: number;
  variant?: Variant;
  style?: StyleProp<ViewStyle>;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  onPress,
  size = 24,
  variant = 'outline',
  style,
}) => {
  const theme = useTheme();
  const styles = iconButtonRecipe(theme);
  
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