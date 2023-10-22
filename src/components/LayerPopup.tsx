import React from 'react';
import { Dimensions, Pressable, ScrollView, StyleSheet } from 'react-native';
import { CustomText as Text } from './CustomText';
import { commonStyles } from '../styles/common';

const windowHeight = Dimensions.get('window').height;

type Props = {
  label: string;
  closeModal: () => void;
  desc?: string;
};
function LayerPopup({ label, closeModal, desc }: Readonly<Props>) {
  return (
    <Pressable
      style={[styles.container, commonStyles.pack]}
      onPress={closeModal}>
      <Pressable style={styles.popup} onPress={e => e.stopPropagation()}>
        <ScrollView
          contentContainerStyle={[
            commonStyles.flex,
            commonStyles.justifyAround,
            commonStyles.itemsCenter,
          ]}>
          <Text
            size={20}
            style={[commonStyles.fontBold, commonStyles.textCenter]}>
            {label}
          </Text>
          {desc ? (
            <Text style={[commonStyles.fontMedium, commonStyles.textCenter]}>
              {desc}
            </Text>
          ) : null}
          <Pressable
            style={[styles.button, commonStyles.pack]}
            onPress={closeModal}>
            <Text style={[commonStyles.textWhite, commonStyles.fontMedium]}>
              확인
            </Text>
          </Pressable>
        </ScrollView>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: windowHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
  },
  popup: {
    width: 250,
    minHeight: 200,
    maxHeight: 600,
    backgroundColor: 'white',
    borderRadius: 11,
    padding: 16,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#FF9432',
    borderRadius: 11,
  },
});

export default LayerPopup;
