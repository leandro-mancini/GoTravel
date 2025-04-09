import React from 'react'
import { ThemeProvider } from './theme/provider'
import { AppNavigation } from './navigation'

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  )
}

export default App