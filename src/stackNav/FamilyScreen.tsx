import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Family from '../pages/Family';
import FamilyPostRead from '../pages/FamilyPostRead';
import FamilyPostEdit from '../pages/FamilyGroupEdit';
import FamilyPostWrite from '../pages/FamilyPostWrite';
import VitaminWrite from '../pages/VitaminWrite';
import VitaminEdit from '../pages/VitaminEdit';

export type FamilyScreenStackParamList = {
  Family: undefined;
  FamilyPostRead: undefined;
  FamilyPostEdit: undefined;
  FamilyPostWrite: undefined;
  VitaminWrite: undefined;
  VitaminEdit: undefined;
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
      <FamilyScreenStack.Screen name="VitaminWrite" component={VitaminWrite} />
      <FamilyScreenStack.Screen name="VitaminEdit" component={VitaminEdit} />
    </FamilyScreenStack.Navigator>
  );
}

export default FamilyScreen;
