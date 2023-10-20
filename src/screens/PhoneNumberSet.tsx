import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStepStackParamList } from '../stackNav/SignUpStep';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressStep from '../components/ProgressStep';
import Header from '../components/Header';
import { commonStyles } from '../styles/common';
import Button from '../components/Button';
import Label from '../components/Label';
import LabelInput from '../components/LabelInput';
import ShortButton from '../components/ShortButton';

type Props = NativeStackScreenProps<SignUpStepStackParamList, 'PhoneNumberSet'>;

function PhoneNumberSet({ navigation }: Props) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');

  const toBirthDateSet = () => {
    navigation.navigate('BirthDateSet', {
      phoneNumber,
    });
  };

  const handleCertificate = () => {
    console.log(code);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header label="회원가입" />
      <ProgressStep currentStep={1} />
      <View style={[commonStyles.flex, { marginTop: 40 }]}>
        <Label style={{ marginBottom: 16 }} text="전화번호를 입력해주세요" />
        <View style={[styles.inputContainer, { marginBottom: 8 }]}>
          <LabelInput
            text="전화번호"
            placeholder="010 1234 5678"
            onChangeText={setPhoneNumber}
            isShort={true}
          />
          <ShortButton text="인증하기" onPress={handleCertificate} />
        </View>
        <LabelInput
          text="인증번호"
          placeholder="인증번호를 입력해주세요"
          onChangeText={setCode}
        />
      </View>
      <Button text="다음" onPress={toBirthDateSet} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
});

export default PhoneNumberSet;
