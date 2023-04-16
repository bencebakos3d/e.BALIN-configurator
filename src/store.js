import { configureStore } from '@reduxjs/toolkit';
import turaReducer from './turaSlice';

const store = configureStore({
  reducer: {
    tura: turaReducer,
  },
});

export default store;
