import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { BottomTabNavigator } from './bottom-tab-navigator'
import { SplashScreen } from '../screens/splash/screen'
import { OnboardingScreen } from '../screens/onboarding/screen'

const Stack = createStackNavigator()

export function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Main" component={BottomTabNavigator} />
    </Stack.Navigator>
  )
}