import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FamilyGroupScreenStackParamList } from '../stackNav/FamilyGroupScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Config from 'react-native-config';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import Header from '../components/Header';
import CheckCircle from '../assets/images/check-circle.svg';
import UncheckCircle from '../assets/images/uncheck-circle.svg';
import { FamilyListProps } from './FamilyGroup';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import AWS from 'aws-sdk';
import { commonStyles } from '../styles/common';

type FamilyGroupScreenProps = NativeStackScreenProps<
  FamilyGroupScreenStackParamList,
  'FamilyGroupEdit'
>;

function FamilyGroupEdit({ route }: FamilyGroupScreenProps) {
  const { familyList } = route.params;
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [deleteList, setDeleteList] = useState<number[]>([]);
  type ProfileImgProps = {
    id: number;
    file: Blob;
    fileName: string;
  };
  const [profileImg, setProfileImg] = useState<ProfileImgProps[]>([]);
  type ProfileImgPreviewUrlProps = {
    id: number;
    base64: string;
  };
  const [profileImgPreviewUrl, setProfileImgPreviewUrl] = useState<
    ProfileImgPreviewUrlProps[]
  >([]);

  const generateUniqueNumber = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();
    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(milliseconds).padStart(3, '0');
    const uniqueNumber = `${year}${formattedMonth}${formattedDay}-${formattedHours}${formattedMinutes}${formattedSeconds}${formattedMilliseconds}`;
    return uniqueNumber;
  };

  const changeDeleteMode = () => {
    setIsDeleteMode(prev => !prev);
    setDeleteList([]);
  };

  const handleImageSelect = async (id: number) => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      maxWidth: 512,
      maxHeight: 512,
      includeBase64: true,
    };
    try {
      const result = await launchImageLibrary(options);
      if (result.didCancel) {
        return;
      }
      if (result.errorCode === 'permission') {
        Alert.alert('앨범 접근 실패', '카메라 이용 권한을 허용해주세요.');
      } else if (result.errorCode === 'others') {
        Alert.alert('앨범 접근 실패', result.errorMessage);
      }

      if (result.assets?.[0]?.base64 && result.assets[0].fileName) {
        const base64 = `data:image/jpg;base64,${result.assets[0].base64}`;
        const newProfileImgPreviewUrl = [...profileImgPreviewUrl];
        const findIndex = newProfileImgPreviewUrl.findIndex(v => v.id === id);
        if (findIndex !== -1) {
          newProfileImgPreviewUrl[findIndex] = {
            id,
            base64,
          };
        } else {
          newProfileImgPreviewUrl.push({ id, base64 });
        }
        setProfileImgPreviewUrl(newProfileImgPreviewUrl);

        const res = await fetch(base64);
        const file = await res.blob();
        const fileName = result.assets[0].fileName;
        const newProfileImg = [...profileImg];
        const findIndex2 = newProfileImg.findIndex(v => v.id === id);
        if (findIndex2 !== -1) {
          newProfileImg[findIndex2] = {
            id,
            file,
            fileName,
          };
        } else {
          newProfileImg.push({ id, file, fileName });
        }
        setProfileImg(newProfileImg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageSave = () => {
    if (!profileImg.length) {
      return;
    }
    const region = 'ap-northeast-2';
    const bucket = 'brain-vitamin-user-files';
    AWS.config.update({
      region,
      accessKeyId: Config.AWS_ACCESS_KEY_ID ?? '',
      secretAccessKey: Config.AWS_SECRET_ACCESS_KEY ?? '',
    });

    profileImg.forEach(v => {
      const originalUrl = familyList.find(
        item => item.id === v.id,
      )?.profileImgUrl;
      let uploadUrl = originalUrl;

      const s3 = new AWS.S3();
      const path = `familyGroupImages/${generateUniqueNumber()}-${v.fileName}`;
      const uploadParams = {
        Bucket: bucket,
        Key: path,
        Body: v.file,
      };

      const uploadS3 = async () => {
        try {
          const result = await s3.upload(uploadParams).promise();
          uploadUrl = result.Location;
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };
      uploadS3();

      const sendData = async () => {
        try {
          const { data } = await axios.put(
            `${Config.API_URL}/guardian/family-group/profile`,
            {
              familyId: v.id,
              familyGroupProfileImg: uploadUrl,
            },
            {
              headers: {
                authorization: `Bearer ${accessToken}`,
              },
            },
          );
          if (data.isSuccess) {
            Alert.alert('알림', data.result);
          } else {
            Alert.alert('알림', data.message);
          }
        } catch (error) {
          console.error(error);
        }
      };
      sendData();
    });
  };

  const handleDeleteSelect = (id: number) => {
    if (deleteList.includes(id)) {
      setDeleteList(prev => prev.filter(v => v !== id));
    } else {
      setDeleteList(prev => [...prev, id]);
    }
  };

  const handleDelete = () => {
    deleteList.forEach(familyId => {
      const deleteGroup = async () => {
        try {
          const { data } = await axios.delete(
            `${Config.API_URL}/guardian/family-group`,
            {
              data: {
                familyId,
              },
              headers: { authorization: `Bearer ${accessToken}` },
            },
          );
          if (data.isSuccess) {
            Alert.alert('알림', data.result);
          } else {
            Alert.alert('알림', data.message);
          }
        } catch (error) {
          console.error(error);
        }
      };
      deleteGroup();
    });
  };

  const renderFamily = (item: FamilyListProps) => {
    if (isDeleteMode) {
      return item.profileImgUrl ? (
        <Pressable onPress={() => handleDeleteSelect(item.id)}>
          <ImageBackground
            style={commonStyles.box}
            borderRadius={13}
            source={{ uri: item.profileImgUrl }}>
            <Text
              style={[
                commonStyles.groupName,
                { fontFamily: 'Pretendard-Medium' },
              ]}>
              {
                (
                  <Text style={commonStyles.groupName}>{item.familyName}</Text>
                ) as any
              }
              네{'\n'}가족
            </Text>
            {deleteList.includes(item.id) ? (
              <CheckCircle style={styles.check} />
            ) : (
              <UncheckCircle style={styles.check} />
            )}
          </ImageBackground>
        </Pressable>
      ) : (
        <Pressable
          style={commonStyles.box}
          onPress={() => handleDeleteSelect(item.id)}>
          <Text
            style={[
              commonStyles.groupName,
              { fontFamily: 'Pretendard-Medium' },
            ]}>
            {
              (
                <Text style={commonStyles.groupName}>{item.familyName}</Text>
              ) as any
            }
            네{'\n'}가족
          </Text>
          {deleteList.includes(item.id) ? (
            <CheckCircle style={styles.check} />
          ) : (
            <UncheckCircle style={styles.check} />
          )}
        </Pressable>
      );
    }
    const previewImg = profileImgPreviewUrl.find(v => v.id === item.id);
    if (previewImg) {
      return (
        <Pressable onPress={() => handleImageSelect(item.id)}>
          <ImageBackground
            style={commonStyles.box}
            borderRadius={13}
            source={{ uri: previewImg.base64 }}>
            <Text
              style={[
                commonStyles.groupName,
                { fontFamily: 'Pretendard-Medium' },
              ]}>
              {
                (
                  <Text style={commonStyles.groupName}>{item.familyName}</Text>
                ) as any
              }
              네{'\n'}가족
            </Text>
            <View style={styles.edit}>
              <Text style={styles.editText}>프로필 사진 수정</Text>
            </View>
          </ImageBackground>
        </Pressable>
      );
    }
    return item.profileImgUrl ? (
      <Pressable onPress={() => handleImageSelect(item.id)}>
        <ImageBackground
          style={commonStyles.box}
          borderRadius={13}
          source={{ uri: item.profileImgUrl }}>
          <Text
            style={[
              commonStyles.groupName,
              { fontFamily: 'Pretendard-Medium' },
            ]}>
            {
              (
                <Text style={commonStyles.groupName}>{item.familyName}</Text>
              ) as any
            }
            네{'\n'}가족
          </Text>
          <View style={styles.edit}>
            <Text style={styles.editText}>프로필 사진 수정</Text>
          </View>
        </ImageBackground>
      </Pressable>
    ) : (
      <Pressable
        style={commonStyles.box}
        onPress={() => handleImageSelect(item.id)}>
        <Text
          style={[commonStyles.groupName, { fontFamily: 'Pretendard-Medium' }]}>
          {
            (
              <Text style={commonStyles.groupName}>{item.familyName}</Text>
            ) as any
          }
          네{'\n'}
          가족
        </Text>
        <View style={styles.edit}>
          <Text style={styles.editText}>프로필 사진 수정</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header label="가족 그룹 수정" />
      <View style={styles.body}>
        <View style={styles.header}>
          {isDeleteMode ? (
            <Text style={styles.label}>삭제할 그룹을 선택해주세요</Text>
          ) : (
            <View />
          )}
          <Pressable onPress={changeDeleteMode}>
            <Text>{isDeleteMode ? '취소' : '가족 그룹 삭제'}</Text>
          </Pressable>
        </View>
        <View style={styles.section}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.boxWrapper}>
              {familyList.length ? (
                <FlatList
                  columnWrapperStyle={commonStyles.justifyBetween}
                  scrollEnabled={false}
                  data={familyList}
                  keyExtractor={v => `${v.id}`}
                  renderItem={({ item }) => renderFamily(item)}
                  numColumns={2}
                />
              ) : null}
            </View>
          </ScrollView>
        </View>
        {isDeleteMode ? (
          <Pressable
            style={[
              commonStyles.nextButton,
              { backgroundColor: deleteList.length ? '#FF9432' : '#c6c6c6' },
            ]}
            onPress={handleDelete}
            disabled={!deleteList.length}>
            <Text style={commonStyles.nextText}>삭제</Text>
          </Pressable>
        ) : (
          <Pressable style={commonStyles.nextButton} onPress={handleImageSave}>
            <Text style={commonStyles.nextText}>저장</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    flex: 1,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 25,
    marginBottom: 10,
  },
  section: {
    flex: 1,
  },
  label: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 20,
  },
  boxWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 26,
    paddingBottom: 200,
  },
  edit: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.26)',
    width: 114,
    height: 31,
    alignSelf: 'center',
    marginBottom: 60,
  },
  editText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  check: {
    alignSelf: 'flex-end',
  },
});

export default FamilyGroupEdit;
