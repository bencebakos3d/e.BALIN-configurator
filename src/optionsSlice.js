import { createSlice } from '@reduxjs/toolkit';

export const optionsSlice = createSlice({
  name: 'boat',
  initialState: {
    bimini: false,
    orrelvedo: false,
  },
  reducers: {
    toggleBimini: (state) => {
      state.bimini = !state.bimini;
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
export const { toggleBimini } = optionsSlice.actions;

export default optionsSlice.reducer;
