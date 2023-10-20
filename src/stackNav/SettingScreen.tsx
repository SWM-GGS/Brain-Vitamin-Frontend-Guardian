import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setting from '../screens/Setting';
import ProfileEdit from '../screens/ProfileEdit';
import FontSizeEdit from '../screens/FontSizeEdit';

export type SettingScreenStackParamList = {
  Setting: undefined;
  ProfileEdit: undefined;
  FontSizeEdit: undefined;
};

const MyPageScreenStack =
  createNativeStackNavigator<SettingScreenStackParamList>();

function SettingScreen() {
  return (
    <MyPageScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <MyPageScreenStack.Screen name="Setting" component={Setting} />
      <MyPageScreenStack.Screen name="ProfileEdit" component={ProfileEdit} />
      <MyPageScreenStack.Screen name="FontSizeEdit" component={FontSizeEdit} />
    </MyPageScreenStack.Navigator>
  );
}

export default SettingScreen;
