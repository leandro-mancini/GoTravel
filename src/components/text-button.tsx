import { useTheme } from "@emotion/react";
import React from "react";
import { Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Ripple from "react-native-material-ripple";

interface TextButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const TextButton = ({ label, onPress, style, textStyle }: TextButtonProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  
  return (
    <Ripple onPress={onPress} style={[styles.button, style]} rippleContainerBorderRadius={8}>
        <Text style={[styles.text, textStyle]}>{label}</Text>
    </Ripple>
  );
};

const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: theme.typography.fontFamily.semiBold,
    color: theme.colors.primary[100]
  },
});