import React, { ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { theme } from './index'

interface Props {
  children: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}