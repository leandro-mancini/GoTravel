import React, { useEffect } from 'react'
import { ThemeProvider } from './theme/provider'
import { AppNavigation } from './navigation'
import { configureGoogleSignIn } from './services';

const App = () => {
  useEffect(() => {
    configureGoogleSignIn();
  }, []);
  
  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  )
}

export default App