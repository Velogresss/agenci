import { createSlice } from '@reduxjs/toolkit';

const guestSlice = createSlice({
  name: 'guest',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  reducers: {
    setGuestInfo: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { setGuestInfo } = guestSlice.actions;
export default guestSlice.reducer;