import React from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { CustomText as Text } from './CustomText';
import Back from '../assets/images/arrow-narrow-left.svg';
import { useNavigation } from '@react-navigation/native';
import { commonStyles } from '../styles/common';

type Props = {
  text: string;
  style?: ViewStyle | ViewStyle[];
};
function Header({ text, ...props }: Readonly<Props>) {
  const navigation = useNavigation();

  return (
    <View {...props} style={[styles.wrapper, props.style]}>
      <Pressable
        style={{ paddingVertical: 9, paddingRight: 9 }}
        onPress={() => navigation.goBack()}>
        <Back />
      </Pressable>
      <Text size={18} style={commonStyles.fontMedium}>
        {text}
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
