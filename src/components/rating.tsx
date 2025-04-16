import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { Icon } from "./icon";
import { useTheme } from "@emotion/react";

interface RatingProps {
  value: number;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  size = 16,
  color = '#FFD601',
  style,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const fullStars = Math.floor(value);
  const hasHalfStar = value - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <View style={[styles.container, style]}>
      {[...Array(fullStars)].map((_, i) => (
        <Icon key={`full-${i}`} name="Star" size={size} color={color} />
      ))}
      {hasHalfStar && <Icon name="StarHalfOutline" size={size} color={color} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Icon key={`empty-${i}`} name="StarOutline" size={size} color={color} />
      ))}
      <Text style={styles.text}>
        {value.toFixed(1)}
      </Text>
    </View>
  );
};

const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: theme.typography.fontFamily.regular,
    marginLeft: 12,
    color: '#fff',
  },
});