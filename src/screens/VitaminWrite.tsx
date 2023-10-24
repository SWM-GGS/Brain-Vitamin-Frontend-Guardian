import React, { useState } from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
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
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';

const windowHeight = Dimensions.get('window').height;

type Props = {
  closeModal: () => void;
};
function VitaminWrite({ closeModal }: Readonly<Props>) {
  const { familyName, fontSize } = useSelector(
    (state: RootState) => state.user,
  );
  const [place, setPlace] = useState('');
  const [headCount, setHeadCount] = useState('');
  const [year, setYear] = useState<string | null>('');
  const [openYear, setOpenYear] = useState(false);
  const [valueYear, setValueYear] = useState(null);
  const currentYear = new Date().getFullYear();
  const startYear = 1940;
  const [itemsYear, setItemsYear] = useState(
    Array.from(
      { length: currentYear - startYear + 1 },
      (_, i) => currentYear - i,
    ).map(v => {
      return { label: `${v}`, value: `${v}` };
    }),
  );
  const [season, setSeason] = useState<ValueType | null>('');
  const [openSeason, setOpenSeason] = useState(false);
  const [valueSeason, setValueSeason] = useState(null);
  const [itemsSeason, setItemsSeason] = useState([
    { label: '봄', value: '봄' },
    { label: '여름', value: '여름' },
    { label: '가을', value: '가을' },
    { label: '겨울', value: '겨울' },
  ]);
  const [members, setMembers] = useState<ValueType[] | null>([]);
  const [openMembers, setOpenMembers] = useState(false);
  const [valueMembers, setValueMembers] = useState<string[]>([]);
  const [itemsMembers, setItemsMembers] = useState([
    { label: '큰 아들', value: '큰 아들' },
    { label: '작은 아들', value: '작은 아들' },
    { label: '큰 딸', value: '큰 딸' },
    { label: '작은 딸', value: '작은 딸' },
  ]);

  const handleVitaminSave = () => {
    console.log(place, headCount, year, season, members);
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}>
          <TouchableWithoutFeedback>
            <View style={{ gap: 34 }}>
              <View style={[commonStyles.itemsCenter, { gap: 19 }]}>
                <View style={styles.image} />
                <Text color="#433D3A" style={commonStyles.textCenter}>
                  {`아래 들어가는 사진 정보는 ${familyName}님만을 위한${'\n'}인지 기능향상 문제 생성에 활용돼요`}
                </Text>
              </View>
              <View style={{ gap: 32 }}>
                <View style={{ gap: 16 }}>
                  <Text style={commonStyles.fontMedium}>언제 찍었나요?</Text>
                  <View style={[commonStyles.flexRow, { gap: 8 }]}>
                    <DropDownPicker
                      open={openYear}
                      setOpen={setOpenYear}
                      items={itemsYear}
                      setItems={setItemsYear}
                      value={valueYear}
                      setValue={setValueYear}
                      onChangeValue={v => setYear(v)}
                      placeholder="연도 선택"
                      maxHeight={300}
                      style={{
                        height: 57,
                        borderColor: openYear ? '#FF9432' : '#E8E8E8',
                      }}
                      containerStyle={{ width: 166 }}
                      textStyle={{ fontSize: 16 + (fontSize - 1) * 2 }}
                      listMode="SCROLLVIEW"
                    />
                    <DropDownPicker
                      open={openSeason}
                      setOpen={setOpenSeason}
                      items={itemsSeason}
                      setItems={setItemsSeason}
                      value={valueSeason}
                      setValue={setValueSeason}
                      onChangeValue={v => setSeason(v)}
                      placeholder="계절 선택"
                      maxHeight={300}
                      style={{
                        height: 57,
                        borderColor: openSeason ? '#FF9432' : '#E8E8E8',
                      }}
                      containerStyle={{ width: 166 }}
                      textStyle={{ fontSize: 16 + (fontSize - 1) * 2 }}
                      listMode="SCROLLVIEW"
                    />
                  </View>
                </View>
                <View style={{ gap: 16 }}>
                  <Text style={commonStyles.fontMedium}>
                    어디에서 찍었나요?
                  </Text>
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
                  <Text style={commonStyles.fontMedium}>
                    사진에 누가 있나요?
                  </Text>
                  <DropDownPicker
                    open={openMembers}
                    setOpen={setOpenMembers}
                    items={itemsMembers}
                    setItems={setItemsMembers}
                    value={valueMembers}
                    setValue={setValueMembers}
                    onChangeValue={v => setMembers(v)}
                    placeholder="우리 가족 구성원 중에 선택하기"
                    maxHeight={300}
                    multiple={true}
                    style={{
                      height: 57,
                      borderColor: openMembers ? '#FF9432' : '#E8E8E8',
                    }}
                    textStyle={{ fontSize: 16 + (fontSize - 1) * 2 }}
                    listMode="SCROLLVIEW"
                  />
                </View>
              </View>
              <Button text="저장" onPress={handleVitaminSave} />
            </View>
          </TouchableWithoutFeedback>
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
