import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ImageBackground,
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
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import LinearGradient from 'react-native-linear-gradient';
import LogoText from '../assets/images/logo-text.svg';
import { useAppDispatch } from '../store';
import userSlice from '../slices/user';

export type FamilyListProps = {
  id: number;
  profileImgUrl: string;
  familyName: string;
};
type FamilyGroupScreenProps = NativeStackNavigationProp<
  FamilyGroupScreenStackParamList,
  'FamilyGroup'
>;
type RootProps = NativeStackNavigationProp<RootStackParamList>;
type Props = CompositeNavigationProp<FamilyGroupScreenProps, RootProps>;

function FamilyGroup() {
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const [familyList, setFamilyList] = useState<FamilyListProps[]>([]);
  const navigation = useNavigation<Props>();
  const dispatch = useAppDispatch();

  const toHome = () => {
    navigation.navigate('Main');
  };

  const toFamilyGroupAdd = () => {
    navigation.navigate('FamilyGroupAdd');
  };

  const toFamilyGroupEdit = () => {
    navigation.navigate('FamilyGroupEdit', { familyList });
  };

  const handleGroupSelect = (familyId: number, familyName: string) => {
    dispatch(userSlice.actions.setFamilyInfo({ familyId, familyName }));
    toHome();
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
        console.error(error);
      }
    };
    getFamilyList();
  }, [accessToken]);

  const renderAddFamily = () => {
    return (
      <Pressable onPress={toFamilyGroupAdd}>
        <LinearGradient
          colors={['#FFCD9F', '#FF9839']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.box}>
          <Text style={[styles.groupName, { color: 'white' }]}>
            새로운 가족{'\n'}만들기
          </Text>
          <Plus style={styles.plus} />
        </LinearGradient>
      </Pressable>
    );
  };

  const renderFamily = (item: FamilyListProps) => {
    return item.profileImgUrl ? (
      <Pressable onPress={() => handleGroupSelect(item.id, item.familyName)}>
        <ImageBackground
          style={styles.box}
          borderRadius={13}
          source={{ uri: item.profileImgUrl }}>
          <Text style={styles.groupName}>
            {(<Text style={styles.bold}>{item.familyName}</Text>) as any}네
            {'\n'}가족
          </Text>
        </ImageBackground>
      </Pressable>
    ) : (
      <Pressable
        style={styles.box}
        onPress={() => handleGroupSelect(item.id, item.familyName)}>
        <Text style={styles.groupName}>
          {(<Text style={styles.bold}>{item.familyName}</Text>) as any}네{'\n'}
          가족
        </Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <LogoText width={100} />
        <Pressable onPress={toFamilyGroupEdit}>
          <Text>가족관리</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.label}>가족을 선택하세요</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.boxWrapper}>
            {familyList.length > 1 ? (
              <FlatList
                columnWrapperStyle={styles.columnWrapper}
                scrollEnabled={false}
                data={[
                  ...familyList,
                  { id: familyList.length, profileImgUrl: '', familyName: '' },
                ]}
                keyExtractor={v => `${v.id}`}
                renderItem={({ item, index }) => (
                  <>
                    {index === familyList.length
                      ? renderAddFamily()
                      : renderFamily(item)}
                  </>
                )}
                numColumns={2}
              />
            ) : (
              <>
                {renderAddFamily()}
                <Pressable style={styles.box} onPress={toHome}>
                  <Text style={styles.groupName}>일단 둘러보기</Text>
                </Pressable>
              </>
            )}
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
    marginBottom: 50,
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
    borderRadius: 13,
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
    fontFamily: 'Pretendard-Medium',
    fontSize: 22,
    lineHeight: 34,
    color: '#433D3A',
  },
  plus: {
    alignSelf: 'flex-end',
    padding: 2,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  bold: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 22,
    lineHeight: 34,
    color: '#433D3A',
  },
});

export default FamilyGroup;
