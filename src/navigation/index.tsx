import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from './root-navigator'

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}