import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  currentStep: number;
};

function ProgressStep({ currentStep }: Props) {
  return (
    <View style={styles.progressStep}>
      <LinearGradient
        style={styles.stepLine1}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={
          currentStep === 2 || currentStep === 3
            ? ['#FF9432', '#FFD4AD']
            : ['#F3F3F3', '#F3F3F3']
        }
      />
      <LinearGradient
        style={styles.stepLine2}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={
          currentStep === 3 ? ['#FF9432', '#FFD4AD'] : ['#F3F3F3', '#F3F3F3']
        }
      />
      <View style={styles.step}>
        <View
          style={[
            styles.circle,
            {
              backgroundColor:
                currentStep === 1 || currentStep === 2 || currentStep === 3
                  ? '#FF9432'
                  : '#A0A0A0',
            },
          ]}>
          <Text style={styles.circleText}>1</Text>
        </View>
        <Text
          style={[
            styles.stepText,
            {
              color:
                currentStep === 1 || currentStep === 2 || currentStep === 3
                  ? '#FF9432'
                  : '#6D6B69',
            },
          ]}>
          전화번호
        </Text>
      </View>
      <View style={styles.step}>
        <View
          style={[
            styles.circle,
            {
              backgroundColor:
                currentStep === 2 || currentStep === 3 ? '#FF9432' : '#A0A0A0',
            },
          ]}>
          <Text style={styles.circleText}>2</Text>
        </View>
        <Text
          style={[
            styles.stepText,
            {
              color:
                currentStep === 2 || currentStep === 3 ? '#FF9432' : '#6D6B69',
            },
          ]}>
          나이 및 성별
        </Text>
      </View>
      <View style={styles.step}>
        <View
          style={[
            styles.circle,
            { backgroundColor: currentStep === 3 ? '#FF9432' : '#A0A0A0' },
          ]}>
          <Text style={styles.circleText}>3</Text>
        </View>
        <Text
          style={[
            styles.stepText,
            {
              color: currentStep === 3 ? '#FF9432' : '#6D6B69',
            },
          ]}>
          이름 입력
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  circleText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  progressStep: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    width: 331,
    alignSelf: 'center',
  },
  stepLine1: {
    width: 135,
    height: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 7,
    left: 35,
  },
  stepLine2: {
    width: 135,
    height: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 7,
    right: 35,
  },
  step: {
    alignItems: 'center',
  },
  stepText: {
    fontSize: 14,
    fontFamily: 'Pretendard-Medium',
    marginTop: 9,
  },
});

export default ProgressStep;
