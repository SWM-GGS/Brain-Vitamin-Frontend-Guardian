import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from '../styles/common';

function Neighbor() {
  return (
    <SafeAreaView edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[commonStyles.container, commonStyles.pack]}>
          <Text>준비중입니다. 잠시만 기다려주세요.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Neighbor;
