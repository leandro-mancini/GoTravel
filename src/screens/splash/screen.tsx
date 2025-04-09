import React, { useEffect } from 'react'
import { View, StyleSheet, Animated, Text } from 'react-native'
import { Icon } from '../../components'
import { useTheme } from '@emotion/react'
import { AnimatedFadeView } from '../../animations'

export const SplashScreen = ({ navigation }: any) => {
    const theme = useTheme();
    const styles = createStyles(theme);

    useEffect(() => {
        setTimeout(() => {
          navigation.replace("Onboarding");
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <AnimatedFadeView animation="fadeIn">
                <Icon name='Logo' size={138} />
            </AnimatedFadeView>
            <AnimatedFadeView animation="fadeInLeft" delay={150}>
                <Text style={styles.name}>GoTravel</Text>
            </AnimatedFadeView>
            <AnimatedFadeView animation="fadeInRight" delay={300}>
                <Text style={styles.slogan}>ENCONTRE, PLANEJE, VÁ</Text>
            </AnimatedFadeView>
        </View>
    )
}

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