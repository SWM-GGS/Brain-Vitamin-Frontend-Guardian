import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
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
import { commonStyles } from '../styles/common';
import Label from '../components/Label';
import WeeklyActivity from '../components/WeeklyActivity';

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
    <SafeAreaView edges={['top']}>
      <ScrollView>
        <WeeklyActivity toFamilyGroup={toFamilyGroup} />
        <View style={styles.familyContainer}>
          <View style={[styles.familyTitle, styles.header]}>
            <Label style={{ marginBottom: 20 }} text="우리 가족 이야기" />
            <Pressable style={styles.align} onPress={toFamily}>
              <Text color="#6D6B69" style={commonStyles.fontBold}>
                전체보기
              </Text>
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
                  <Text size={12}>1시간 전</Text>
                  <Text size={12}>표정 3</Text>
                  <Text size={12}>댓글 3</Text>
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
                  <Text size={12}>1시간 전</Text>
                  <Text size={12}>표정 3</Text>
                  <Text size={12}>댓글 3</Text>
                </View>
                <Text>이번 여름 휴가로 갔던 속초 사진들 올려요ㅎㅎ</Text>
              </View>
            </Pressable>
          </ScrollView>
        </View>
        <View style={commonStyles.container}>
          <View style={styles.header}>
            <Label style={{ marginBottom: 20 }} text="우리 이웃 이야기" />
            <Pressable style={styles.align} onPress={toNeighbor}>
              <Text color="#6D6B69" style={commonStyles.fontBold}>
                전체보기
              </Text>
              <ArrowRight />
            </Pressable>
          </View>
          <Pressable style={styles.neighborBox}>
            <View>
              <Text style={[commonStyles.fontBold, { marginBottom: 6 }]}>
                요양원 추천
              </Text>
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
              <Text style={[commonStyles.fontBold, { marginBottom: 6 }]}>
                요양원 추천
              </Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  familyTitle: {
    paddingHorizontal: 16,
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
  neighborContents: {
    width: 250,
  },
  align: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Home;
