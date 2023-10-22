import React, { useState } from 'react';
import { View } from 'react-native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { FamilyGroupAddStackParamList } from '../stackNav/FamilyGroupAdd';
import { RootStackParamList } from '../../AppInner';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Config from 'react-native-config';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { useAppDispatch } from '../store';
import userSlice from '../slices/user';
import { commonStyles } from '../styles/common';
import Label from '../components/Label';
import LabelInput from '../components/LabelInput';
import Button from '../components/Button';

type FamilyGroupAddProps = NativeStackScreenProps<
  FamilyGroupAddStackParamList,
  'Relationship'
>;
type RootProps = NativeStackNavigationProp<RootStackParamList>;

function Relationship({ route }: FamilyGroupAddProps) {
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const [relationship, setRelationship] = useState('');
  const rootNavigation = useNavigation<RootProps>();
  const { familyId, familyName } = route.params;
  const dispatch = useAppDispatch();

  const toMain = () => {
    rootNavigation.navigate('Main');
  };

  const makeFamily = async () => {
    try {
      await axios.post(
        `${Config.API_URL}/guardian/family-group`,
        { familyId, relationship },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        },
      );
      dispatch(userSlice.actions.setFamilyInfo({ familyId, familyName }));
      toMain();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header label="가족 그룹 생성" />
      <View style={[commonStyles.flex, { marginTop: 40 }]}>
        <Label
          style={{ marginBottom: 16 }}
          text={`${familyName}님과의 관계가 어떻게 되시나요?`}
        />
        <LabelInput
          text="관계"
          placeholder="딸"
          onChangeText={setRelationship}
        />
      </View>
      <Button text="다음" onPress={makeFamily} />
    </SafeAreaView>
  );
}

export default Relationship;
