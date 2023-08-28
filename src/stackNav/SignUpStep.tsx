import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneNumberSet from '../screens/PhoneNumberSet';
import BirthDateSet from '../screens/BirthDateSet';
import NameSet from '../screens/NameSet';

export type SignUpStepStackParamList = {
  PhoneNumberSet: undefined;
  BirthDateSet: { phoneNumber: string };
  NameSet: {
    phoneNumber: string;
    birthDate: string;
    gender: string;
  };
};

const SignUpStepStack = createNativeStackNavigator<SignUpStepStackParamList>();

function SignUpStep() {
  return (
    <SignUpStepStack.Navigator screenOptions={{ headerShown: false }}>
      <SignUpStepStack.Screen
        name="PhoneNumberSet"
        component={PhoneNumberSet}
      />
      <SignUpStepStack.Screen name="BirthDateSet" component={BirthDateSet} />
      <SignUpStepStack.Screen name="NameSet" component={NameSet} />
    </SignUpStepStack.Navigator>
  );
}

export default SignUpStep;
