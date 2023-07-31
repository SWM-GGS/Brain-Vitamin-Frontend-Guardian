import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontSizeSet from '../pages/FontSizeSet';
import PhoneNumberSet from '../pages/PhoneNumberSet';
import BirthDateSet from '../pages/BirthDateSet';
import NameSet from '../pages/NameSet';

export type SignUpStepStackParamList = {
  FontSizeSet: undefined;
  PhoneNumberSet: undefined;
  BirthDateSet: undefined;
  NameSet: undefined;
};

const SignUpStepStack = createNativeStackNavigator<SignUpStepStackParamList>();

function SignUpStep() {
  return (
    <SignUpStepStack.Navigator screenOptions={{ headerShown: false }}>
      <SignUpStepStack.Screen name="FontSizeSet" component={FontSizeSet} />
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
