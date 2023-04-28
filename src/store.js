import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import turaReducer from './turaSlice';
import horgaszReducer from './horgaszSlice';

const rootReducer = combineReducers({
  tura: turaReducer,
  horgasz: horgaszReducer,
});

const store = createStore(rootReducer);

export default store;
