import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkIsFirstRun = async () => {
  const isFirstRun = await AsyncStorage.getItem('isFirstRun');
  return isFirstRun === null;
};

export const setFirstRun = async () => {
  await AsyncStorage.setItem('isFirstRun', 'false');
};
