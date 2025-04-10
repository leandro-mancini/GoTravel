import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Icon } from './icon'
import Ripple from 'react-native-material-ripple'
import { useTheme } from '@emotion/react'
import { useNavigation } from '@react-navigation/native'

type CustomNavBarProps = {
  onPress: () => void
  route: { name: string }
  isFocused: boolean
}

const LABELS: Record<string, string> = {
  Home: 'Início',
  MyTrip: 'Viagem',
  Search: 'Buscar',
  Saved: 'Salvos',
  Settings: 'Ajustes',
}

export const CustomNavBar = ({ onPress, route , isFocused}: CustomNavBarProps) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = createStyles(theme);
  
  const color = isFocused ? '#003AD2' : '#777E90';
  const label = LABELS[route.name] || route.name;

  const renderIcon = (color: string) => {
    switch (route.name) {
      case 'Home':
        return <Icon name={isFocused ? 'HomeFilled' : 'Home'} size={20} color={color} />
      case 'MyTrip':
        return <Icon name={isFocused ? 'DiscoveryFilled' : 'Discovery'} size={20} color={color} />
      case 'Search':
        return <Icon name="Search" size={20} color={color} />
      case 'Saved':
        return <Icon name={isFocused ? 'BookmarkFilled' : 'Bookmark'} size={20} color={color} />
      case 'Settings':
        return <Icon name={isFocused ? 'SettingFilled' : 'Setting'} size={20} color={color} />
      default:
        return null
    }
  }

  const handlePress = () => {
    if (route.name === 'Search') {
      navigation.navigate('SearchFullScreen') // Navega fora da Tab
    } else {
      onPress()
    }
  }

  return (
    <Ripple
      style={styles.button}
      onPress={handlePress}
    >
      {renderIcon(color)}
      <Text style={styles.label}>{label}</Text>
    </Ripple>
  )
}

const createStyles = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    button: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
    },
    label: {
      fontSize: 10,
      lineHeight: 12,
      fontFamily: theme.typography.fontFamily.medium
    }
  })