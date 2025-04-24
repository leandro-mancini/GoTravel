import React, { ReactNode } from 'react'
import { Text } from 'react-native'
import styled from '@emotion/native'
import Ripple from "react-native-material-ripple";

type ButtonProps = {
  label: string
  onPress: () => void
  variant?: 'solid' | 'outline',
  children?: ReactNode
}

const getContainerStyle = (variant: ButtonProps['variant'], theme: any) => {
  switch (variant) {
    case 'outline':
      return {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: "#CECECE",
      }
    case 'solid':
    default:
      return {
        backgroundColor: theme.colors.primary[100],
      }
  }
}

const ButtonContainer = styled(Ripple)<{ variant: ButtonProps['variant'] }>(({ theme, variant }) => ({
  height: 58,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
  flexDirection: "row",
  ...getContainerStyle(variant ?? 'solid', theme),
}))

const ButtonText = styled(Text)<{ variant: ButtonProps['variant'] }>(({ theme, variant }) => ({
  color: variant === 'outline' ? "#181818" : theme.colors.base,
  ...theme.textStyle.buttonText[3],
  fontFamily: theme.typography.fontFamily.medium
}))

export const Button = ({ label, onPress, variant = 'solid', children }: ButtonProps) => {
  return (
    <ButtonContainer onPress={onPress} variant={variant} rippleContainerBorderRadius={50}>
      {children}
      <ButtonText variant={variant}>{label}</ButtonText>
    </ButtonContainer>
  )
}