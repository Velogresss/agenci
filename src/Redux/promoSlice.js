import { createSlice } from '@reduxjs/toolkit';

const promoSlice = createSlice({
  name: 'promo',
  initialState: {
    discount: 0,
  },
  reducers: {
    setPromoSlice: (state, action) => {
      state.discount = action.payload; 
    },
  },
});

export const { setPromoSlice } = promoSlice.actions;
export default promoSlice.reducer;
