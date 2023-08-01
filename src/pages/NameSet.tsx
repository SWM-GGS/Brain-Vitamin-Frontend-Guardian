import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpScreenStackParamList } from '../stackNav/SignUpScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressStep from '../components/ProgressStep';
import Header from '../components/Header';

type Props = NativeStackScreenProps<SignUpScreenStackParamList>;

function NameSet({ navigation }: Props) {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isNicknameFocused, setIsNicknameFocused] = useState(false);

  const toFamilyGroupScreen = () => {
    navigation.navigate('FamilyGroupScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header label="회원가입" />
      <ProgressStep currentStep={3} />
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={[styles.text, styles.label]}>이름을 입력해주세요</Text>
          <View
            style={[
              styles.birthDateInputBox,
              {
                borderWidth: isNameFocused ? 1 : undefined,
                borderColor: isNameFocused ? '#FF9432' : undefined,
                backgroundColor: isNameFocused ? '#FFFFFF' : '#F4F4F4',
              },
            ]}>
            <Text
              style={[
                styles.inputLabel,
                { color: isNameFocused ? '#FF9432' : '#6D6B69' },
              ]}>
              이름
            </Text>
            <TextInput
              style={styles.input}
              placeholder="홍길동"
              placeholderTextColor={'#939393'}
              onFocus={() => setIsNameFocused(true)}
              onBlur={() => setIsNameFocused(false)}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={[styles.text, styles.label]}>별명을 입력해주세요</Text>
          <View
            style={[
              styles.birthDateInputBox,
              {
                borderWidth: isNicknameFocused ? 1 : undefined,
                borderColor: isNicknameFocused ? '#FF9432' : undefined,
                backgroundColor: isNicknameFocused ? '#FFFFFF' : '#F4F4F4',
              },
            ]}>
            <Text
              style={[
                styles.inputLabel,
                { color: isNicknameFocused ? '#FF9432' : '#6D6B69' },
              ]}>
              별명
            </Text>
            <TextInput
              style={styles.input}
              placeholder="별명을 입력해주세요"
              placeholderTextColor={'#939393'}
              onFocus={() => setIsNicknameFocused(true)}
              onBlur={() => setIsNicknameFocused(false)}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable
          style={[styles.button, styles.nextButton]}
          onPress={toFamilyGroupScreen}>
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

export default NameSet;
