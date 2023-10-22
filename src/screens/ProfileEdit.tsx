import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { commonStyles } from '../styles/common';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import LabelInput from '../components/LabelInput';
import ShortButton from '../components/ShortButton';

function ProfileEdit() {
  const { profileImgUrl, nickname, phoneNumber } = useSelector(
    (state: RootState) => state.user,
  );
  const [newNickname, setNewNickname] = useState(nickname);
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [code, setCode] = useState('');

  const handleDuplicate = () => {
    console.log(newNickname);
  };

  const sendCode = () => {
    console.log(newPhoneNumber);
  };

  const handleCertificate = () => {
    console.log(code);
  };

  return (
    <SafeAreaView edges={['top']} style={commonStyles.container}>
      <Header text="회원정보 수정" />
      <View style={[commonStyles.pack, { marginVertical: 41 }]}>
        <ImageBackground
          style={styles.profileImage}
          borderRadius={66}
          source={{
            uri:
              profileImgUrl ||
              'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRoT6NNDUONDQmlthWrqIi_frTjsjQT4UZtsJsuxqxLiaFGNl5s3_pBIVxS6-VsFUP_',
          }}
        />
      </View>
      <View
        style={[
          commonStyles.flexRow,
          commonStyles.justifyBetween,
          { marginBottom: 33 },
        ]}>
        <LabelInput
          text="닉네임"
          placeholder="홍길동"
          onChangeText={setNewNickname}
          isShort={true}
        />
        <ShortButton text="중복확인" onPress={handleDuplicate} />
      </View>
      <View style={{ gap: 16 }}>
        <LabelInput
          text="현재 전화번호"
          placeholder={phoneNumber}
          onChangeText={setNewNickname}
          editable={false}
        />
        <View style={[commonStyles.flexRow, commonStyles.justifyBetween]}>
          <LabelInput
            text="바뀐 전화번호"
            placeholder="010 1234 5678"
            onChangeText={setNewPhoneNumber}
            isShort={true}
          />
          <ShortButton text="인증하기" onPress={sendCode} />
        </View>
        <View style={[commonStyles.flexRow, commonStyles.justifyBetween]}>
          <LabelInput
            text="인증번호"
            placeholder="인증번호를 입력해주세요"
            onChangeText={setCode}
            isShort={true}
          />
          <ShortButton text="확인" onPress={handleCertificate} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 132,
    height: 132,
  },
});

export default ProfileEdit;
