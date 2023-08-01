import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStepStackParamList } from '../stackNav/SignUpStep';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressStep from '../components/ProgressStep';
import Header from '../components/Header';

type Props = NativeStackScreenProps<SignUpStepStackParamList, 'BirthDateSet'>;

function BirthDateSet({ navigation, route }: Props) {
  const [isBirthDateFocused, setIsBirthDateFocused] = useState(false);
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');

  const toNameSet = () => {
    navigation.navigate('NameSet', {
      fontSize: route.params.fontSize,
      phoneNumber: route.params.phoneNumber,
      birthDate,
      gender,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header label="회원가입" />
      <ProgressStep currentStep={2} />
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={[styles.text, styles.label]}>
            생년월일을 입력해주세요
          </Text>
          <View
            style={[
              styles.birthDateInputBox,
              {
                borderWidth: isBirthDateFocused ? 1 : undefined,
                borderColor: isBirthDateFocused ? '#FF9432' : undefined,
                backgroundColor: isBirthDateFocused ? '#FFFFFF' : '#F4F4F4',
              },
            ]}>
            <Text
              style={[
                styles.inputLabel,
                { color: isBirthDateFocused ? '#FF9432' : '#6D6B69' },
              ]}>
              생년월일
            </Text>
            <TextInput
              style={styles.input}
              placeholder="8자리를 입력해주세요"
              placeholderTextColor={'#939393'}
              onFocus={() => setIsBirthDateFocused(true)}
              onBlur={() => setIsBirthDateFocused(false)}
              onChangeText={setBirthDate}
            />
          </View>
        </View>
        <View>
          <Text style={[styles.text, styles.label]}>성별을 선택해주세요</Text>
          <View style={styles.align}>
            <Pressable
              style={[
                styles.genderButton,
                {
                  borderColor: gender === 'MALE' ? '#FF9432' : '#E8E8E8',
                  backgroundColor: gender === 'MALE' ? '#FFF5EC' : undefined,
                },
              ]}
              onPress={() => setGender('MALE')}>
              <Text
                style={{ color: gender === 'MALE' ? '#FF9432' : undefined }}>
                남자
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.genderButton,
                {
                  borderColor: gender === 'FEMALE' ? '#FF9432' : '#E8E8E8',
                  backgroundColor: gender === 'FEMALE' ? '#FFF5EC' : undefined,
                },
              ]}
              onPress={() => setGender('FEMALE')}>
              <Text
                style={{ color: gender === 'FEMALE' ? '#FF9432' : undefined }}>
                여자
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable
          style={[styles.button, styles.nextButton]}
          onPress={toNameSet}>
          <Text style={[styles.text, styles.nextText]}>다음</Text>
        </Pressable>
      </View>
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
  text: {
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
  },
  buttonWrapper: {
    marginBottom: 22,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16.5,
    borderRadius: 11,
  },
  nextButton: { backgroundColor: '#FF9432' },
  nextText: {
    color: '#FFFFFF',
  },
  input: { fontSize: 16 },
  birthDateInputBox: {
    height: 57,
    borderRadius: 8,
    backgroundColor: '#F4F4F4',
    padding: 10,
  },
  inputBox: {
    width: 240,
    height: 57,
    borderRadius: 8,
    backgroundColor: '#F4F4F4',
    padding: 10,
  },
  inputLabel: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 12,
    marginBottom: 6,
  },
  section: {
    marginBottom: 32,
  },
  align: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderButton: {
    width: 165,
    height: 57,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});

export default BirthDateSet;
