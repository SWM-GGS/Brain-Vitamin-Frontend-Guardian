import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { CustomText as Text } from '../components/CustomText';

type Props = {
  text: string;
  onPress: () => void;
  isDisabled?: boolean;
};

function ShortButton({ text, onPress, isDisabled }: Props) {
  return (
    <Pressable style={styles.button} disabled={isDisabled} onPress={onPress}>
      <Text size={14} style={styles.text}>
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
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#939393',
  },
});

export default ShortButton;
