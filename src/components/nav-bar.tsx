import React from 'react'
import { Text } from 'react-native'
import { Icon } from './icon'
import Ripple from 'react-native-material-ripple'
import { useTheme } from '@emotion/react'
import { useNavigation } from '@react-navigation/native'
import { navbarRecipe } from '../theme'

type NavBarProps = {
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

export const NavBar = ({ onPress, route , isFocused}: NavBarProps) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = navbarRecipe(theme);
  
  const color = isFocused ? theme.colors.primary[100] : theme.colors.text.secondary[100];
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
      navigation.navigate('SearchFullScreen' as never) // Navega fora da Tab
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