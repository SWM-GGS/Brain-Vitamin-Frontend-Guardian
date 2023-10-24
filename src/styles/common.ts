import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  flex: { flex: 1 },
  flexRow: { flexDirection: 'row' },
  pack: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: { justifyContent: 'space-around' },
  itemsCenter: { alignItems: 'center' },
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
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 34,
    color: '#433D3A',
  },
  container: {
    padding: 16,
    flex: 1,
  },
  menuBox: {
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 27,
    elevation: 27,
    borderRadius: 7,
    backgroundColor: 'white',
  },
  menu: {
    height: 58,
    padding: 18,
  },
  menuText: {
    fontFamily: 'Pretendard-Medium',
  },
  borderBottom: { borderBottomColor: '#F4F4F4', borderBottomWidth: 2 },
  fontMedium: { fontFamily: 'Pretendard-Medium', fontWeight: '500' },
  fontBold: { fontFamily: 'Pretendard-Bold', fontWeight: '700' },
  textOrange: { color: '#FF9432' },
  textWhite: { color: 'white' },
  textCenter: { textAlign: 'center' },
});
