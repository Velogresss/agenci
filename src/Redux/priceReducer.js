import { SET_TOTAL_PRICE } from './priceActions';

const initialState = {
  totalPrice: 0,
};

const priceReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      return state;
  }
};

export default priceReducer;