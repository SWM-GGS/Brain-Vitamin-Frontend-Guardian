import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import FamilyGroupScreen from './FamilyGroupScreen';

export type HomeScreenStackParamList = {
  Home: undefined;
  FamilyGroupScreen: undefined;
};

const HomeScreenStack = createNativeStackNavigator<HomeScreenStackParamList>();

function HomeScreen() {
  return (
    <HomeScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeScreenStack.Screen name="Home" component={Home} />
      <HomeScreenStack.Screen
        name="FamilyGroupScreen"
        component={FamilyGroupScreen}
      />
    </HomeScreenStack.Navigator>
  );
}

export default HomeScreen;
