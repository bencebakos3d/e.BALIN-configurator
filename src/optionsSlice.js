import { createSlice } from '@reduxjs/toolkit';
import data from './components/ConfigurationPanel/icons/ebalin_tura.json';

export const optionsSlice = createSlice({
  name: 'boat',
  initialState: {
    isFullscreen: false,
    showAlert: false,
    alertText: '',
    totalCost: 2167000,
    bimini: false,
    orrkorlat: false,
    hatsokorlat: false,
    kormanyKapaszkodo: true,
    hattamla: false,
    dorzslec: true,
    orrelvedo: false,
    kikotokarika: false,
    kikotobika: 1,
    hatsolepcso: false,
    elsolepcso: false,
    elsolepcso: false,
    algagatlo: false,
    italtarto: false,
    tukorfal: true,
    csapadekviz: true,
    karpitBeige: false,
    karpitKek: false,
    karpitKorlatBeige: false,
    karpitKorlatKek: false,
    karpitVezetoBeige: false,
    karpitVezetoKek: false,
    elektrokiepites: false,
    helyzetjelzo: false,
    akkutarto: true,
    chip: false,
    halradar: false,
    lucEvezo: false,
    padliEvezo: false,
    telefontarto: false,
    horgaszbotTarto: false,
    horgaszbotAljzat: false,
    nevtabla: false,
    ponyva: false,
    ponyvaTarto: false,
    motortakaro: false,
    horgony: false,
    horgonykotel: false,
    kikotokotel: false,
    mericske: false,
    solyakocsi1: false,
    solyakocsi2: false,
    solyakocsi3: false,
  },
  reducers: {
    toggleOption: (state, action) => {
      switch (action.payload) {
        case 'showAlert':
          state.showAlert = !state.showAlert;
          return;
        case 'bimini':
          state.bimini = !state.bimini;
          return;
        case 'orrkorlat':
          if (state.orrkorlat) {
            state.elsolepcso = false;
            state.totalCost -= data.Hajótest[10].price;
          }
          state.orrkorlat = !state.orrkorlat;
          return;
        case 'hatsokorlat':
          state.hatsokorlat = !state.hatsokorlat;
          return;
        case 'kormanyKapaszkodo':
          state.kormanyKapaszkodo = !state.kormanyKapaszkodo;
          return;
        case 'hattamla':
          state.hattamla = !state.hattamla;
          return;
        case 'dorzslec':
          state.dorzslec = !state.dorzslec;
          return;
        case 'orrelvedo':
          if (state.orrelvedo) {
            state.elsolepcso = false;
            state.totalCost -= data.Hajótest[10].price;
          }
          state.orrelvedo = !state.orrelvedo;

          return;
        case 'kikotokarika':
          state.kikotokarika = !state.kikotokarika;
          return;
        case 'hatsolepcso':
          state.hatsolepcso = !state.hatsolepcso;
          return;
        case 'elsolepcso':
          state.elsolepcso = !state.elsolepcso;
          if (state.elsolepcso) {
            if (!state.orrkorlat) {
              state.orrkorlat = true;
              state.totalCost += data.Hajótest[1].price;
            }
            if (!state.orrelvedo) {
              state.orrelvedo = true;
              state.totalCost += data.Hajótest[6].price;
            }
          }

          return;
        case 'algagatlo':
          state.algagatlo = !state.algagatlo;
          return;
        case 'italtarto':
          state.italtarto = !state.italtarto;
          return;
        case 'tukorfal':
          state.tukorfal = !state.tukorfal;
          return;
        case 'csapadekviz':
          state.csapadekviz = !state.csapadekviz;
          return;
        case 'karpitBeige':
          state.karpitBeige = !state.karpitBeige;
          if (state.karpitBeige && state.karpitKek) {
            state.karpitKek = false;
            state.totalCost -= data.Kárpit[0].price;
          }
          return;
        case 'karpitKek':
          state.karpitKek = !state.karpitKek;
          if (state.karpitKek && state.karpitBeige) {
            state.karpitBeige = false;
            state.totalCost -= data.Kárpit[1].price;
          }
          return;
        case 'karpitKorlatBeige':
          state.karpitKorlatBeige = !state.karpitKorlatBeige;
          if (state.karpitKorlatBeige) {
            state.hatsokorlat = true;
            alert('halooo');
          }
          if (state.karpitKorlatKek) {
            state.karpitKorlatKek = false;
          }
          return;
        case 'karpitKorlatKek':
          state.karpitKorlatKek = !state.karpitKorlatKek;
          if (state.karpitKorlatKek) {
            state.hatsokorlat = true;
          }
          if (state.karpitKorlatBeige) {
            state.karpitKorlatBeige = false;
          }
          return;
        case 'elektrokiepites':
          state.elektrokiepites = !state.elektrokiepites;
          return;
        case 'helyzetjelzo':
          state.helyzetjelzo = !state.helyzetjelzo;
          return;
        case 'akkutarto':
          state.akkutarto = !state.akkutarto;
          return;
        case 'chip':
          state.chip = !state.chip;
          return;
        case 'halradar':
          state.halradar = !state.halradar;
          return;
        case 'lucEvezo':
          state.lucEvezo = !state.lucEvezo;
          return;
        case 'padliEvezo':
          state.padliEvezo = !state.padliEvezo;
          return;
        case 'telefontarto':
          state.telefontarto = !state.telefontarto;
          return;
        case 'horgaszbotTarto':
          state.horgaszbotTarto = !state.horgaszbotTarto;
          return;
        case 'horgaszbotAljzat':
          state.horgaszbotAljzat = !state.horgaszbotAljzat;
          return;
        case 'nevtabla':
          state.nevtabla = !state.nevtabla;
          return;
        case 'ponyva':
          state.ponyva = !state.ponyva;
          return;
        case 'ponyvaTarto':
          state.ponyvaTarto = !state.ponyvaTarto;
          return;
        case 'motortakaro':
          state.motortakaro = !state.motortakaro;
          return;
        case 'horgony':
          state.horgony = !state.horgony;
          return;
        case 'horgonykotel':
          state.horgonykotel = !state.horgonykotel;
          return;
        case 'kikotokotel':
          state.kikotokotel = !state.kikotokotel;
          return;
        case 'mericske':
          state.mericske = !state.mericske;
          return;
        case 'solyakocsi1':
          state.solyakocsi1 = !state.solyakocsi1;
          return;
        case 'solyakocsi2':
          state.solyakocsi2 = !state.solyakocsi2;
          return;
        case 'solyakocsi3':
          state.solyakocsi3 = !state.solyakocsi3;
          return;
      }
    },
    increaseCost: (state, action) => {
      state.totalCost += action.payload;
    },
    decreaseCost: (state, action) => {
      state.totalCost -= action.payload;
    },
    toggleFullscreen: (state) => {
      state.isFullscreen = !state.isFullscreen;
    },
    changeOptionCount: (state, action) => {
      switch (action.payload[0]) {
        case 'kikotobika':
          if (state.kikotobika === 0 && action.payload[1] < 0) {
            return;
          } else {
            state.kikotobika += action.payload[1];
            state.totalCost += action.payload[1] * data.Hajótest[8].price;
            return;
          }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleOption, increaseCost, decreaseCost, toggleFullscreen, changeOptionCount } = optionsSlice.actions;

export default optionsSlice.reducer;
