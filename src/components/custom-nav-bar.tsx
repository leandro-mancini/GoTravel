import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export const CustomNavBar = ({ onPress, route }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{route.name}</Text>
    </TouchableOpacity>
  )
}