import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { SplashScreen } from '../screens/splash/screen'
import { OnboardingScreen } from '../screens/onboarding/screen'
import { CustomNavBar } from '../components'

const Tab = createBottomTabNavigator()

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarButton: (props: any) => <CustomNavBar {...props} route={route} />,
      })}
    >
      <Tab.Screen name="Splash" component={SplashScreen} />
      <Tab.Screen name="Onboarding" component={OnboardingScreen} />
    </Tab.Navigator>
  )
}