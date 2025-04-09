import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { Icon } from '../../components'
import { useTheme } from '@emotion/react'

export const SplashScreen = ({ navigation }: any) => {
    const theme = useTheme();
    const styles = createStyles(theme);

    const logoAnim = useRef(new Animated.Value(0)).current
    const nameAnim = useRef(new Animated.Value(0)).current
    const sloganAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.stagger(200, [
            animateFadeSlide(logoAnim),
            animateFadeSlide(nameAnim),
            animateFadeSlide(sloganAnim),
        ]).start();
    }, [])

    useEffect(() => {
        setTimeout(() => {
          navigation.replace("Onboarding");
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.animated, animatedTopStyle(logoAnim)]}>
                <Icon name='Logo' size={138} />
            </Animated.View>
            <Animated.Text style={[styles.name, animatedRightStyle(nameAnim)]}>
                GoTravel
            </Animated.Text>
            <Animated.Text style={[styles.slogan, animatedLeftStyle(sloganAnim)]}>
                ENCONTRE, PLANEJE, VÁ
            </Animated.Text>
        </View>
    )
}


const animateFadeSlide = (animatedValue: Animated.Value) =>
    Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
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

const animatedRightStyle = (animatedValue: Animated.Value) => ({
    opacity: animatedValue,
    transform: [
        {
            translateX: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-20, 0],
            }),
        },
    ],
})

const animatedLeftStyle = (animatedValue: Animated.Value) => ({
    opacity: animatedValue,
    transform: [
        {
            translateX: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
            }),
        },
    ],
})


const createStyles = (theme: ReturnType<typeof useTheme>) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.white,
            padding: 16,
            alignItems: "center",
            justifyContent: "center",
            gap: 4
        },
        animated: {
            alignItems: "center",
        },
        name: {
            paddingTop: 36,
            fontSize: 40,
            lineHeight: 42,
            fontFamily: theme.typography.fontFamily.extraBold
        },
        slogan: {
            fontFamily: theme.typography.fontFamily.medium,
            fontSize: theme.typography.fontSize.md,
            color: theme.colors.text.primary[100]
        }
    })