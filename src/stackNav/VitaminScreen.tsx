import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Vitamin from '../screens/Vitamin';
import VitaminWrite from '../screens/VitaminWrite';
import VitaminEdit from '../screens/VitaminEdit';

export type VitaminScreenStackParamList = {
  Vitamin: undefined;
  VitaminWrite: undefined;
  VitaminEdit: undefined;
};

const Stack = createNativeStackNavigator<VitaminScreenStackParamList>();

function VitaminScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Vitamin" component={Vitamin} />
      <Stack.Screen name="VitaminWrite" component={VitaminWrite} />
      <Stack.Screen name="VitaminEdit" component={VitaminEdit} />
    </Stack.Navigator>
  );
}

export default VitaminScreen;
