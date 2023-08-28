import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../screens/LogIn';
import SignUpScreen from './SignUpScreen';

export type AuthStackParamList = {
  LogIn: undefined;
  SignUpScreen: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function Auth() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name="LogIn"
        component={LogIn}
        options={{ title: '로그인' }}
      />
      <AuthStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ title: '회원가입' }}
      />
    </AuthStack.Navigator>
  );
}

export default Auth;
