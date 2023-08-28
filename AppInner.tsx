import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from './src/store/reducer';
import { useEffect, useState } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import axios, { AxiosError } from 'axios';
import { Alert } from 'react-native';
import userSlice from './src/slices/user';
import { useAppDispatch } from './src/store';
import Config from 'react-native-config';
import Splash from './src/pages/Splash';
import Auth from './src/stackNav/Auth';
import Main from './src/tapNav/Main';
import { checkIsFirstRun } from './src/utils/firstRun';
import FontSizeSet from './src/pages/FontSizeSet';

export type RootStackParamList = {
  Splash: undefined;
  FontSizeSet: undefined;
  Auth: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppInner() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector(
    (state: RootState) => !!state.user.phoneNumber,
  );
  const [isFirstRun, setIsFirstRun] = useState(false);

  useEffect(() => {
    const getFirstRunStatus = async () => {
      const firstRunStatus = await checkIsFirstRun();
      setIsFirstRun(firstRunStatus);
    };
    getFirstRunStatus();
  }, []);

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

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      {isLoggedIn ? (
        <Stack.Screen name="Main" component={Main} />
      ) : (
        <Stack.Group>
          {isFirstRun && (
            <Stack.Screen name="FontSizeSet" component={FontSizeSet} />
          )}
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

export default AppInner;
