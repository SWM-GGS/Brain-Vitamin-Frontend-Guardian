import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FamilyGroupScreenStackParamList } from '../stackNav/FamilyGroupScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Plus from '../assets/images/plus.svg';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { RootStackParamList } from '../../AppInner';
import Config from 'react-native-config';
import axios, { AxiosError } from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

type FamilyGroupScreenProps = NativeStackNavigationProp<
  FamilyGroupScreenStackParamList,
  'FamilyGroup'
>;
type RootProps = NativeStackNavigationProp<RootStackParamList>;
type Props = CompositeNavigationProp<FamilyGroupScreenProps, RootProps>;

function FamilyGroup() {
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  type FamilyListProps = {
    id: number;
    profileImgUrl: string;
    familyName: string;
  };
  const [familyList, setFamilyList] = useState<FamilyListProps[]>([]);
  const navigation = useNavigation<Props>();

  const toFamilyGroupEdit = () => {
    navigation.navigate('FamilyGroupEdit');
  };

  const toHome = () => {
    navigation.navigate('Main');
  };

  const toFamilyGroupAdd = () => {
    navigation.navigate('FamilyGroupAdd');
  };

  useEffect(() => {
    const getFamilyList = async () => {
      try {
        const { data } = await axios.get(
          `${Config.API_URL}/guardian/family-group`,
          {
            headers: { authorization: `Bearer ${accessToken}` },
          },
        );
        setFamilyList(data.result);
      } catch (error) {
        console.error(error as AxiosError);
      }
    };
    getFamilyList();
  }, [accessToken]);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text>로고</Text>
        <Pressable onPress={toFamilyGroupEdit}>
          <Text>가족관리</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.label}>가족을 선택하세요</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.boxWrapper}>
            {familyList.length ? (
              <FlatList
                data={familyList}
                keyExtractor={v => `${v.id}`}
                renderItem={({ item }) => (
                  <Pressable style={styles.box} onPress={toFamilyGroupAdd}>
                    <Text style={styles.groupName}>
                      {item.familyName}네 가족
                    </Text>
                  </Pressable>
                )}
              />
            ) : (
              <Pressable style={styles.box} onPress={toHome}>
                <Text style={styles.groupName}>일단 둘러보기</Text>
              </Pressable>
            )}
            <Pressable style={styles.box} onPress={toFamilyGroupAdd}>
              <Text style={styles.groupName}>새로운 가족{'\n'}만들기</Text>
              <Plus style={styles.plus} />
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  label: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 20,
    paddingHorizontal: 16,
  },
  boxWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 26,
    paddingBottom: 200,
  },
  box: {
    width: 160,
    height: 210,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
    marginBottom: 16,
    paddingVertical: 19,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  groupName: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 22,
    lineHeight: 34,
  },
  plus: {
    alignSelf: 'flex-end',
    padding: 2,
  },
});

export default FamilyGroup;
