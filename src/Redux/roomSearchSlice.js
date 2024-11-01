import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  startDate: new Date().toLocaleDateString('en-US'),
  endDate: new Date().toLocaleDateString('en-US'),
  adults: 1,
  childr: 0
};

const roomSearchSlice = createSlice({
  name: 'roomSearch',
  initialState,
  reducers: {
    setRoomSearchData: (state, action) => {
      console.log(action.payload);
      return { ...state, ...action.payload };
    },
  },
});

export const { setRoomSearchData } = roomSearchSlice.actions;
export default roomSearchSlice.reducer;