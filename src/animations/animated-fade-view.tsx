import React, { useEffect } from 'react'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated'
import { ViewProps } from 'react-native'

export type FadeAnimationType =
  | 'fadeIn'
  | 'fadeInDown'
  | 'fadeInDownBig'
  | 'fadeInLeft'
  | 'fadeInLeftBig'
  | 'fadeInRight'
  | 'fadeInRightBig'
  | 'fadeInUp'
  | 'fadeInUpBig'
  | 'fadeInTopLeft'
  | 'fadeInTopRight'
  | 'fadeInBottomLeft'
  | 'fadeInBottomRight'

interface AnimatedFadeProps extends ViewProps {
  animation?: FadeAnimationType
  delay?: number
  duration?: number
  children: React.ReactNode
}

export const AnimatedFadeView = ({
    animation = 'fadeIn',
    delay = 0,
    duration = 500,
    children,
    style,
    ...rest
  }: AnimatedFadeProps) => {
    const opacity = useSharedValue(0)
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)
  
    const offsets: Record<FadeAnimationType, [number, number]> = {
      fadeIn: [0, 0],
      fadeInDown: [0, -20],
      fadeInDownBig: [0, -60],
      fadeInLeft: [-20, 0],
      fadeInLeftBig: [-60, 0],
      fadeInRight: [20, 0],
      fadeInRightBig: [60, 0],
      fadeInUp: [0, 20],
      fadeInUpBig: [0, 60],
      fadeInTopLeft: [-20, -20],
      fadeInTopRight: [20, -20],
      fadeInBottomLeft: [-20, 20],
      fadeInBottomRight: [20, 20],
    }
  
    const [x, y] = offsets[animation]
    translateX.value = x
    translateY.value = y
  
    useEffect(() => {
      opacity.value = withDelay(
        delay,
        withTiming(1, { duration, easing: Easing.out(Easing.ease) })
      )
      translateX.value = withDelay(
        delay,
        withTiming(0, { duration, easing: Easing.out(Easing.ease) })
      )
      translateY.value = withDelay(
        delay,
        withTiming(0, { duration, easing: Easing.out(Easing.ease) })
      )
    }, [])
  
    const animatedStyle = useAnimatedStyle(() => ({
      opacity: opacity.value,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    }))
  
    return (
      <Animated.View style={[animatedStyle, style]} {...rest}>
        {children}
      </Animated.View>
    )
}  