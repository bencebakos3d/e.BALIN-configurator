import { createSlice } from '@reduxjs/toolkit';

export const optionsSlice = createSlice({
  name: 'boat',
  initialState: {
    totalCost: 2167000,
    bimini: false,
    orrelvedo: false,
  },
  reducers: {
    toggleBimini: (state) => {
      state.bimini = !state.bimini;
    },
    increaseCost: (state, action) => {
      state.totalCost += action.payload;
    },
    decreaseCost: (state, action) => {
      state.totalCost -= action.payload;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { toggleBimini, increaseCost, decreaseCost } = optionsSlice.actions;

export default optionsSlice.reducer;
