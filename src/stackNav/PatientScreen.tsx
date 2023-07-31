import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Patient from '../pages/Patient';
import PatientActivity from '../pages/PatientActivity';
import PatientAnalyze from '../pages/PatientAnalyze';

export type PatientScreenStackParamList = {
  Patient: undefined;
  PatientActivity: undefined;
  PatientAnalyze: undefined;
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
    </PatientScreenStack.Navigator>
  );
}

export default PatientScreen;
