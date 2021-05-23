import React, {useEffect, useReducer} from "react";
import {findIndexById} from "../helpers/Helpers";
import burgerImage from '../assets/dishes/burger.jpg';
import saladImage from '../assets/dishes/salad.jpg';
import schnitzelImage from '../assets/dishes/schnitzel.jpg';
import sushiImage from '../assets/dishes/sushi.jpg';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      state.cartState[findIndexById(state.cartState, action.id)].amount++;
      return {...state, cartState: state.cartState};

    case 'DECREMENT':
      const amount = state.cartState[findIndexById(state.cartState, action.id)].amount;
      if (!amount) {
        return state;
      } else {
        state.cartState[findIndexById(state.cartState, action.id)].amount--;
        return {...state, cartState: state.cartState};
      }

    case 'TOTAL_PRICE':
      let totalPrice = 0;
      state.cartState.forEach(item => {
        totalPrice += item.price * item.amount;
      });
      return {...state, totalPrice: totalPrice.toFixed(2)};

    case 'TOTAL_AMOUNT':
      let totalAmount = 0;
      state.cartState.forEach(item => {
        totalAmount += item.amount;
      });
      return {...state, totalAmount: totalAmount};

    default:
      return state;
  }
}

export const CartContext = React.createContext({
  cartState: [],
  incrementHandle: () => {
  },
  decrementHandle: () => {
  },
  totalPriceHandle: () => {
  },
  totalAmountHandle: () => {
  }
});

export const CartContextProvider = (props) => {

  const incrementHandle = (id) => {
    dispatchCartEvent({type: 'INCREMENT', id: id});
  }

  const decrementHandle = (id) => {
    dispatchCartEvent({type: 'DECREMENT', id: id});
  }

  const totalPriceHandle = () => {
    dispatchCartEvent({type: 'TOTAL_PRICE'});
  }

  const totalAmountHandle = () => {
    dispatchCartEvent({type: 'TOTAL_AMOUNT'});
  }


  const initState = {
    cartState: [
      {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        image: sushiImage,
        price: 22.99,
        amount: 0
      },
      {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        image: schnitzelImage,
        price: 16.5,
        amount: 0
      },
      {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        image: burgerImage,
        price: 12.99,
        amount: 0
      },
      {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        image: saladImage,
        price: 18.99,
        amount: 0
      }
    ],
    totalPrice: 0,
    totalAmount: 0,
    incrementHandle: incrementHandle,
    decrementHandle: decrementHandle,
    totalPriceHandle: totalPriceHandle,
    totalAmountHandle: totalAmountHandle
  }

  const [cartState, dispatchCartEvent] = useReducer(cartReducer, initState);

  useEffect(() => {
    const identifier = setTimeout(() => {
      totalAmountHandle();
      totalPriceHandle();
    }, 100);

    return () => {
      clearTimeout(identifier);
    };
  }, [cartState]);

  return (
    <CartContext.Provider value={cartState}>
      {props.children}
    </CartContext.Provider>
  );
}