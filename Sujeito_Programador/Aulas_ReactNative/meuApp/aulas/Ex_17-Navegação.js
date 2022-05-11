import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home'
import Sobre from './src/pages/sobre'

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="Home"
          component={Home}
          options={{
            title: 'Inicio',
            headerStyle:{
              backgroundColor: '#999999'
            },
            headerTintColor: '#fff',
            headerShown: false,
          }}
          />
        <Stack.Screen 
        name="Sobre" 
        component={Sobre}
        options={{
          title: 'Pagina Sobre'
        }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}