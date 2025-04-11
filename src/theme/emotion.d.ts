import '@emotion/react'
import { TextStyle } from 'react-native'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      transparent: string
      current: string
      base: string
      surface: string
      primary: {
        100: string
        80: string
        60: string
        40: string
        20: string
        10: string
      }
      secondary: {
        100: string
        80: string
        60: string
        40: string
        20: string
        10: string
      },
      text: {
        primary: {
          100: string
          80: string
          60: string
          40: string
          20: string
          10: string
        }
        secondary: {
          100: string
          80: string
          60: string
          40: string
          20: string
          10: string
        }
        tertiary: {
          100: string
          80: string
          60: string
          40: string
          20: string
          10: string
        }
      }
      dark: {
        primary: {
          100: string
          80: string
          60: string
          40: string
          20: string
          10: string
        }
        secondary: {
          100: string
          80: string
          60: string
          40: string
          20: string
          10: string
        }
        tertiary: {
          100: string
          80: string
          60: string
          40: string
          20: string
          10: string
        }
      }
    }
    typography: {
      fontSize: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
        '2xl': number
        '3xl': number
        '4xl': number
        '5xl': number
        '6xl': number
      }
      fontFamily: {
        regular: string
        medium: string
        bold: string
        extraBold: string
      },
    }
    textStyle: {
      heading: {
        1: TextStyle
        2: TextStyle
        3: TextStyle
        4: TextStyle
        5: TextStyle
      }
      subHeading: {
        1: TextStyle
        2: TextStyle
        3: TextStyle
        4: TextStyle
      }
      bodyText: {
        1: TextStyle
        2: TextStyle
        3: TextStyle
        4: TextStyle
        5: TextStyle
      }
      buttonText: {
        1: TextStyle
        2: TextStyle
        3: TextStyle
        4: TextStyle
      }
    }
  }
}