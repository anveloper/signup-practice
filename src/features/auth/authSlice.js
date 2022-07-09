import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    userId: '',
    password: '',
    nickname: '',
    email: ''
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupUser(state, action) {
      state.userInfo = action.payload;
    },
    loginUser(state, action) {
      state.userInfo = action.payload;
    }
  }
});
export const { signupUser, loginUser } = authSlice.actions;
export default authSlice.reducer