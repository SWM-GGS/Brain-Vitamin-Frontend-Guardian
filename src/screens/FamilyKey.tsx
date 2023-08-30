import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomText as Text } from '../components/CustomText';
import Header from '../components/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { FamilyGroupAddStackParamList } from '../stackNav/FamilyGroupAdd';
import axios from 'axios';
import Config from 'react-native-config';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

type Props = NativeStackNavigationProp<FamilyGroupAddStackParamList>;

function FamilyKey() {
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const [isKeyFocused, setIsKeyFocused] = useState(false);
  const [familyKey, setFamilyKey] = useState('');
  type SearchResultProps = {
    id: number;
    familyName: string;
    profileImgUrl: string;
    memberCount: number;
    firstUserName: string;
  };
  const [searchResult, setSearchResult] = useState<SearchResultProps | null>(
    null,
  );
  const [isNotFound, setIsNotFound] = useState(false);
  const navigation = useNavigation<Props>();

  const toRelationship = () => {
    if (searchResult) {
      navigation.navigate('Relationship', {
        familyId: searchResult.id,
        familyName: searchResult.familyName,
      });
    }
  };

  const getFamilyInfo = async () => {
    try {
      const { data } = await axios.get(
        `${Config.API_URL}/guardian/family-group/${familyKey}`,
        { headers: { authorization: `Bearer ${accessToken}` } },
      );
      if (!data.isSuccess) {
        setIsNotFound(true);
        setSearchResult(null);
      } else {
        setIsNotFound(false);
        setSearchResult(data.result);
      }
    } catch (error) {
      console.error(error);
    }
    // setIsNotFound(false);
    // setSearchResult({
    //   id: 3,
    //   familyName: '환자',
    //   profileImgUrl:
    //     'https://developers.naver.com/inc/devcenter/images/cont/img_cafeapp.png',
    //   memberCount: 4,
    //   firstUserName: '보호자',
    // });
    // setIsNotFound(true);
    // setSearchResult(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header label="가족 그룹 생성" />
      <View style={styles.body}>
        <Text style={[styles.text, styles.label]}>
          가족 고유번호를 입력해주세요
        </Text>
        <View style={styles.inputWrapper}>
          <View
            style={[
              styles.inputBox,
              {
                borderWidth: isKeyFocused ? 1 : undefined,
                borderColor: isKeyFocused ? '#FF9432' : undefined,
                backgroundColor: isKeyFocused ? '#FFFFFF' : '#F4F4F4',
              },
            ]}>
            <Text
              style={[
                styles.inputLabel,
                { color: isKeyFocused ? '#FF9432' : '#6D6B69' },
              ]}>
              고유번호
            </Text>
            <TextInput
              style={styles.input}
              placeholder="고유번호를 입력해주세요"
              placeholderTextColor={'#939393'}
              onFocus={() => setIsKeyFocused(true)}
              onBlur={() => setIsKeyFocused(false)}
              onChangeText={text => setFamilyKey(text)}
            />
          </View>
          <Pressable
            style={[
              styles.certificateButton,
              { backgroundColor: familyKey ? '#FF9432' : '#F0F0F0' },
            ]}
            disabled={!familyKey}
            onPress={getFamilyInfo}>
            <Text
              style={[
                styles.certificateText,
                {
                  color: familyKey ? '#FFFFFF' : '#939393',
                },
              ]}>
              확인
            </Text>
          </Pressable>
        </View>
        {searchResult && (
          <Pressable style={styles.familyInfoBox} onPress={toRelationship}>
            <Image
              width={52}
              height={52}
              borderRadius={8}
              source={{ uri: searchResult.profileImgUrl }}
            />
            <View>
              <Text style={styles.familyName}>
                {searchResult.familyName}네 가족
              </Text>
              <Text style={styles.familyNameSub}>
                {searchResult.firstUserName}님 외{' '}
                {'' + (searchResult.memberCount - 1)}명
              </Text>
            </View>
          </Pressable>
        )}
        {isNotFound && (
          <Text style={styles.empty}>
            해당 가족이 없습니다. 다시 입력해주세요
          </Text>
        )}
      </View>
      <Pressable
        style={[
          styles.nextButton,
          { backgroundColor: searchResult ? '#FF9432' : '#F0F0F0' },
        ]}
        onPress={toRelationship}
        disabled={!searchResult}>
        <Text
          style={[
            styles.text,
            { color: searchResult ? '#FFFFFF' : '#939393' },
          ]}>
          다음
        </Text>
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
  certificateButton: {
    width: 95,
    height: 57,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  certificateText: {
    fontSize: 14,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
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
  },
  familyInfoBox: {
    height: 83,
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
    flexDirection: 'row',
    gap: 11,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 19,
    marginTop: 11,
  },
  familyName: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 18,
    marginBottom: 4,
  },
  familyNameSub: {
    color: '#433D3A',
  },
  empty: {
    fontSize: 14,
    color: '#FF5454',
  },
});

export default FamilyKey;
