import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Family from '../screens/Family';
import FamilyPostRead from '../screens/FamilyPostRead';
import FamilyPostEdit from '../screens/FamilyGroupEdit';
import FamilyPostWrite from '../screens/FamilyPostWrite';

export type FamilyScreenStackParamList = {
  Family: undefined;
  FamilyPostRead: undefined;
  FamilyPostEdit: undefined;
  FamilyPostWrite: undefined;
};

const FamilyScreenStack =
  createNativeStackNavigator<FamilyScreenStackParamList>();

function FamilyScreen() {
  return (
    <FamilyScreenStack.Navigator>
      <FamilyScreenStack.Screen
        name="Family"
        component={Family}
        options={{
          headerShown: false,
        }}
      />
      <FamilyScreenStack.Screen
        name="FamilyPostRead"
        component={FamilyPostRead}
        options={{
          headerShown: false,
        }}
      />
      <FamilyScreenStack.Screen
        name="FamilyPostEdit"
        component={FamilyPostEdit}
      />
      <FamilyScreenStack.Screen
        name="FamilyPostWrite"
        component={FamilyPostWrite}
      />
    </FamilyScreenStack.Navigator>
  );
}

export default FamilyScreen;
