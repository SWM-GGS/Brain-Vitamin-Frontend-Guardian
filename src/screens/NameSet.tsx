import React, { useState } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpScreenStackParamList } from '../stackNav/SignUpScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressStep from '../components/ProgressStep';
import Header from '../components/Header';
import { commonStyles } from '../styles/common';
import Label from '../components/Label';
import LabelInput from '../components/LabelInput';
import Button from '../components/Button';

type Props = NativeStackScreenProps<SignUpScreenStackParamList>;

function NameSet({ navigation }: Props) {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const toFamilyGroupScreen = () => {
    navigation.navigate('FamilyGroupScreen');
    console.log(name, nickname);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header label="회원가입" />
      <ProgressStep currentStep={3} />
      <View style={[commonStyles.flex, { marginTop: 40 }]}>
        <View style={{ marginBottom: 32 }}>
          <Label style={{ marginBottom: 16 }} text="이름을 입력해주세요" />
          <LabelInput text="이름" placeholder="홍길동" onChangeText={setName} />
        </View>
        <View>
          <Label style={{ marginBottom: 16 }} text="별명을 입력해주세요" />
          <LabelInput
            text="별명"
            placeholder="별명을 입력해주세요"
            onChangeText={setNickname}
          />
        </View>
      </View>
      <Button text="다음" onPress={toFamilyGroupScreen} />
    </SafeAreaView>
  );
}

export default NameSet;
