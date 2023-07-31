import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FamilyGroup from '../pages/FamilyGroup';
import FamilyGroupAdd from './FamilyGroupAdd';
import FamilyGroupEdit from '../pages/FamilyGroupEdit';

export type FamilyGroupScreenStackParamList = {
  FamilyGroup: undefined;
  FamilyGroupAdd: undefined;
  FamilyGroupEdit: undefined;
};

const FamilyGroupScreenStack =
  createNativeStackNavigator<FamilyGroupScreenStackParamList>();

function FamilyGroupScreen() {
  return (
    <FamilyGroupScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <FamilyGroupScreenStack.Screen
        name="FamilyGroup"
        component={FamilyGroup}
      />
      <FamilyGroupScreenStack.Screen
        name="FamilyGroupAdd"
        component={FamilyGroupAdd}
      />
      <FamilyGroupScreenStack.Screen
        name="FamilyGroupEdit"
        component={FamilyGroupEdit}
      />
    </FamilyGroupScreenStack.Navigator>
  );
}

export default FamilyGroupScreen;
