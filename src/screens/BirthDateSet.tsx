import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStepStackParamList } from '../stackNav/SignUpStep';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressStep from '../components/ProgressStep';
import Header from '../components/Header';
import { commonStyles } from '../styles/common';
import Button from '../components/Button';
import Label from '../components/Label';
import LabelInput from '../components/LabelInput';

type Props = NativeStackScreenProps<SignUpStepStackParamList, 'BirthDateSet'>;

function BirthDateSet({ navigation, route }: Props) {
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');

  const toNameSet = () => {
    navigation.navigate('NameSet', {
      phoneNumber: route.params.phoneNumber,
      birthDate,
      gender,
    });
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header text="회원가입" />
      <ProgressStep currentStep={2} />
      <View style={[commonStyles.flex, { marginTop: 40 }]}>
        <View style={{ marginBottom: 32 }}>
          <Label style={{ marginBottom: 16 }} text="생년월일을 입력해주세요" />
          <LabelInput
            text="생년월일"
            placeholder="8자리를 입력해주세요"
            onChangeText={setBirthDate}
          />
        </View>
        <View>
          <Label style={{ marginBottom: 16 }} text="성별을 선택해주세요" />
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
      <Button text="다음" onPress={toNameSet} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
