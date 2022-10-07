import React, { type PropsWithChildren } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import index from './index';
import CDetails from './CDetails';
import { NavigationContainer } from '@react-navigation/native';
import Random from './Random';


const NasaApp = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='index'>
        <Stack.Screen name=" " component={index} />
        <Stack.Screen name="CDetails" component={CDetails} />
        <Stack.Screen name="Random" component={Random} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default NasaApp;