import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileImage from '../assets/images/myPage.svg';
import { CustomText as Text } from '../components/CustomText';
import EmotionIcon from '../assets/images/emotion.svg';
import Emotion2Icon from '../assets/images/emotion2.svg';
import CommentIcon from '../assets/images/comment.svg';
import Comment2Icon from '../assets/images/comment2.svg';
import ViewsIcon from '../assets/images/views.svg';
import { commonStyles } from '../styles/common';
import Header from '../components/Header';
import { useModal } from '../hooks/useModal';
import VitaminWrite from './VitaminWrite';
import LayerPopup from '../components/LayerPopup';

function FamilyPostRead() {
  const { isModalOpen, modalText, openModal, closeModal } = useModal();

  return (
    <SafeAreaView>
      <Header style={{ paddingHorizontal: 16 }} text="가족이야기" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={commonStyles.container}>
            <View>
              <View style={styles.writerWrapper}>
                <ProfileImage width={44} height={44} />
                <View>
                  <Text
                    size={18}
                    style={[commonStyles.fontBold, { marginBottom: 4 }]}>
                    닉네임
                  </Text>
                  <Text size={14} color="#6D6B69">
                    10분전
                  </Text>
                </View>
              </View>
              <Pressable style={styles.contents}>
                <Text>이번 여름 휴가로 갔던 속초 사진들 올려요ㅎㅎ</Text>
                <Pressable onPress={() => openModal('비타민')}>
                  <View style={styles.contentsImage}>
                    <Text>사진</Text>
                  </View>
                </Pressable>
                <Text>사진설명</Text>
              </Pressable>
              <View style={styles.contentsInfo}>
                <Pressable style={styles.infoBox}>
                  <EmotionIcon />
                  <Text>6</Text>
                </Pressable>
                <Pressable style={styles.infoBox}>
                  <CommentIcon />
                  <Text>3</Text>
                </Pressable>
                <Pressable style={styles.infoBox}>
                  <ViewsIcon />
                  <Text>300</Text>
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
          <View style={commonStyles.container}>
            <Text
              size={18}
              style={[commonStyles.fontBold, { marginBottom: 18 }]}>
              댓글(14)
            </Text>
            <View style={{ marginBottom: 12 }}>
              <View style={styles.writerWrapper}>
                <ProfileImage width={36} height={36} />
                <View>
                  <Text
                    size={18}
                    style={[commonStyles.fontBold, { marginBottom: 4 }]}>
                    닉네임
                  </Text>
                  <Text size={14} color="#6D6B69">
                    10분전
                  </Text>
                </View>
              </View>
              <View style={styles.commentArea}>
                <View style={styles.commentBox}>
                  <Text>내 사진은 왜 없어?</Text>
                </View>
                <View style={styles.commentAlign}>
                  <Text
                    size={14}
                    style={[commonStyles.fontMedium, { marginBottom: 15 }]}>
                    답글달기
                  </Text>
                  <Text
                    size={14}
                    style={[commonStyles.fontMedium, { marginBottom: 15 }]}>
                    신고
                  </Text>
                </View>
                <View style={styles.recommentArea}>
                  <View style={styles.writerWrapper}>
                    <ProfileImage width={36} height={36} />
                    <View>
                      <Text
                        size={18}
                        style={[commonStyles.fontBold, { marginBottom: 4 }]}>
                        닉네임
                      </Text>
                      <Text size={14} color="#6D6B69">
                        10분전
                      </Text>
                    </View>
                  </View>
                  <View style={styles.commentBox}>
                    <Text>내 사진은 왜 없어?</Text>
                  </View>
                  <View style={styles.commentAlign}>
                    <Text
                      size={14}
                      style={[commonStyles.fontMedium, { marginBottom: 15 }]}>
                      답글달기
                    </Text>
                    <Text
                      size={14}
                      style={[commonStyles.fontMedium, { marginBottom: 15 }]}>
                      신고
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.writerWrapper}>
                <ProfileImage width={36} height={36} />
                <View>
                  <Text
                    size={18}
                    style={[commonStyles.fontBold, { marginBottom: 4 }]}>
                    닉네임
                  </Text>
                  <Text size={14} color="#6D6B69">
                    10분전
                  </Text>
                </View>
              </View>
              <View style={styles.commentArea}>
                <View style={styles.commentBox}>
                  <Text>내 사진은 왜 없어?</Text>
                </View>
                <View style={styles.commentAlign}>
                  <Text
                    size={14}
                    style={[commonStyles.fontMedium, { marginBottom: 15 }]}>
                    답글달기
                  </Text>
                  <Text
                    size={14}
                    style={[commonStyles.fontMedium, { marginBottom: 15 }]}>
                    신고
                  </Text>
                </View>
                <View style={styles.recommentArea}>
                  <View style={styles.writerWrapper}>
                    <ProfileImage width={36} height={36} />
                    <View>
                      <Text
                        size={18}
                        style={[commonStyles.fontBold, { marginBottom: 4 }]}>
                        닉네임
                      </Text>
                      <Text size={14} color="#6D6B69">
                        10분전
                      </Text>
                    </View>
                  </View>
                  <View style={styles.commentBox}>
                    <Text>내 사진은 왜 없어?</Text>
                  </View>
                  <View style={styles.commentAlign}>
                    <Text
                      size={14}
                      style={[commonStyles.fontMedium, { marginBottom: 15 }]}>
                      답글달기
                    </Text>
                    <Text
                      size={14}
                      style={[commonStyles.fontMedium, { marginBottom: 15 }]}>
                      신고
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {isModalOpen &&
        (modalText === '비타민' ? (
          <VitaminWrite closeModal={closeModal} />
        ) : (
          <LayerPopup label={modalText} closeModal={closeModal} />
        ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  writerWrapper: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginBottom: 4,
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
  contents: {
    gap: 8,
    marginBottom: 14,
    marginTop: 16,
  },
  commentArea: {
    alignItems: 'flex-end',
  },
  commentBox: {
    width: 306,
    height: 43,
    borderRadius: 14,
    backgroundColor: '#F6F6F6',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  commentAlign: {
    width: 306,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recommentArea: {},
});

export default FamilyPostRead;
