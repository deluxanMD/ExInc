import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
