import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStepStackParamList } from '../stackNav/SignUpStep';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<SignUpStepStackParamList, 'FontSizeSet'>;

function FontSizeSet({ navigation }: Props) {
  const [fontSize, setFontSize] = useState('');

  const toPhoneNumberSet = () => {
    navigation.navigate('PhoneNumberSet', { fontSize });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header label="회원가입" />
      <View style={styles.body}>
        <Text style={[styles.text, styles.label]}>
          글자 크기를 설정해주세요
        </Text>
        <Pressable
          style={[
            styles.fontButton,
            {
              backgroundColor: fontSize === 'big' ? '#FFF5EC' : '#FFFFFF',
              borderWidth: fontSize === 'big' ? 1 : undefined,
              borderColor: fontSize === 'big' ? '#FF9432' : undefined,
            },
          ]}
          onPress={() => setFontSize('big')}>
          <Text style={[styles.text, styles.option, styles.big]}>크게</Text>
          <Text style={styles.big}>잘했고, 잘해왔고, 잘할 거야</Text>
        </Pressable>
        <Pressable
          style={[
            styles.fontButton,
            {
              backgroundColor: fontSize === 'normal' ? '#FFF5EC' : '#FFFFFF',
              borderWidth: fontSize === 'normal' ? 1 : undefined,
              borderColor: fontSize === 'normal' ? '#FF9432' : undefined,
            },
          ]}
          onPress={() => setFontSize('normal')}>
          <Text style={[styles.text, styles.option, styles.normal]}>보통</Text>
          <Text style={styles.normal}>잘했고, 잘해왔고, 잘할 거야</Text>
        </Pressable>
        <Pressable
          style={[
            styles.fontButton,
            {
              backgroundColor: fontSize === 'small' ? '#FFF5EC' : '#FFFFFF',
              borderWidth: fontSize === 'small' ? 1 : undefined,
              borderColor: fontSize === 'small' ? '#FF9432' : undefined,
            },
          ]}
          onPress={() => setFontSize('small')}>
          <Text style={[styles.text, styles.option]}>작게</Text>
          <Text style={styles.small}>잘했고, 잘해왔고, 잘할 거야</Text>
        </Pressable>
      </View>
      <Pressable style={styles.nextButton} onPress={toPhoneNumberSet}>
        <Text style={[styles.text, styles.nextText]}>다음</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  body: {
    marginTop: 40,
    flex: 1,
  },
  label: {
    fontSize: 20,
    marginBottom: 27,
  },
  option: {
    marginBottom: 4,
    color: '#FF9432',
  },
  text: {
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
  },
  fontButton: {
    height: 87,
    paddingVertical: 13.5,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
    justifyContent: 'space-around',
    marginBottom: 19,
  },
  big: {
    fontSize: 20,
  },
  normal: {
    fontSize: 18,
  },
  small: {
    fontSize: 16,
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16.5,
    borderRadius: 11,
    backgroundColor: '#FF9432',
  },
  nextText: {
    color: '#FFFFFF',
  },
});

export default FontSizeSet;
