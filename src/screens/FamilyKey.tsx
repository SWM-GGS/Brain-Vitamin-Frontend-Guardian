import React, { useState } from 'react';
import { Pressable, StyleSheet, View, Image } from 'react-native';
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
import { commonStyles } from '../styles/common';
import Label from '../components/Label';
import Button from '../components/Button';
import LabelInput from '../components/LabelInput';
import ShortButton from '../components/ShortButton';

type Props = NativeStackNavigationProp<FamilyGroupAddStackParamList>;

function FamilyKey() {
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
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
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header text="가족 그룹 생성" />
      <View style={[commonStyles.flex, { marginTop: 40 }]}>
        <Label
          style={{ marginBottom: 16 }}
          text="가족 고유번호를 입력해주세요"
        />
        <View
          style={[
            commonStyles.flexRow,
            commonStyles.justifyBetween,
            { marginBottom: 8 },
          ]}>
          <LabelInput
            text="고유번호"
            placeholder="고유번호를 입력해주세요"
            onChangeText={setFamilyKey}
            isShort={true}
          />
          <ShortButton
            text="확인"
            disabled={!familyKey}
            onPress={getFamilyInfo}
          />
        </View>
        {searchResult && (
          <Pressable
            style={[styles.familyInfoBox, { marginTop: 11 }]}
            onPress={toRelationship}>
            <Image
              width={52}
              height={52}
              borderRadius={8}
              source={{ uri: searchResult.profileImgUrl }}
            />
            <View>
              <Text
                size={18}
                style={(commonStyles.fontBold, { marginBottom: 4 })}>
                {searchResult.familyName}네 가족
              </Text>
              <Text color="#433D3A">
                {searchResult.firstUserName}님 외{' '}
                {'' + (searchResult.memberCount - 1)}명
              </Text>
            </View>
          </Pressable>
        )}
        {isNotFound && (
          <Text size={14} color="#FF5454">
            해당 가족이 없습니다. 다시 입력해주세요
          </Text>
        )}
      </View>
      <Button text="다음" disabled={!searchResult} onPress={toRelationship} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  },
});

export default FamilyKey;
