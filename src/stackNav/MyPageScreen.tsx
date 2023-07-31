import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyPage from '../pages/MyPage';
import MyActivityPost from '../pages/MyActivityPost';
import VitaminScreen from './VitaminScreen';

export type MyPageScreenStackParamList = {
  MyPage: undefined;
  MyActivityPost: undefined;
  VitaminScreen: undefined;
};

const MyPageScreenStack =
  createNativeStackNavigator<MyPageScreenStackParamList>();

function MyPageScreen() {
  return (
    <MyPageScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <MyPageScreenStack.Screen name="MyPage" component={MyPage} />
      <MyPageScreenStack.Screen
        name="MyActivityPost"
        component={MyActivityPost}
      />
      <MyPageScreenStack.Screen
        name="VitaminScreen"
        component={VitaminScreen}
      />
    </MyPageScreenStack.Navigator>
  );
}

export default MyPageScreen;
