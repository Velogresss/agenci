import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {

let totalPrice = sessionStorage.getItem('totalPrice'); 

  return (
    <div>
      <h3>Ціна за бронювання: {totalPrice} UAH</h3>
    </div>
  );
}

export default Cart;