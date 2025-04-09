import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from '@emotion/native'
import { useTheme } from '@emotion/react'

const ButtonContainer = styled(TouchableOpacity)(({ theme }) => ({
  backgroundColor: theme.colors.primary[100],
  height: 58,
  borderRadius: 50,
  alignItems: "center",
  justifyContent: "center"
}))

const ButtonText = styled(Text)(({ theme }) => ({
  color: theme.colors.white,
  ...theme.textStyle.buttonText[1]
}))

export const Button = ({ title, onPress }: { title: string; onPress: () => void }) => {
  const theme = useTheme()

  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  )
}