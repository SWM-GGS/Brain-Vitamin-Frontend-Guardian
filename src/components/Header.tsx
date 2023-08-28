import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { CustomText as Text } from './CustomText';
import Back from '../assets/images/arrow-narrow-left.svg';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

type Props = {
  label: string;
};
function Header({ label }: Props) {
  const navigation = useNavigation();
  const fontSize = useSelector((state: RootState) => state.user.fontSize);

  return (
    <View style={styles(fontSize).wrapper}>
      <Pressable
        style={styles(fontSize).backButton}
        onPress={() => navigation.goBack()}>
        <Back />
      </Pressable>
      <Text style={styles(fontSize).text}>{label}</Text>
    </View>
  );
}

const styles = (fontSize: number) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      paddingVertical: 9,
      paddingRight: 9,
    },
    text: {
      fontSize: 18 + (fontSize - 1) * 2,
      fontFamily: 'Pretendard-Medium',
    },
  });

export default Header;
