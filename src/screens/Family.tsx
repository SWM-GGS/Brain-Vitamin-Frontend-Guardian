import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileImage from '../assets/images/myPage.svg';
import { CustomText as Text } from '../components/CustomText';
import EmotionIcon from '../assets/images/emotion.svg';
import Emotion2Icon from '../assets/images/emotion2.svg';
import CommentIcon from '../assets/images/comment.svg';
import Comment2Icon from '../assets/images/comment2.svg';
import ViewsIcon from '../assets/images/views.svg';
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
                    쥬스
                  </Text>
                  <Text size={14} color="#6D6B69">
                    34분전
                  </Text>
                </View>
              </View>
              <Pressable style={styles.contents} onPress={toFamilyPostRead}>
                <Text>이번 여름 휴가로 갔던 태백산 사진들 올려요ㅎㅎ</Text>
                <Image
                  style={styles.contentsImage}
                  source={require('../assets/images/family1.png')}
                />
              </Pressable>
              <View style={styles.contentsInfo}>
                <Pressable style={styles.infoBox}>
                  <EmotionIcon />
                  <Text>3</Text>
                </Pressable>
                <Pressable style={styles.infoBox}>
                  <CommentIcon />
                  <Text>3</Text>
                </Pressable>
                <Pressable style={styles.infoBox}>
                  <ViewsIcon />
                  <Text>24</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.reactionWrapper}>
            <Pressable style={styles.reaction}>
              <Emotion2Icon />
              <Text>표정짓기</Text>
            </Pressable>
            <Pressable style={styles.reaction}>
              <Comment2Icon />
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
                    다람쥐
                  </Text>
                  <Text size={14} color="#6D6B69">
                    1시간 전
                  </Text>
                </View>
              </View>
              <Pressable style={styles.contents} onPress={toFamilyPostRead}>
                <Text>지난번 속초에서 찍은 사진들</Text>
                <Image
                  style={styles.contentsImage}
                  source={require('../assets/images/family2.png')}
                />
              </Pressable>
              <View style={styles.contentsInfo}>
                <Pressable style={styles.infoBox}>
                  <EmotionIcon />
                  <Text>2</Text>
                </Pressable>
                <Pressable style={styles.infoBox}>
                  <CommentIcon />
                  <Text>4</Text>
                </Pressable>
                <Pressable style={styles.infoBox}>
                  <ViewsIcon />
                  <Text>40</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.reactionWrapper}>
            <Pressable style={styles.reaction}>
              <Emotion2Icon />
              <Text>표정짓기</Text>
            </Pressable>
            <Pressable style={styles.reaction}>
              <Comment2Icon />
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
                    소금빵
                  </Text>
                  <Text size={14} color="#6D6B69">
                    3시간 전
                  </Text>
                </View>
              </View>
              <Pressable style={styles.contents} onPress={toFamilyPostRead}>
                <Text>우리 조카랑 재밌게 놀고 사진도 찍었어요~ ㅎㅎ</Text>
                <Image
                  style={styles.contentsImage}
                  source={require('../assets/images/family3.png')}
                />
              </Pressable>
              <View style={styles.contentsInfo}>
                <Pressable style={styles.infoBox}>
                  <EmotionIcon />
                  <Text>3</Text>
                </Pressable>
                <Pressable style={styles.infoBox}>
                  <CommentIcon />
                  <Text>6</Text>
                </Pressable>
                <Pressable style={styles.infoBox}>
                  <ViewsIcon />
                  <Text>62</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.reactionWrapper}>
            <Pressable style={styles.reaction}>
              <Emotion2Icon />
              <Text>표정짓기</Text>
            </Pressable>
            <Pressable style={styles.reaction}>
              <Comment2Icon />
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
    width: '100%',
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
  contents: {
    gap: 8,
    marginBottom: 14,
  },
});

export default Family;
