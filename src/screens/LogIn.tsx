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
    <View style={[commonStyles.container, commonStyles.jcSpaceBetween]}>
      <View style={styles.logoContainer}>
        <Logo width={320} />
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable style={[styles.button, styles.kakaoButton]}>
          <View style={styles.align}>
            <Kakao />
            <Text style={[styles.text, styles.kakaoText]}>카카오 로그인</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.button, styles.signUpButton]}
          onPress={toSignUp}>
          <Text style={[styles.text, styles.signUpText]}>
            전화번호로 시작하기
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginBottom: 22,
  },
  align: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16.5,
    borderRadius: 11,
  },
  text: {
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
    marginBottom: 10,
  },
  kakaoText: {
    color: '#3A3A3A',
    marginLeft: 10.5,
  },
  signUpButton: { backgroundColor: '#FF9432' },
  signUpText: {
    color: '#FFFFFF',
  },
});

export default LogIn;
