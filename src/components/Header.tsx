import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { CustomText as Text } from './CustomText';
import Back from '../assets/images/arrow-narrow-left.svg';
import { useNavigation } from '@react-navigation/native';

type Props = {
  label: string;
};

function Header({ label }: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Back />
      </Pressable>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    paddingVertical: 9,
    paddingRight: 9,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Pretendard-Medium',
  },
});

export default Header;
