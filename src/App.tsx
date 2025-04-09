import React, { useEffect } from 'react'
import { ThemeProvider } from './theme/provider'
import { AppNavigation } from './navigation'
// import { configureGoogleSignIn } from './services';
// import { Settings } from 'react-native-fbsdk-next';

const App = () => {
  useEffect(() => {
    // configureGoogleSignIn();
    // Settings.initializeSDK();
  }, []);
  
  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  )
}

export default App