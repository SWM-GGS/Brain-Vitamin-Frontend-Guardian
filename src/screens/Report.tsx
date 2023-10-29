import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { commonStyles } from '../styles/common';
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';
import { PopupProps, windowHeight } from './VitaminWrite';
import Button from '../components/Button';
import Label from '../components/Label';
import CloseIcon from '../assets/images/close.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import LabelInput from '../components/LabelInput';

function Report({ closeModal }: Readonly<PopupProps>) {
  const { fontSize } = useSelector((state: RootState) => state.user);
  const [type, setType] = useState<ValueType | null>('');
  const [openType, setOpenType] = useState(false);
  const [valueType, setValueType] = useState(null);
  const [itemsType, setItemsType] = useState([
    { label: '스팸홍보/도배글', value: '스팸홍보/도배글' },
    { label: '음란물', value: '음란물' },
    { label: '불법정보', value: '불법정보' },
    {
      label: '욕설/생명경시/혐오/차별적 표현',
      value: '욕설/생명경시/혐오/차별적 표현',
    },
    { label: '개인정보 노출', value: '개인정보 노출' },
    { label: '명예훼손/저작권 침해', value: '명예훼손/저작권 침해' },
  ]);
  const [reason, setReason] = useState('');

  const handleReport = () => {
    console.log(type, reason);
  };

  return (
    <Pressable
      style={[styles.container, commonStyles.justifyEnd]}
      onPress={closeModal}>
      <Pressable style={styles.popup} onPress={e => e.stopPropagation()}>
        <View style={{ gap: 32, marginBottom: 18 }}>
          <View style={[commonStyles.flexRow, commonStyles.justifyBetween]}>
            <Label text="신고하기" />
            <Pressable onPress={closeModal}>
              <CloseIcon />
            </Pressable>
          </View>
          <View style={{ gap: 16, zIndex: 100 }}>
            <Text style={commonStyles.fontMedium}>
              신고 유형을 선택해주세요
            </Text>
            <DropDownPicker
              open={openType}
              setOpen={setOpenType}
              items={itemsType}
              setItems={setItemsType}
              value={valueType}
              setValue={setValueType}
              onChangeValue={v => setType(v)}
              placeholder="신고유형 선택"
              maxHeight={160}
              style={{
                height: 57,
                borderColor: openType ? '#FF9432' : '#E8E8E8',
              }}
              textStyle={{ fontSize: 16 + (fontSize - 1) * 2 }}
              listMode="SCROLLVIEW"
            />
          </View>
          <View style={{ gap: 16 }}>
            <Text style={commonStyles.fontMedium}>
              신고 사유를 입력해주세요
            </Text>
            <LabelInput
              placeholder="신고하는 이유를 작성해주세요"
              onChangeText={setReason}
            />
          </View>
          <Button text="완료" onPress={handleReport} />
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
    height: 500,
    backgroundColor: 'white',
    borderRadius: 11,
    paddingHorizontal: 16,
    paddingVertical: 31,
  },
});

export default Report;
