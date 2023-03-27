import { createSlice } from '@reduxjs/toolkit';

export const optionsSlice = createSlice({
  name: 'boat',
  initialState: {
    totalCost: 2167000,
    bimini: false,
    orrkorlat: false,
    hatsokorlat: false,
    hattamla: false,
    dorzslec: false,
    orrelvedo: false,
    kikotokarika: false,
    kikotobika: false,
    hatsolepcso: false,
    elsolepcso: false,
    algagatlo: false,
    italtarto: false,
    karpitBeige: false,
    karpitKek: false,
    karpitKorlatBeige: false,
    karpitKorlatKek: false,
    karpitVezetoBeige: false,
    karpitVezetoKek: false,
  },
  reducers: {
    toggleOption: (state, action) => {
      switch (action.payload) {
        case 'bimini':
          state.bimini = !state.bimini;
          return;
        case 'orrkorlat':
          state.orrkorlat = !state.orrkorlat;
          return;
        case 'hatsokorlat':
          state.hatsokorlat = !state.hatsokorlat;
          return;
        case 'hattamla':
          state.hattamla = !state.hattamla;
          return;
        case 'dorzslec':
          state.dorzslec = !state.dorzslec;
          return;
        case 'orrelvedo':
          state.orrelvedo = !state.orrelvedo;
          return;
        case 'kikotokarika':
          state.kikotokarika = !state.kikotokarika;
          return;
        case 'kikotobika':
          state.kikotobika = !state.kikotobika;
          return;
        case 'hatsolepcso':
          state.hatsolepcso = !state.hatsolepcso;
          return;
        case 'algagatlo':
          state.algagatlo = !state.algagatlo;
          return;
        case 'italtarto':
          state.italtarto = !state.italtarto;
          return;
        case 'karpitBeige':
          state.karpitBeige = !state.karpitBeige;
          if (state.karpitBeige) {
            state.karpitKek = false;
          }
          return;
        case 'karpitKek':
          state.karpitKek = !state.karpitKek;
          if (state.karpitKek) {
            state.karpitBeige = false;
          }
          return;
      }
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
export const { toggleOption, increaseCost, decreaseCost } = optionsSlice.actions;

export default optionsSlice.reducer;
