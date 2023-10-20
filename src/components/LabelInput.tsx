import React, { useState } from 'react';
import { CustomText as Text } from './CustomText';
import { StyleSheet, TextInput, View } from 'react-native';
import { commonStyles } from '../styles/common';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

type InputProps = {
  text: string;
  placeholder: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  isShort?: boolean;
};

function LabelInput({ text, placeholder, onChangeText, isShort }: InputProps) {
  const fontSize = useSelector((state: RootState) => state.user.fontSize);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles(fontSize, isShort ?? false).inputBox,
        {
          borderColor: isFocused ? '#FF9432' : '#F4F4F4',
          backgroundColor: isFocused ? '#FFFFFF' : '#F4F4F4',
        },
      ]}>
      <Text
        size={12}
        style={[
          commonStyles.fontMedium,
          { color: isFocused ? '#FF9432' : '#6D6B69' },
        ]}>
        {text}
      </Text>
      <TextInput
        style={styles(fontSize, isShort ?? false).input}
        placeholder={placeholder}
        placeholderTextColor={'#939393'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = (fontSize: number, isShort: boolean) =>
  StyleSheet.create({
    input: { fontSize: 16 + (fontSize - 1) * 2 },
    inputBox: {
      width: isShort ? 240 : '100%',
      height: 64,
      borderRadius: 8,
      padding: 10,
      gap: 5,
      borderWidth: 1,
    },
  });

export default LabelInput;
