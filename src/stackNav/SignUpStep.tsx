import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneNumberSet from '../pages/PhoneNumberSet';
import BirthDateSet from '../pages/BirthDateSet';
import NameSet from '../pages/NameSet';

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
