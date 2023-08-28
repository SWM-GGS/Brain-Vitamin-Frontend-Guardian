import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { FamilyGroupAddStackParamList } from '../stackNav/FamilyGroupAdd';
import { RootStackParamList } from '../../AppInner';
import { useNavigation } from '@react-navigation/native';
import axios, { AxiosError } from 'axios';
import Config from 'react-native-config';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

type FamilyGroupAddProps = NativeStackScreenProps<
  FamilyGroupAddStackParamList,
  'Relationship'
>;
type RootProps = NativeStackNavigationProp<RootStackParamList>;

function Relationship({ route }: FamilyGroupAddProps) {
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const [isCodeFocused, setIsCodeFocused] = useState(false);
  const [relationship, setRelationship] = useState('');
  const rootNavigation = useNavigation<RootProps>();

  const toMain = () => {
    rootNavigation.navigate('Main');
  };

  const makeFamily = async () => {
    try {
      await axios.post(
        `${Config.API_URL}/guardian/family-group`,
        { familyId: route.params.familyId, relationship },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        },
      );
      toMain();
    } catch (error) {
      console.error(error as AxiosError);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header label="가족 그룹 생성" />
      <View style={styles.body}>
        <Text style={[styles.text, styles.label]}>
          {route.params.familyName}님과의 관계가 어떻게 되시나요?
        </Text>
        <View
          style={[
            styles.inputBox,
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
            관계
          </Text>
          <TextInput
            style={styles.input}
            placeholder="딸"
            placeholderTextColor={'#939393'}
            onFocus={() => setIsCodeFocused(true)}
            onBlur={() => setIsCodeFocused(false)}
            onChangeText={text => setRelationship(text)}
          />
        </View>
      </View>
      <Pressable style={styles.nextButton} onPress={makeFamily}>
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
  text: {
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
  },
  input: { fontSize: 16 },
  inputBox: {
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

export default Relationship;
