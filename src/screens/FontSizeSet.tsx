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
import { commonStyles } from '../styles/common';
import Label from '../components/Label';
import Button from '../components/Button';

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
    <SafeAreaView style={commonStyles.container}>
      <View style={[commonStyles.flex, { marginTop: 40 }]}>
        <Label style={{ marginBottom: 27 }} text="글자 크기를 설정해주세요" />
        <View style={{ gap: 19 }}>
          <Pressable
            style={[
              styles.fontButton,
              {
                backgroundColor: fontSize === 3 ? '#FFF5EC' : 'white',
                borderColor: fontSize === 3 ? '#FF9432' : 'white',
              },
            ]}
            onPress={() => setFontSize(3)}>
            <Text
              size={20}
              style={[commonStyles.textOrange, commonStyles.fontBold]}>
              크게
            </Text>
            <Text size={20}>잘했고, 잘해왔고, 잘할 거야</Text>
          </Pressable>
          <Pressable
            style={[
              styles.fontButton,
              {
                backgroundColor: fontSize === 2 ? '#FFF5EC' : 'white',
                borderColor: fontSize === 2 ? '#FF9432' : 'white',
              },
            ]}
            onPress={() => setFontSize(2)}>
            <Text
              size={18}
              style={[commonStyles.textOrange, commonStyles.fontBold]}>
              보통
            </Text>
            <Text size={18}>잘했고, 잘해왔고, 잘할 거야</Text>
          </Pressable>
          <Pressable
            style={[
              styles.fontButton,
              {
                backgroundColor: fontSize === 1 ? '#FFF5EC' : 'white',
                borderColor: fontSize === 1 ? '#FF9432' : 'white',
              },
            ]}
            onPress={() => setFontSize(1)}>
            <Text
              size={16}
              style={[commonStyles.textOrange, commonStyles.fontBold]}>
              작게
            </Text>
            <Text size={16}>잘했고, 잘해왔고, 잘할 거야</Text>
          </Pressable>
        </View>
      </View>
      <Button text="다음" onPress={toAuth} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    borderWidth: 1,
  },
});

export default FontSizeSet;
