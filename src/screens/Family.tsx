import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileImage from '../assets/images/myPage.svg';
import { CustomText as Text } from '../components/CustomText';
import EmotionImage from '../assets/images/emotion.svg';
import { FamilyScreenStackParamList } from '../stackNav/FamilyScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { commonStyles } from '../styles/common';

type FamilyScreenProps = NativeStackScreenProps<
  FamilyScreenStackParamList,
  'Family'
>;

function Family({ navigation }: FamilyScreenProps) {
  const toFamilyPostRead = () => {
    navigation.navigate('FamilyPostRead');
  };

  return (
    <SafeAreaView edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={commonStyles.container}>
            <View>
              <View style={[styles.writerWrapper, { marginBottom: 20 }]}>
                <ProfileImage width={44} height={44} />
                <View>
                  <Text
                    size={18}
                    style={(commonStyles.fontBold, { marginBottom: 4 })}>
                    닉네임
                  </Text>
                  <Text size={14} style={styles.writerSubInfo}>
                    10분전
                  </Text>
                </View>
              </View>
              <Pressable style={styles.contents} onPress={toFamilyPostRead}>
                <Text>이번 여름 휴가로 갔던 속초 사진들 올려요ㅎㅎ</Text>
                <View style={styles.contentsImage}>
                  <Text>사진</Text>
                </View>
              </Pressable>
              <View style={styles.contentsInfo}>
                <Pressable style={styles.infoBox}>
                  <EmotionImage />
                  <Text>6</Text>
                </Pressable>
                <Pressable style={styles.infoBox}>
                  <EmotionImage />
                  <Text>3</Text>
                </Pressable>
                <Pressable style={styles.infoBox}>
                  <EmotionImage />
                  <Text>300</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.reactionWrapper}>
            <Pressable style={styles.reaction}>
              <EmotionImage />
              <Text>표정짓기</Text>
            </Pressable>
            <Pressable style={styles.reaction}>
              <EmotionImage />
              <Text>댓글달기</Text>
            </Pressable>
            <Pressable style={styles.reaction}>
              <Text>공유하기</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={commonStyles.container}>
            <View>
              <View style={[styles.writerWrapper, { marginBottom: 20 }]}>
                <ProfileImage width={44} height={44} />
                <View>
                  <Text
                    size={18}
                    style={(commonStyles.fontBold, { marginBottom: 4 })}>
                    닉네임
                  </Text>
                  <Text size={14} style={styles.writerSubInfo}>
                    10분전
                  </Text>
                </View>
              </View>
              <Pressable style={styles.contents} onPress={toFamilyPostRead}>
                <Text>이번 여름 휴가로 갔던 속초 사진들 올려요ㅎㅎ</Text>
                <View style={styles.contentsImage}>
                  <Text>사진</Text>
                </View>
              </Pressable>
              <View style={styles.contentsInfo}>
                <Pressable style={styles.infoBox}>
                  <EmotionImage />
                  <Text>6</Text>
                </Pressable>
                <Pressable style={styles.infoBox}>
                  <EmotionImage />
                  <Text>3</Text>
                </Pressable>
                <Pressable style={styles.infoBox}>
                  <EmotionImage />
                  <Text>300</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.reactionWrapper}>
            <Pressable style={styles.reaction}>
              <EmotionImage />
              <Text>표정짓기</Text>
            </Pressable>
            <Pressable style={styles.reaction}>
              <EmotionImage />
              <Text>댓글달기</Text>
            </Pressable>
            <Pressable style={styles.reaction}>
              <Text>공유하기</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  writerWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  contentsImage: {
    height: 235,
    backgroundColor: 'tomato',
    borderRadius: 4,
  },
  contentsInfo: {
    flexDirection: 'row',
    gap: 6,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 7,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 80,
    gap: 4,
  },
  reactionWrapper: {
    flexDirection: 'row',
    height: 48,
    backgroundColor: '#F6F6F6',
  },
  reaction: {
    flexDirection: 'row',
    gap: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  writerSubInfo: {
    color: '#6D6B69',
  },
  contents: {
    gap: 8,
    marginBottom: 14,
  },
});

export default Family;
