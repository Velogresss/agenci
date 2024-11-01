import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  residenceData: {
    id: null,
    name: '',
    img: '',
    bads: '',
    apart_name: '',
    apart_price: null,
  },
};

const residenceSlice = createSlice({
  name: 'residence',
  initialState,
  reducers: {
    setResidenceData: (state, action) => {
      state.residenceData = action.payload;
    },
    clearResidenceData: (state) => {
      state.residenceData = initialState.residenceData;
    },
  },
});

export const { setResidenceData, clearResidenceData } = residenceSlice.actions;

export default residenceSlice.reducer;