import { createSlice } from "@reduxjs/toolkit";

export const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    username: 'Santiago',
    totalAmount: 250000,
  },
  reducers: {
    deposit: (state, action) => {
      state.totalAmount += action.payload;
    },
    withdraw: (state, action) => {
      state.totalAmount -= action.payload;
    },
  },
});

// Action creators, following recommended setup with redux toolkit
export const { deposit, withdraw } = bankSlice.actions;

export default bankSlice.reducer;