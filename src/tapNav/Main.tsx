import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FamilyScreen from '../stackNav/FamilyScreen';
import NeighborScreen from '../stackNav/NeighborScreen';
import HomeScreen from '../stackNav/HomeScreem';
import PatientScreen from '../stackNav/PatientScreen';
import MyPageScreen from '../stackNav/MyPageScreen';
import FamilyIcon from '../assets/images/family.svg';
import HomeFocusedIcon from '../assets/images/homeFocused.svg';
import HomeIcon from '../assets/images/home.svg';
import PatientFocusedIcon from '../assets/images/patientFocused.svg';
import PatientIcon from '../assets/images/patient.svg';
import MyPageFocusedIcon from '../assets/images/myPageFocused.svg';
import MyPageIcon from '../assets/images/myPage.svg';

export type MainParamList = {
  FamilyScreen: undefined;
  NeighborScreen: undefined;
  HomeScreen: undefined;
  PatientScreen: undefined;
  MyPageScreen: undefined;
};

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="FamilyScreen"
        component={FamilyScreen}
        options={{
          tabBarLabel: '가족',
          tabBarIcon: ({ focused }) =>
            focused ? <FamilyIcon /> : <FamilyIcon />,
        }}
      />
      <Tab.Screen
        name="NeighborScreen"
        component={NeighborScreen}
        options={{ tabBarLabel: '이웃' }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ focused }) =>
            focused ? <HomeFocusedIcon /> : <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="PatientScreen"
        component={PatientScreen}
        options={{
          tabBarLabel: '환자',
          tabBarIcon: ({ focused }) =>
            focused ? <PatientFocusedIcon /> : <PatientIcon />,
        }}
      />
      <Tab.Screen
        name="MyPageScreen"
        component={MyPageScreen}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: ({ focused }) =>
            focused ? <MyPageFocusedIcon /> : <MyPageIcon />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;
