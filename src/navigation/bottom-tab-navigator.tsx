import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CustomNavBar } from '../components'
import { HomeScreen } from '../screens/home/screen'
import { MyTripScreen } from '../screens/my-trip/screen'
import { SearchScreen } from '../screens/search/screen'
import { SavedScreen } from '../screens/saved/screen'
import { SettingsScreen } from '../screens/settings/screen'

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
          boxShadow: "0 -10 34 0 rgba(217,218,222,0.30)"
        },
        tabBarButton: (props: any) => (
          <CustomNavBar {...props} route={route} isFocused={props.accessibilityState?.selected} />
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