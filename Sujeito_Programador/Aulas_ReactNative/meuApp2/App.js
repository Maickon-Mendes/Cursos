import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Pages/Home'
import Sobre from './src/Pages/Sobre'
import Contato from './src/Pages/Contato';

import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard:true, /*para ocultar o tabbar quando abrir o teclado */
        tabBarShowLabel: false, /**não aparecer o nome tab bar */
        tabBarActiveTintColor: '#fff', /**cor tab bar */

        tabBarStyle:{
          backgroundColor: '#202225',
          borderTopWidth: 0 ,
        }
      }}>
        <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon:({color, size}) =>{
            return <Feather name="home" color={color} size={size} />
          }
        }}
        />

        <Tab.Screen
        name='Sobre'
        component={Sobre}
        options={{
        tabBarIcon:({color, size}) =>{
          return <Feather name="file-text" color={color} size={size} />
        }
      }}
        />

        <Tab.Screen
        name='Contato'
        component={Contato}
        options={{
          tabBarIcon:({color, size}) =>{
            return <Feather name="phone-call" color={color} size={size} />
          }
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
