import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FamilyGroupScreenStackParamList } from '../stackNav/FamilyGroupScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Config from 'react-native-config';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import Header from '../components/Header';
import CheckCircle from '../assets/images/check-circle.svg';
import UncheckCircle from '../assets/images/uncheck-circle.svg';
import { FamilyListProps } from './FamilyGroup';

type FamilyGroupScreenProps = NativeStackScreenProps<
  FamilyGroupScreenStackParamList,
  'FamilyGroupEdit'
>;

function FamilyGroupEdit({ route }: FamilyGroupScreenProps) {
  const { familyList } = route.params;
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [deleteList, setDeleteList] = useState<number[]>([]);

  const changeDeleteMode = () => {
    setIsDeleteMode(prev => !prev);
    setDeleteList([]);
  };

  const handleFileSelect = async () => {};

  const handleEditProfile = () => {};

  const handleDeleteSelect = (id: number) => {
    if (deleteList.includes(id)) {
      setDeleteList(prev => prev.filter(v => v !== id));
    } else {
      setDeleteList(prev => [...prev, id]);
    }
  };

  const handleDelete = () => {
    deleteList.forEach(familyId => {
      const deleteGroup = async () => {
        try {
          const { data } = await axios.delete(
            `${Config.API_URL}/guardian/family-group`,
            {
              data: {
                familyId,
              },
              headers: { authorization: `Bearer ${accessToken}` },
            },
          );
          if (!data.isSuccess) {
            Alert.alert('알림', data.message);
          } else {
            Alert.alert('알림', data.result);
          }
        } catch (error) {
          console.error(error);
        }
      };
      deleteGroup();
    });
  };

  const renderFamily = (item: FamilyListProps) => {
    if (isDeleteMode) {
      return item.profileImgUrl ? (
        <Pressable onPress={() => handleDeleteSelect(item.id)}>
          <ImageBackground
            style={styles.box}
            borderRadius={13}
            source={{ uri: item.profileImgUrl }}>
            <Text style={styles.groupName}>
              {(<Text style={styles.bold}>{item.familyName}</Text>) as any}네
              {'\n'}가족
            </Text>
            {deleteList.includes(item.id) ? (
              <CheckCircle style={styles.check} />
            ) : (
              <UncheckCircle style={styles.check} />
            )}
          </ImageBackground>
        </Pressable>
      ) : (
        <Pressable
          style={styles.box}
          onPress={() => handleDeleteSelect(item.id)}>
          <Text style={styles.groupName}>
            {(<Text style={styles.bold}>{item.familyName}</Text>) as any}네
            {'\n'}가족
          </Text>
          {deleteList.includes(item.id) ? (
            <CheckCircle style={styles.check} />
          ) : (
            <UncheckCircle style={styles.check} />
          )}
        </Pressable>
      );
    }
    return item.profileImgUrl ? (
      <Pressable onPress={handleEditProfile}>
        <ImageBackground
          style={styles.box}
          borderRadius={13}
          source={{ uri: item.profileImgUrl }}>
          <Text style={styles.groupName}>
            {(<Text style={styles.bold}>{item.familyName}</Text>) as any}네
            {'\n'}가족
          </Text>
          <View style={styles.edit}>
            <Text style={styles.editText}>프로필 사진 수정</Text>
          </View>
        </ImageBackground>
      </Pressable>
    ) : (
      <Pressable style={styles.box} onPress={handleEditProfile}>
        <Text style={styles.groupName}>
          {(<Text style={styles.bold}>{item.familyName}</Text>) as any}네{'\n'}
          가족
        </Text>
        <View style={styles.edit}>
          <Text style={styles.editText}>프로필 사진 수정</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header label="가족 그룹 수정" />
      <View style={styles.body}>
        <View style={styles.header}>
          {isDeleteMode ? (
            <Text style={styles.label}>삭제할 그룹을 선택해주세요</Text>
          ) : (
            <View />
          )}
          <Pressable onPress={changeDeleteMode}>
            <Text>{isDeleteMode ? '취소' : '가족 그룹 삭제'}</Text>
          </Pressable>
        </View>
        <View style={styles.section}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.boxWrapper}>
              {familyList.length ? (
                <FlatList
                  columnWrapperStyle={styles.columnWrapper}
                  scrollEnabled={false}
                  data={familyList}
                  keyExtractor={v => `${v.id}`}
                  renderItem={({ item }) => renderFamily(item)}
                  numColumns={2}
                />
              ) : null}
            </View>
          </ScrollView>
        </View>
        <Pressable style={styles.nextButton} onPress={handleDelete}>
          <Text style={styles.nextText}>삭제하기</Text>
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
    marginTop: 20,
    flex: 1,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 25,
    marginBottom: 10,
  },
  section: {
    flex: 1,
  },
  label: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 20,
  },
  boxWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  align: {
    justifyContent: 'space-between',
  },
  edit: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.26)',
    width: 114,
    height: 31,
    alignSelf: 'center',
    marginBottom: 60,
  },
  editText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  check: {
    alignSelf: 'flex-end',
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16.5,
    borderRadius: 11,
    backgroundColor: '#FF9432',
  },
  nextText: {
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default FamilyGroupEdit;
