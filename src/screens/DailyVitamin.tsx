import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { commonStyles } from '../styles/common';
import { PopupProps, windowHeight } from './VitaminWrite';
import Button from '../components/Button';
import Label from '../components/Label';
import CloseIcon from '../assets/images/close.svg';
import LabelInput from '../components/LabelInput';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

function DailyVitamin({ closeModal }: Readonly<PopupProps>) {
  const { nickname } = useSelector((state: RootState) => state.user);
  const [answer, setAnswer] = useState('');

  const handleSave = () => {
    console.log(answer);
  };

  return (
    <Pressable
      style={[styles.container, commonStyles.justifyEnd]}
      onPress={closeModal}>
      <Pressable style={styles.popup} onPress={e => e.stopPropagation()}>
        <View style={{ gap: 32, marginBottom: 18 }}>
          <View style={[commonStyles.flexRow, commonStyles.justifyBetween]}>
            <Label text="오늘의 비타민 ✨" />
            <Pressable onPress={closeModal}>
              <CloseIcon />
            </Pressable>
          </View>
          <View style={{ gap: 16 }}>
            <Text style={commonStyles.fontMedium}>
              {nickname}님이 좋아하는 계절은 무엇인가요?
            </Text>
            <LabelInput
              placeholder="질문에 대한 답변을 작성해주세요"
              onChangeText={setAnswer}
            />
          </View>
          <Button text="완료" onPress={handleSave} />
        </View>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: windowHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
  },
  popup: {
    width: '100%',
    height: 380,
    backgroundColor: 'white',
    borderRadius: 11,
    paddingHorizontal: 16,
    paddingVertical: 31,
  },
});

export default DailyVitamin;
