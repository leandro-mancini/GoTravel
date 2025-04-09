import { useTheme } from '@emotion/react';
import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export const OnboardingScreen = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <ImageBackground
      source={require("../../../assets/images/bg-onboarding.png")}
      style={styles.background}
      resizeMode="cover"
    >

    </ImageBackground>
  )
}

const createStyles = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    background: {
      width: "100%",
      height: "100%"
    },
  })