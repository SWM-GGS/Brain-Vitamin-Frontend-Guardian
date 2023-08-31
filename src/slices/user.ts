import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  nickname: '',
  phoneNumber: '',
  familyId: -1,
  familyName: '',
  fontSize: 2,
  profileImgUrl: '',
  accessToken: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.nickname = action.payload.nickname;
      state.phoneNumber = action.payload.phoneNumber;
      state.familyId = action.payload.familyId;
      state.familyName = action.payload.familyName;
      state.fontSize = action.payload.fontSize;
      state.profileImgUrl = action.payload.profileImgUrl;
      state.accessToken = action.payload.accessToken;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setFontSize(state, action) {
      state.fontSize = action.payload;
    },
    setNickname(state, action) {
      state.nickname = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setFamilyInfo(state, action) {
      state.familyId = action.payload.familyId;
      state.familyName = action.payload.familyName;
    },
  },
});

export default userSlice;
