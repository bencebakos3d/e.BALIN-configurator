import { configureStore } from '@reduxjs/toolkit';
import optionsReducer from './optionsSlice';

const store = configureStore({
  reducer: {
    boat: optionsReducer,
  },
});

export default store;
