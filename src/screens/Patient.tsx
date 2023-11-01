import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from '../styles/common';
import { useNavigation } from '@react-navigation/native';
import WeeklyActivity from '../components/WeeklyActivity';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PatientScreenStackParamList } from '../stackNav/PatientScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import Label from '../components/Label';
import RadarChart from '../components/RadarChart';
import { LineChart } from 'react-native-gifted-charts';

type PatientScreenProps = NativeStackNavigationProp<
  PatientScreenStackParamList,
  'Patient'
>;

function Patient() {
  const { familyName } = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<PatientScreenProps>();
  const cognitionData = [
    { label: '기억력', value: 30 },
    { label: '주의집중력', value: 40 },
    { label: '집행능력', value: 70 },
    { label: '시지각능력', value: 30 },
    { label: '계산능력', value: 49 },
    { label: '실행기능', value: 90 },
    { label: '언어능력', value: 38 },
    { label: '소리인지력', value: 80 },
  ];
  const screeningTestData = [
    { label: '6.20', value: 30 },
    { label: '7.20', value: 50 },
    { label: '8.20', value: 55 },
    { label: '9.20', value: 60 },
    { label: '10.20', value: 80 },
    { label: '11.20', value: 90 },
  ];

  const toFamilyGroup = () => {
    navigation.navigate('FamilyGroupScreen');
  };

  return (
    <SafeAreaView style={commonStyles.flex} edges={['top']}>
      <ScrollView contentContainerStyle={{ gap: 20 }}>
        <WeeklyActivity toFamilyGroup={toFamilyGroup} />
        <Pressable style={styles.section}>
          <View style={{ gap: 5 }}>
            <Text style={commonStyles.fontMedium} color="#6D6B69">
              {familyName}님의
            </Text>
            <Label text="인지 능력 현황" />
          </View>
          <View style={commonStyles.pack}>
            <RadarChart
              data={cognitionData}
              gradientColor={{
                startColor: '#FF9432',
                endColor: '#FFF8F1',
                count: 5,
              }}
              stroke={['#FFE8D3', '#FFE8D3', '#FFE8D3', '#FFE8D3', '#ff9532']}
              strokeWidth={[0.5, 0.5, 0.5, 0.5, 1]}
              strokeOpacity={[1, 1, 1, 1, 0.13]}
              labelColor="#433D3A"
              dataFillColor="#FF9432"
              dataFillOpacity={0.6}
            />
          </View>
        </Pressable>
        <Pressable style={styles.section}>
          <View style={{ gap: 5 }}>
            <Text style={commonStyles.fontMedium} color="#6D6B69">
              {familyName}님의
            </Text>
            <Label text="선별 검사 기록" />
          </View>
          <LineChart
            data={screeningTestData}
            areaChart
            color="#FF9432"
            dataPointsColor="#FF9432"
            startFillColor="#FF9432"
            xAxisColor="#6D6B69"
            yAxisColor="#6D6B69"
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 20,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
  },
});

export default Patient;
