import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { CustomText as Text } from './CustomText';
import Back from '../assets/images/arrow-narrow-left.svg';
import { useNavigation } from '@react-navigation/native';
import { commonStyles } from '../styles/common';

type Props = {
  label: string;
};
function Header({ label }: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={{ paddingVertical: 9, paddingRight: 9 }}
        onPress={() => navigation.goBack()}>
        <Back />
      </Pressable>
      <Text size={18} style={commonStyles.fontMedium}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
