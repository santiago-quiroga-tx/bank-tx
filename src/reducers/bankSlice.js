import { createSlice } from "@reduxjs/toolkit";

export const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    username: 'Redux',
    totalAmount: 250000,
  },
  reducers: {
    deposit: (state, action) => {
      state.totalAmount += action.payload;
    },
    withdraw: (state, action) => {
      state.totalAmount -= action.payload;
    },
    resetAmount: (state) => {
      state.totalAmount = 250000;
    },
    donateAll: (state) => {
      state.totalAmount = 0;
    },
  },
});

// Action creators, following recommended setup with redux toolkit
export const { deposit, withdraw, resetAmount, donateAll } = bankSlice.actions;

export default bankSlice.reducer;