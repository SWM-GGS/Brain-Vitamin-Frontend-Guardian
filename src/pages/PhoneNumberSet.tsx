import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStepStackParamList } from '../stackNav/SignUpStep';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressStep from '../components/ProgressStep';
import Header from '../components/Header';

type Props = NativeStackScreenProps<SignUpStepStackParamList, 'PhoneNumberSet'>;

function PhoneNumberSet({ navigation }: Props) {
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [isCodeFocused, setIsCodeFocused] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const toBirthDateSet = () => {
    navigation.navigate('BirthDateSet', {
      phoneNumber,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header label="회원가입" />
      <ProgressStep currentStep={1} />
      <View style={styles.body}>
        <Text style={[styles.text, styles.label]}>전화번호를 입력해주세요</Text>
        <View style={styles.inputWrapper}>
          <View
            style={[
              styles.inputBox,
              {
                borderWidth: isPhoneFocused ? 1 : undefined,
                borderColor: isPhoneFocused ? '#FF9432' : undefined,
                backgroundColor: isPhoneFocused ? '#FFFFFF' : '#F4F4F4',
              },
            ]}>
            <Text
              style={[
                styles.inputLabel,
                { color: isPhoneFocused ? '#FF9432' : '#6D6B69' },
              ]}>
              전화번호
            </Text>
            <TextInput
              style={styles.input}
              placeholder="010 1234 5678"
              placeholderTextColor={'#939393'}
              onFocus={() => setIsPhoneFocused(true)}
              onBlur={() => setIsPhoneFocused(false)}
              onChangeText={text => setPhoneNumber(text)}
            />
          </View>
          <Pressable style={styles.certificateButton}>
            <Text style={styles.certificateText}>인증하기</Text>
          </Pressable>
        </View>
        <View
          style={[
            styles.codeInputBox,
            {
              borderWidth: isCodeFocused ? 1 : undefined,
              borderColor: isCodeFocused ? '#FF9432' : undefined,
              backgroundColor: isCodeFocused ? '#FFFFFF' : '#F4F4F4',
            },
          ]}>
          <Text
            style={[
              styles.inputLabel,
              { color: isCodeFocused ? '#FF9432' : '#6D6B69' },
            ]}>
            인증번호
          </Text>
          <TextInput
            style={styles.input}
            placeholder="인증번호를 입력해주세요"
            placeholderTextColor={'#939393'}
            onFocus={() => setIsCodeFocused(true)}
            onBlur={() => setIsCodeFocused(false)}
          />
        </View>
      </View>
      <Pressable style={styles.nextButton} onPress={toBirthDateSet}>
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
  input: { fontSize: 16 },
  certificateButton: {
    width: 95,
    height: 57,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  certificateText: {
    color: '#939393',
    fontSize: 14,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  codeInputBox: {
    height: 57,
    borderRadius: 8,
    padding: 10,
  },
  inputBox: {
    width: 240,
    height: 57,
    borderRadius: 8,
    padding: 10,
  },
  inputLabel: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 12,
    marginBottom: 6,
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

export default PhoneNumberSet;
