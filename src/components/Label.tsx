import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { commonStyles } from '../styles/common';

type Props = {
  text: string;
  style?: TextStyle | TextStyle[];
};

function Label({ text, ...props }: Props) {
  return (
    <Text
      {...props}
      style={[styles.label, commonStyles.fontBold, props.style as TextStyle]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    lineHeight: 27.9,
  },
});

export default Label;
