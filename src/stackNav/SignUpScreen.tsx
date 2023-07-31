import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpStep from './SignUpStep';
import FamilyGroupScreen from './FamilyGroupScreen';

export type SignUpScreenStackParamList = {
  SignUpStep: undefined;
  FamilyGroupScreen: undefined;
};

const SignUpScreenStack =
  createNativeStackNavigator<SignUpScreenStackParamList>();

function SignUpScreen() {
  return (
    <SignUpScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <SignUpScreenStack.Screen name="SignUpStep" component={SignUpStep} />
      <SignUpScreenStack.Screen
        name="FamilyGroupScreen"
        component={FamilyGroupScreen}
      />
    </SignUpScreenStack.Navigator>
  );
}

export default SignUpScreen;
