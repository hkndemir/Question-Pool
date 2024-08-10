/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  changed: 0
};
export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
  }
});

export default slice.reducer;


