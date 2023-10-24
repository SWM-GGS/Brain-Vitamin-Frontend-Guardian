import React, { useCallback } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CustomText as Text } from '../components/CustomText';
import Kakao from '../assets/images/kakao.svg';
import { AuthStackParamList } from '../stackNav/Auth';
import Logo from '../assets/images/logo.svg';
import { commonStyles } from '../styles/common';

type LogInScreenProps = NativeStackScreenProps<AuthStackParamList, 'LogIn'>;

function LogIn({ navigation }: LogInScreenProps) {
  const toSignUp = useCallback(() => {
    navigation.navigate('SignUpScreen');
  }, [navigation]);

  return (
    <View style={[commonStyles.container, commonStyles.justifyBetween]}>
      <View style={[commonStyles.flex, commonStyles.pack]}>
        <Logo width={320} />
      </View>
      <View style={{ marginBottom: 22 }}>
        <Pressable
          style={[styles.button, styles.kakaoButton, { marginBottom: 10 }]}>
          <View style={[commonStyles.flexRow, commonStyles.itemsCenter]}>
            <Kakao />
            <Text
              color="#3A3A3A"
              style={[commonStyles.fontBold, { marginLeft: 10.5 }]}>
              카카오 로그인
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.button, styles.signUpButton]}
          onPress={toSignUp}>
          <Text color="white" style={commonStyles.fontBold}>
            전화번호로 시작하기
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16.5,
    borderRadius: 11,
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
  },
  signUpButton: { backgroundColor: '#FF9432' },
});

export default LogIn;
