import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { commonStyles } from '../styles/common';

type Props = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

function ShortButton({ text, onPress, disabled }: Readonly<Props>) {
  return (
    <Pressable
      style={[
        styles.button,
        { backgroundColor: disabled ? '#F0F0F0' : '#FF9432' },
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text
        size={14}
        style={[
          commonStyles.fontMedium,
          { color: disabled ? '#6D6B69' : 'white' },
        ]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 95,
    height: 64,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShortButton;
