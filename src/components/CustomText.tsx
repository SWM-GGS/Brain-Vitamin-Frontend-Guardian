import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

type Component = {
  style?: TextStyle;
  children: string;
};

export const CustomText: React.FC<Component> = ({ children, ...props }) => {
  return (
    <Text {...props} style={[styles.defaultFontText, props.style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultFontText: {
    fontFamily: 'Pretendard-Regular',
  },
});
