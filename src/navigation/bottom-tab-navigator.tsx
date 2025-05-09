import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { NavBar } from '../components'
import { HomeScreen } from '../screens/home/screen'
import { MyTripScreen } from '../screens/my-trip/screen'
import { SearchScreen } from '../screens/search/screen'
import { SavedScreen } from '../screens/saved/screen'
import { SettingsScreen } from '../screens/settings/screen'
import { useTheme } from '@emotion/react'
import { navbarRecipe } from '../theme'

const Tab = createBottomTabNavigator()

export function BottomTabNavigator() {
  const theme = useTheme();
  const styles = navbarRecipe(theme);
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.container,
        tabBarButton: (props: any) => (
          <NavBar {...props} route={route} isFocused={props.accessibilityState?.selected} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyTrip" component={MyTripScreen} />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarStyle: {display: 'none' },
          tabBarLabel: 'Buscar'
        }}
      />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}