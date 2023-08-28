import React from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function FamilyGroupEdit() {
  return (
    <>
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
              <Text style={styles.groupName}>새로운 가족 만들기</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 20,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 50 : 16,
  },
  boxWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 26,
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
  },
  groupName: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 22,
    lineHeight: 34,
  },
});

export default FamilyGroupEdit;
