import React from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomText as Text } from '../components/CustomText';
import { commonStyles } from '../styles/common';
import SettingIcon from '../assets/images/setting.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MyPageScreenStackParamList } from '../stackNav/MyPageScreen';
import { useNavigation } from '@react-navigation/native';
import Label from '../components/Label';

type MyPageScreenProps = NativeStackNavigationProp<
  MyPageScreenStackParamList,
  'MyPage'
>;

function MyPage() {
  const { profileImgUrl, nickname } = useSelector(
    (state: RootState) => state.user,
  );
  const navigation = useNavigation<MyPageScreenProps>();

  const toSetting = () => {
    navigation.navigate('SettingScreen');
  };

  return (
    <SafeAreaView edges={['top']} style={commonStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.header, { marginBottom: 44 }]}>
          <Label text="마이페이지" />
          <Pressable onPress={toSetting}>
            <SettingIcon width={24} />
          </Pressable>
        </View>
        <View style={[styles.header, { marginBottom: 47 }]}>
          <ImageBackground
            style={styles.profileImage}
            borderRadius={32}
            source={{
              uri:
                profileImgUrl ||
                'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRoT6NNDUONDQmlthWrqIi_frTjsjQT4UZtsJsuxqxLiaFGNl5s3_pBIVxS6-VsFUP_',
            }}
          />
          <View style={styles.inputBox}>
            <Text
              size={12}
              color="#6D6B69"
              style={[commonStyles.fontMedium, { marginBottom: 6 }]}>
              닉네임
            </Text>
            <Text>{nickname}</Text>
          </View>
        </View>
        <View style={{ marginBottom: 44 }}>
          <Text size={14} color="#6D6B69" style={{ marginBottom: 8 }}>
            게시글관리
          </Text>
          <View style={commonStyles.menuBox}>
            <Pressable style={[commonStyles.menu, commonStyles.borderBottom]}>
              <Text style={commonStyles.menuText}>내가 올린 게시글</Text>
            </Pressable>
            <Pressable style={[commonStyles.menu, commonStyles.borderBottom]}>
              <Text style={commonStyles.menuText}>내가 댓글 단 게시글</Text>
            </Pressable>
            <Pressable style={commonStyles.menu}>
              <Text style={commonStyles.menuText}>
                내가 감정표현 누른 게시글
              </Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Text size={14} color="#6D6B69" style={{ marginBottom: 8 }}>
            서비스
          </Text>
          <View style={commonStyles.menuBox}>
            <Pressable style={[commonStyles.menu, commonStyles.borderBottom]}>
              <Text style={commonStyles.menuText}>우리 가족 비타민 만들기</Text>
            </Pressable>
            <Pressable style={commonStyles.menu}>
              <Text style={commonStyles.menuText}>자가진단 해보러 가기</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  profileImage: { width: 64, height: 64 },
  inputBox: {
    width: '100%',
    height: 64,
    borderRadius: 8,
    backgroundColor: '#F4F4F4',
    padding: 10,
  },
});

export default MyPage;
