import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FamilyGroupScreenStackParamList } from '../stackNav/FamilyGroupScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Plus from '../assets/plus.svg';

type FamilyGroupScreenProps = NativeStackScreenProps<
  FamilyGroupScreenStackParamList,
  'FamilyGroup'
>;

function FamilyGroup({ navigation }: FamilyGroupScreenProps) {
  const toFamilyGroupEdit = () => {
    navigation.navigate('FamilyGroupEdit');
  };

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
            <Pressable style={styles.box}>
              <Text style={styles.groupName}>닉네임네 가족</Text>
            </Pressable>
            <Pressable style={styles.box}>
              <Text style={styles.groupName}>닉네임네 가족</Text>
            </Pressable>
            <Pressable style={styles.box}>
              <Text style={styles.groupName}>닉네임네 가족</Text>
            </Pressable>
            <Pressable style={styles.box}>
              <Text style={styles.groupName}>닉네임네 가족</Text>
            </Pressable>
            <Pressable style={styles.box}>
              <Text style={styles.groupName}>닉네임네 가족</Text>
            </Pressable>
            <Pressable style={styles.box}>
              <Text style={styles.groupName}>닉네임네 가족</Text>
            </Pressable>
            <Pressable style={styles.box}>
              <Text style={styles.groupName}>새로운 가족 만들기</Text>
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
