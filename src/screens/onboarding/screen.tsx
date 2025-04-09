import { useTheme } from '@emotion/react';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, ImageBackground, Animated, Text, View } from 'react-native'
import { Button, Icon } from '../../components';
import { AnimatedFadeView } from '../../animations';
import { useAuth } from '../../hooks/useAuth';

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground)

export const OnboardingScreen = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const scale = useRef(new Animated.Value(1.2)).current;

  const { user, login, logout, isLoggedIn } = useAuth();

  useEffect(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <View style={styles.wrapper}>
      {/* Background animado separado */}
      <AnimatedFadeView animation="fadeIn" style={[styles.background]}>
        <AnimatedImageBackground
          source={require("../../../assets/images/bg-onboarding.png")}
          style={[styles.background, { transform: [{ scale }] }]}
          resizeMode="cover"
        />
      </AnimatedFadeView>

      {/* Conteúdo sobre o fundo */}
      <View style={styles.container}>
        <View style={styles.hello}>
          <AnimatedFadeView animation="fadeInUp">
            <Text style={styles.title}>Bem-vindo</Text>
          </AnimatedFadeView>
          <AnimatedFadeView animation="fadeInUp" delay={300}>
            <Text style={styles.description}>
              Explore a nova experiência com a GoTravel
            </Text>
          </AnimatedFadeView>
        </View>
          
        <View style={styles.buttons}>
          <AnimatedFadeView animation="fadeInUp" delay={600}>
            <Button variant="outline" label="Continuar com o Google" onPress={login}>
              <Icon name="Google" size={20} />
            </Button>
          </AnimatedFadeView>
          <AnimatedFadeView animation="fadeInUp" delay={900}>
            <Button variant="outline" label="Continuar com o Facebook" onPress={() => {}}>
              <Icon name="Facebook" size={20} />
            </Button>
          </AnimatedFadeView>
        </View>
      </View>
    </View>
  )
}

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