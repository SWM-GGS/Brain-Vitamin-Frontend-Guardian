import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Patient from '../screens/Patient';
import PatientActivity from '../screens/PatientActivity';
import PatientAnalyze from '../screens/PatientAnalyze';
import FamilyGroupScreen from './FamilyGroupScreen';

export type PatientScreenStackParamList = {
  Patient: undefined;
  PatientActivity: undefined;
  PatientAnalyze: undefined;
  FamilyGroupScreen: undefined;
};

const PatientScreenStack =
  createNativeStackNavigator<PatientScreenStackParamList>();

function PatientScreen() {
  return (
    <PatientScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <PatientScreenStack.Screen name="Patient" component={Patient} />
      <PatientScreenStack.Screen
        name="PatientActivity"
        component={PatientActivity}
      />
      <PatientScreenStack.Screen
        name="PatientAnalyze"
        component={PatientAnalyze}
      />
      <PatientScreenStack.Screen
        name="FamilyGroupScreen"
        component={FamilyGroupScreen}
      />
    </PatientScreenStack.Navigator>
  );
}

export default PatientScreen;
