import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import roomSearchReducer from './roomSearchSlice';
import residenceReducer from './residenceSlice';
import promoReducer from './promoSlice';
import guestReducer from './guestSlice';
import priceReducer from './priceReducer';

const store = configureStore({
  reducer: {
    roomSearch: roomSearchReducer,
    residence: residenceReducer,
    promo: promoReducer,
    guest: guestReducer,
    price: priceReducer
  },
});

export default store;