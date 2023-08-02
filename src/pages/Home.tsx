import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import Pill from '../assets/images/pill.svg';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeScreenStackParamList } from '../stackNav/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainParamList } from '../tapNav/Main';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import ArrowRight from '../assets/images/arrowRight.svg';

type HomeScreenProps = NativeStackNavigationProp<
  HomeScreenStackParamList,
  'Home'
>;
type MainProps = BottomTabNavigationProp<MainParamList>;
type Props = CompositeNavigationProp<HomeScreenProps, MainProps>;

function Home() {
  const navigation = useNavigation<Props>();

  const toFamilyGroup = () => {
    navigation.navigate('FamilyGroupScreen');
  };

  const toFamily = () => {
    navigation.navigate('FamilyScreen');
  };

  const toNeighbor = () => {
    navigation.navigate('NeighborScreen');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[styles.container, styles.weekly]}>
          <View style={styles.header}>
            <Text style={styles.label}>
              닉네임님의 7월 첫째주{'\n'}두뇌 비타민 주간 활동
            </Text>
            <Pressable onPress={toFamilyGroup}>
              <Text>가족관리</Text>
            </Pressable>
          </View>
          <Pressable style={styles.dayWrapper}>
            <View style={styles.dayBox}>
              <Pill />
              <Text style={styles.dayText}>월</Text>
            </View>
            <View style={styles.dayBox}>
              <Pill />
              <Text style={styles.dayText}>화</Text>
            </View>
            <View style={styles.dayBox}>
              <Pill />
              <Text style={styles.dayText}>수</Text>
            </View>
            <View style={styles.dayBox}>
              <Pill />
              <Text style={styles.dayText}>목</Text>
            </View>
            <View style={styles.dayBox}>
              <Pill />
              <Text style={styles.dayText}>금</Text>
            </View>
            <View style={styles.dayBox}>
              <Pill />
              <Text style={styles.dayText}>토</Text>
            </View>
            <View style={styles.dayBox}>
              <Pill />
              <Text style={styles.dayText}>일</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.familyContainer}>
          <View style={[styles.familyTitle, styles.header]}>
            <Text style={styles.label}>우리 가족 이야기</Text>
            <Pressable style={styles.align} onPress={toFamily}>
              <Text style={styles.showDetail}>전체보기</Text>
              <ArrowRight />
            </Pressable>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable style={styles.familyBox}>
              <View style={styles.familyImage}>
                <Text>사진</Text>
              </View>
              <View style={styles.familyContents}>
                <View style={styles.familyContentsSub}>
                  <Text style={styles.sub}>1시간 전</Text>
                  <Text style={styles.sub}>표정 3</Text>
                  <Text style={styles.sub}>댓글 3</Text>
                </View>
                <Text>이번 여름 휴가로 갔던 속초 사진들 올려요ㅎㅎ</Text>
              </View>
            </Pressable>
            <Pressable style={styles.familyBox}>
              <View style={styles.familyImage}>
                <Text>사진</Text>
              </View>
              <View style={styles.familyContents}>
                <View style={styles.familyContentsSub}>
                  <Text style={styles.sub}>1시간 전</Text>
                  <Text style={styles.sub}>표정 3</Text>
                  <Text style={styles.sub}>댓글 3</Text>
                </View>
                <Text>이번 여름 휴가로 갔던 속초 사진들 올려요ㅎㅎ</Text>
              </View>
            </Pressable>
          </ScrollView>
        </View>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.label}>우리 이웃 이야기</Text>
            <Pressable style={styles.align} onPress={toNeighbor}>
              <Text style={styles.showDetail}>전체보기</Text>
              <ArrowRight />
            </Pressable>
          </View>
          <Pressable style={styles.neighborBox}>
            <View>
              <Text style={styles.neighborTitle}>요양원 추천</Text>
              <Text style={styles.neighborContents}>
                미추홀구 주변에 괜찮은 요양원 추천해주세요
              </Text>
            </View>
            <View style={styles.neighborImage}>
              <Text>사진</Text>
            </View>
          </Pressable>
          <Pressable style={styles.neighborBox}>
            <View>
              <Text style={styles.neighborTitle}>요양원 추천</Text>
              <Text style={styles.neighborContents}>
                미추홀구 주변에 괜찮은 요양원 추천해주세요
              </Text>
            </View>
            <View style={styles.neighborImage}>
              <Text>사진</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  weekly: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  familyTitle: {
    paddingHorizontal: 16,
  },
  label: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 20,
    marginBottom: 20,
    lineHeight: 27.9,
  },
  dayWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'black',
  },
  dayBox: {
    width: 46,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderStyle: 'solid',
    bordeRadius: 7,
    borderColor: '#FF9432',
    // overflow: 'hidden',
  },
  dayText: {
    fontSize: 14,
  },
  familyContainer: {
    paddingTop: 24,
  },
  familyBox: {
    width: 258,
    height: 238,
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
    // overflow: 'hidden',
    marginLeft: 16,
    marginBottom: 28,
  },
  familyImage: {
    flex: 1.5,
    backgroundColor: 'tomato',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },
  familyContents: {
    flex: 1,
    padding: 12,
  },
  familyContentsSub: {
    flexDirection: 'row',
    marginBottom: 6,
    gap: 8,
  },
  sub: {
    fontSize: 12,
  },
  neighborBox: {
    height: 90,
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
    paddingVertical: 14.5,
    paddingHorizontal: 16,
    flexDirection: 'row',
    marginBottom: 12,
  },
  neighborImage: {
    width: 60,
    height: 60,
    backgroundColor: 'tomato',
    borderRadius: 6,
  },
  neighborTitle: {
    fontFamily: 'Pretendard-Bold',
    marginBottom: 6,
  },
  neighborContents: {
    width: 250,
  },
  align: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showDetail: {
    fontFamily: 'Pretendard-Bold',
    color: '#6D6B69',
  },
});

export default Home;
