import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Vitamin from '../screens/Vitamin';
import Album from '../screens/Album';

export type VitaminScreenStackParamList = {
  Vitamin: undefined;
  Album: undefined;
};

const Stack = createNativeStackNavigator<VitaminScreenStackParamList>();

function VitaminScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Vitamin" component={Vitamin} />
      <Stack.Screen name="Album" component={Album} />
    </Stack.Navigator>
  );
}

export default VitaminScreen;
