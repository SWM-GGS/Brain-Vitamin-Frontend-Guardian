import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  jcSpaceBetween: {
    justifyContent: 'space-between',
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16.5,
    borderRadius: 11,
    backgroundColor: '#FF9432',
  },
  nextText: {
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  box: {
    width: 160,
    height: 210,
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
    marginBottom: 16,
    paddingVertical: 19,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  groupName: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 22,
    lineHeight: 34,
    color: '#433D3A',
  },
});
