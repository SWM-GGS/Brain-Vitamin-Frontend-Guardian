import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Label from './Label';
import { CustomText as Text } from './CustomText';
import Pill from '../assets/images/pill.svg';
import { commonStyles } from '../styles/common';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

type Props = {
  toFamilyGroup: () => void;
};

function WeeklyActivity({ toFamilyGroup }: Readonly<Props>) {
  const { familyName } = useSelector((state: RootState) => state.user);

  return (
    <View style={[commonStyles.container, styles.weekly]}>
      <View style={styles.header}>
        <Label
          style={{ marginBottom: 20 }}
          text={`${familyName}님의 7월 첫째주${'\n'}두뇌 비타민 주간 활동`}
        />
        <Pressable onPress={toFamilyGroup}>
          <Text>가족관리</Text>
        </Pressable>
      </View>
      <Pressable style={styles.dayWrapper}>
        <View style={styles.dayBox}>
          <Pill />
          <Text size={14}>월</Text>
        </View>
        <View style={styles.dayBox}>
          <Pill />
          <Text size={14}>화</Text>
        </View>
        <View style={styles.dayBox}>
          <Pill />
          <Text size={14}>수</Text>
        </View>
        <View style={styles.dayBox}>
          <Pill />
          <Text size={14}>목</Text>
        </View>
        <View style={styles.dayBox}>
          <Pill />
          <Text size={14}>금</Text>
        </View>
        <View style={styles.dayBox}>
          <Pill />
          <Text size={14}>토</Text>
        </View>
        <View style={styles.dayBox}>
          <Pill />
          <Text size={14}>일</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  weekly: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  dayWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayBox: {
    width: 46,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: '#FF9432',
  },
});

export default WeeklyActivity;
