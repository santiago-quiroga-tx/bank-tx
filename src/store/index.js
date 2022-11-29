import { configureStore } from '@reduxjs/toolkit';
import bankReducer from '../reducers/bankSlice';

export default configureStore({
  reducer: {
    bank: bankReducer,
  },
});
