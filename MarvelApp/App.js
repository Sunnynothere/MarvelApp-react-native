import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Splash from './components/Splash';
import Home from './components/Home';
import HomeTwo from './components/HomeTwo';

const Stack= createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false}} >
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='hometwo' component={HomeTwo} />
        {/* <Stack.Screen name='Marvel App' component={Splash} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
};