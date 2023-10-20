import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

type Component = {
  children: string | string[];
  size?: number;
  style?: TextStyle | TextStyle[];
};
export const CustomText: React.FC<Component> = ({
  children,
  size,
  ...props
}) => {
  const fontSize = useSelector((state: RootState) => state.user.fontSize);

  return (
    <Text
      {...props}
      style={[styles(size ?? 16, fontSize).defaultFontText, props.style]}>
      {children}
    </Text>
  );
};

const styles = (size: number, fontSize: number) =>
  StyleSheet.create({
    defaultFontText: {
      fontFamily: 'Pretendard-Regular',
      fontWeight: '400',
      fontSize: size + (fontSize - 1) * 2,
      color: '#1F1411',
    },
  });
