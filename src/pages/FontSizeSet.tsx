import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch } from '../store';
import userSlice from '../slices/user';
import { setFirstRun } from '../utils/firstRun';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../AppInner';

type Props = NativeStackNavigationProp<RootStackParamList, 'FontSizeSet'>;

function FontSizeSet() {
  const navigation = useNavigation<Props>();
  const [fontSize, setFontSize] = useState(2);
  const dispatch = useAppDispatch();

  const toAuth = () => {
    dispatch(userSlice.actions.setFontSize(fontSize));
    setFirstRun();
    navigation.navigate('Auth');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={[styles.text, styles.label]}>
          글자 크기를 설정해주세요
        </Text>
        <Pressable
          style={[
            styles.fontButton,
            {
              backgroundColor: fontSize === 3 ? '#FFF5EC' : '#FFFFFF',
              borderWidth: fontSize === 3 ? 1 : undefined,
              borderColor: fontSize === 3 ? '#FF9432' : undefined,
            },
          ]}
          onPress={() => setFontSize(3)}>
          <Text style={[styles.text, styles.option, styles.large]}>크게</Text>
          <Text style={styles.large}>잘했고, 잘해왔고, 잘할 거야</Text>
        </Pressable>
        <Pressable
          style={[
            styles.fontButton,
            {
              backgroundColor: fontSize === 2 ? '#FFF5EC' : '#FFFFFF',
              borderWidth: fontSize === 2 ? 1 : undefined,
              borderColor: fontSize === 2 ? '#FF9432' : undefined,
            },
          ]}
          onPress={() => setFontSize(2)}>
          <Text style={[styles.text, styles.option, styles.medium]}>보통</Text>
          <Text style={styles.medium}>잘했고, 잘해왔고, 잘할 거야</Text>
        </Pressable>
        <Pressable
          style={[
            styles.fontButton,
            {
              backgroundColor: fontSize === 1 ? '#FFF5EC' : '#FFFFFF',
              borderWidth: fontSize === 1 ? 1 : undefined,
              borderColor: fontSize === 1 ? '#FF9432' : undefined,
            },
          ]}
          onPress={() => setFontSize(1)}>
          <Text style={[styles.text, styles.option]}>작게</Text>
          <Text style={styles.small}>잘했고, 잘해왔고, 잘할 거야</Text>
        </Pressable>
      </View>
      <Pressable style={styles.nextButton} onPress={toAuth}>
        <Text style={[styles.text, styles.nextText]}>다음</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  body: {
    marginTop: 40,
    flex: 1,
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
    height: 87,
    paddingVertical: 13.5,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
    justifyContent: 'space-around',
    marginBottom: 19,
  },
  large: {
    fontSize: 20,
  },
  medium: {
    fontSize: 18,
  },
  small: {
    fontSize: 16,
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16.5,
    borderRadius: 11,
    backgroundColor: '#FF9432',
  },
  nextText: {
    color: '#FFFFFF',
  },
});

export default FontSizeSet;
