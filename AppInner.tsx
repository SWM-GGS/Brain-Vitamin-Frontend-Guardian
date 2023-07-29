import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from './src/store/reducer';
import { useEffect } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import axios, { AxiosError } from 'axios';
import { Alert } from 'react-native';
import userSlice from './src/slices/user';
import { useAppDispatch } from './src/store';
import Config from 'react-native-config';
import LogIn from './src/pages/LogIn';
import SignUp from './src/pages/SignUp';
import Family from './src/pages/Family';
import Neighbor from './src/pages/Neighbor';
import Home from './src/pages/Home';
import Patient from './src/pages/Patient';
import MyPage from './src/pages/MyPage';

export type LoggedInParamList = {
  Family: { familyKey: string };
  Neighbor: undefined;
  Home: undefined;
  Patient: { familyKey: string };
  MyPage: undefined;
};

export type RootStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function AppInner() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector(
    (state: RootState) => !!state.user.phoneNumber,
  );
  console.log('isLoggedIn', isLoggedIn);

  // 앱 실행 시 refreshToken 있으면 자동 로그인
  useEffect(() => {
    const getTokenAndRefresh = async () => {
      try {
        const token = await EncryptedStorage.getItem('refreshToken');
        if (!token) {
          return;
        }
        const response = await axios.post(
          `${Config.API_URL}/refreshToken`,
          {},
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        );
        // redux state 업데이트하면 컴포넌트는 자동으로 리렌더링됨
        dispatch(
          userSlice.actions.setUser({
            name: response.data.data.name,
            nickname: response.data.data.nickname,
            phoneNumber: response.data.data.phoneNumber,
            familyKey: response.data.data.familyKey,
            accessToken: response.data.data.accessToken,
            fontSize: response.data.data.fontSize,
          }),
        );
      } catch (error) {
        console.error(error);
        if ((error as AxiosError).response?.data.code === 'expired') {
          Alert.alert('알림', '다시 로그인 해주세요.');
        }
      } finally {
        // TODO: 스플래시 스크린 없애기
      }
    };
    getTokenAndRefresh();
  }, [dispatch]);

  // axios interceptor 설정
  useEffect(() => {
    axios.interceptors.response.use(
      response => {
        return response;
      },
      async error => {
        const {
          config,
          response: { status },
        } = error;
        if (status === 419) {
          if (error.response.data.code === 'expired') {
            const originalRequest = config;
            const refreshToken = await EncryptedStorage.getItem('refreshToken');
            // refreshToken이 유효하다면, accessToken 갱신 요청 후 실패했던 api 재요청
            const { data } = await axios.post(
              `${Config.API_URL}/refreshToken`,
              {},
              { headers: { authorization: `Bearer ${refreshToken}` } },
            );
            dispatch(userSlice.actions.setAccessToken(data.data.accessToken));
            originalRequest.headers.authorization = `Bearer ${data.data.accessToken}`;
            return axios(originalRequest);
          }
        }
        return Promise.reject(error);
      },
    );
  }, [dispatch]);

  return isLoggedIn ? (
    <Tab.Navigator>
      <Tab.Screen
        name="Family"
        component={Family}
        options={{ title: '가족' }}
      />
      <Tab.Screen
        name="Neighbor"
        component={Neighbor}
        options={{ title: '이웃' }}
      />
      <Tab.Screen name="Home" component={Home} options={{ title: '홈' }} />
      <Tab.Screen
        name="Patient"
        component={Patient}
        options={{ title: '환자' }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{ title: '마이페이지' }}
      />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{ title: '로그인' }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: '회원가입' }}
      />
    </Stack.Navigator>
  );
}

export default AppInner;
