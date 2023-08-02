import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FamilyKey from '../pages/FamilyKey';
import Relationship from '../pages/Relationship';

export type FamilyGroupAddStackParamList = {
  FamilyKey: undefined;
  Relationship: { familyId: number; familyName: string };
};

const FamilyGroupAddStack =
  createNativeStackNavigator<FamilyGroupAddStackParamList>();

function FamilyGroupAdd() {
  return (
    <FamilyGroupAddStack.Navigator screenOptions={{ headerShown: false }}>
      <FamilyGroupAddStack.Screen name="FamilyKey" component={FamilyKey} />
      <FamilyGroupAddStack.Screen
        name="Relationship"
        component={Relationship}
      />
    </FamilyGroupAddStack.Navigator>
  );
}

export default FamilyGroupAdd;
