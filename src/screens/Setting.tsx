import React from 'react';
import { Pressable, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from '../styles/common';
import Header from '../components/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SettingScreenStackParamList } from '../stackNav/SettingScreen';
import { useNavigation } from '@react-navigation/native';

type SettingScreenProps = NativeStackNavigationProp<
  SettingScreenStackParamList,
  'Setting'
>;

function Setting() {
  const navigation = useNavigation<SettingScreenProps>();

  const toProfileEdit = () => {
    navigation.navigate('ProfileEdit');
  };

  return (
    <SafeAreaView edges={['top']} style={commonStyles.container}>
      <Header text="설정" />
      <View style={[commonStyles.menuBox, { marginTop: 26 }]}>
        <Pressable
          style={[commonStyles.menu, commonStyles.borderBottom]}
          onPress={toProfileEdit}>
          <Text style={commonStyles.menuText}>회원정보 수정</Text>
        </Pressable>
        <Pressable style={[commonStyles.menu, commonStyles.borderBottom]}>
          <Text style={commonStyles.menuText}>글자크기 설정</Text>
        </Pressable>
        <Pressable style={[commonStyles.menu, commonStyles.borderBottom]}>
          <Text style={commonStyles.menuText}>고객센터</Text>
        </Pressable>
        <Pressable style={[commonStyles.menu, commonStyles.borderBottom]}>
          <Text style={commonStyles.menuText}>로그아웃</Text>
        </Pressable>
        <Pressable style={commonStyles.menu}>
          <Text style={commonStyles.menuText}>회원탈퇴</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Setting;
