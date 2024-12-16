import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Mzki_reg from './Mzki_reg';
import Main from './Main.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Mzki_reg" component={Mzki_reg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;