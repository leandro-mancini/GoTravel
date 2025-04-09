import { useTheme } from '@emotion/react';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, ImageBackground, Animated, Text, View } from 'react-native'
import { Button, Icon } from '../../components';

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground)

export const OnboardingScreen = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const scale = useRef(new Animated.Value(1.2)).current;
  const helloAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start()

    Animated.stagger(200, [
      animateFadeSlide(helloAnim),
    ]).start();
  }, [])

  return (
    <View style={styles.wrapper}>
      {/* Background animado separado */}
      <AnimatedImageBackground
        source={require("../../../assets/images/bg-onboarding.png")}
        style={[styles.background, { transform: [{ scale }] }]}
        resizeMode="cover"
      />

      {/* Conteúdo sobre o fundo */}
      <View style={styles.container}>
        <Animated.View style={[styles.hello, animatedTopStyle(helloAnim)]}>
          <Text style={styles.title}>Bem-vindo</Text>
          <Text style={styles.description}>
            Explore a nova experiência com a GoTravel
          </Text>
        </Animated.View>
        <View style={styles.buttons}>
          <Button variant="outline" label="Continuar com o Google" onPress={() => {}}>
            <Icon name="Google" size={20} />
          </Button>
          <Button variant="outline" label="Continuar com o Facebook" onPress={() => {}}>
            <Icon name="Facebook" size={20} />
          </Button>
        </View>
      </View>
    </View>
  )
}

const animateFadeSlide = (animatedValue: Animated.Value) =>
  Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
  })

const animatedTopStyle = (animatedValue: Animated.Value) => ({
  opacity: animatedValue,
  transform: [
      {
          translateY: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [20, 0],
          }),
      },
  ],
})

const createStyles = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    background: {
      ...StyleSheet.absoluteFillObject,
    },
    container: {
      gap: 30,
      paddingTop: 60
    },
    hello: {
      alignItems: "center",
      gap: 12,
    },
    title: {
      fontSize: 40,
      lineHeight: 42,
      fontFamily: theme.typography.fontFamily.medium,
      color: theme.colors.dark.primary[100]
    },
    description: {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.colors.text.secondary[100]
    },
    buttons: {
      paddingHorizontal: 40,
      gap: 16
    },
  })