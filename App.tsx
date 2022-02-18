import 'react-native-gesture-handler'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { StatusBar } from 'react-native'

import React from 'react'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'

import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './src/routes/app.routes' 

import theme from './src/global/styles/theme'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'


export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}
