import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

type Component = {
  style?: TextStyle | TextStyle[];
  children: string | string[];
};
export const CustomText: React.FC<Component> = ({ children, ...props }) => {
  const fontSize = useSelector((state: RootState) => state.user.fontSize);

  return (
    <Text {...props} style={[styles(fontSize).defaultFontText, props.style]}>
      {children}
    </Text>
  );
};

const styles = (fontSize: number) =>
  StyleSheet.create({
    defaultFontText: {
      fontFamily: 'Pretendard-Regular',
      fontSize: 16 + (fontSize - 1) * 2,
      color: '#1F1411',
    },
  });
