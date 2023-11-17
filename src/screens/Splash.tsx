import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from '../assets/images/logo.svg';

function Splash() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Splash;
