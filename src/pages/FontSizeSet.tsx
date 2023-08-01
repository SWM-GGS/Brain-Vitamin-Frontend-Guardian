import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStepStackParamList } from '../stackNav/SignUpStep';

type Props = NativeStackScreenProps<SignUpStepStackParamList, 'FontSizeSet'>;

function FontSizeSet({ navigation }: Props) {
  const toPhoneNumberSet = () => {
    navigation.navigate('PhoneNumberSet');
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={[styles.text, styles.label]}>
          글자 크기를 설정해주세요
        </Text>
        <Pressable style={styles.fontButton}>
          <Text style={[styles.text, styles.option, styles.big]}>크게</Text>
          <Text style={styles.big}>잘했고, 잘해왔고, 잘할 거야</Text>
        </Pressable>
        <Pressable style={styles.fontButton}>
          <Text style={[styles.text, styles.option, styles.normal]}>보통</Text>
          <Text style={styles.normal}>잘했고, 잘해왔고, 잘할 거야</Text>
        </Pressable>
        <Pressable style={styles.fontButton}>
          <Text style={[styles.text, styles.option]}>작게</Text>
          <Text style={styles.small}>잘했고, 잘해왔고, 잘할 거야</Text>
        </Pressable>
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable
          style={[styles.button, styles.nextButton]}
          onPress={toPhoneNumberSet}>
          <Text style={[styles.text, styles.nextText]}>다음</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  body: {
    marginTop: 53,
  },
  label: {
    fontSize: 20,
    marginBottom: 27,
  },
  option: {
    marginBottom: 4,
    color: '#FF9432',
  },
  text: {
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
  },
  fontButton: {
    paddingVertical: 13.5,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
    marginBottom: 19,
  },
  big: {
    fontSize: 20,
  },
  normal: {
    fontSize: 18,
  },
  small: {
    fontSize: 16,
  },
  buttonWrapper: {
    marginBottom: 22,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16.5,
    borderRadius: 11,
  },
  nextButton: { backgroundColor: '#FF9432' },
  nextText: {
    color: '#FFFFFF',
  },
});

export default FontSizeSet;
