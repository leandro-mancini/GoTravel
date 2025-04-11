import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from './root-navigator'
import { StatusBar } from 'react-native'
import { useTheme } from '@emotion/react'

export const AppNavigation = () => {
  const theme = useTheme();
  
  return (
    <>
      <StatusBar backgroundColor={theme.colors.base} barStyle="dark-content" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  )
}