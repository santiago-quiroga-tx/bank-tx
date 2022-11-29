import { configureStore } from '@reduxjs/toolkit';
// import reducer from '../reducers';
import bankReducer from '../reducers/bankSlice';

export default configureStore({
  reducer: {
    bank: bankReducer,
  },
});
