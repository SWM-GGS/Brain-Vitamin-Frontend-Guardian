import React, { useState } from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { commonStyles } from '../styles/common';
import Label from '../components/Label';
import CloseIcon from '../assets/images/close.svg';
import { RootState } from '../store/reducer';
import { useSelector } from 'react-redux';
import LabelInput from '../components/LabelInput';
import Button from '../components/Button';

const windowHeight = Dimensions.get('window').height;

type Props = {
  closeModal: () => void;
};
function VitaminWrite({ closeModal }: Readonly<Props>) {
  const { familyName } = useSelector((state: RootState) => state.user);
  const [place, setPlace] = useState('');
  const [headCount, setHeadCount] = useState('');

  const handleVitaminSave = () => {
    console.log(place, headCount);
  };

  return (
    <Pressable
      style={[styles.container, commonStyles.pack]}
      onPress={closeModal}>
      <Pressable style={styles.popup} onPress={e => e.stopPropagation()}>
        <View
          style={[
            commonStyles.flexRow,
            commonStyles.justifyBetween,
            { marginBottom: 16 },
          ]}>
          <Label text="우리 가족 비타민 만들기" />
          <Pressable onPress={closeModal}>
            <CloseIcon />
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={commonStyles.flex}>
          {/* TODO: scroll 안 되는 문제 해결. dropbox 구현하기 */}
          <View
            style={[commonStyles.itemsCenter, { gap: 19, marginBottom: 34 }]}>
            <View style={styles.image} />
            <Text color="#433D3A" style={commonStyles.textCenter}>
              {`아래 들어가는 사진 정보는 ${familyName}님만을 위한${'\n'}인지 기능향상 문제 생성에 활용돼요`}
            </Text>
          </View>
          <View style={{ gap: 32 }}>
            <View style={{ gap: 16 }}>
              <Text style={commonStyles.fontMedium}>이름을 입력해주세요</Text>
            </View>
            <View style={{ gap: 16 }}>
              <Text style={commonStyles.fontMedium}>어디에서 찍었나요?</Text>
              <LabelInput
                text="장소"
                placeholder="장소를 입력해주세요"
                onChangeText={setPlace}
              />
            </View>
            <View style={{ gap: 16 }}>
              <Text style={commonStyles.fontMedium}>
                사진에 몇 명이 있나요?
              </Text>
              <LabelInput
                text="인원"
                placeholder="숫자를 입력해주세요"
                onChangeText={setHeadCount}
              />
            </View>
            <View style={{ gap: 16 }}>
              <Text style={commonStyles.fontMedium}>사진에 누가 있나요?</Text>
            </View>
          </View>
          <Button text="저장" onPress={handleVitaminSave} />
        </ScrollView>
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
    height: 700,
    backgroundColor: 'white',
    borderRadius: 11,
    paddingHorizontal: 16,
    paddingVertical: 31,
  },
  image: {
    width: 223,
    height: 223,
    borderRadius: 4,
    backgroundColor: 'tomato',
  },
});

export default VitaminWrite;
