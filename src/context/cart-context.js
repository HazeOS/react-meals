import React, {useReducer} from "react";
import {findIndexById} from "../helpers/Helpers";

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
    default:
      return state;
  }
}

export const CartContext = React.createContext({
  cartState: [],
  incrementHandle: () => {
  },
  decrementHandle: () => {
  }
});

export const CartContextProvider = (props) => {

  const incrementHandle = (id) => {
    dispatchCartEvent({type: 'INCREMENT', id: id});
  }

  const decrementHandle = (id) => {
    dispatchCartEvent({type: 'DECREMENT', id: id});
  }

  const initState = {
    cartState: [
      {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        image: './assets/dishes/sushi.jpg',
        price: 22.99,
        amount: 0
      },
      {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        image: './assets/dishes/schnitzel.jpg',
        price: 16.5,
        amount: 0
      },
      {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        image: './assets/dishes/burger.jpg',
        price: 12.99,
        amount: 0
      },
      {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        image: './assets/dishes/salad.jpg',
        price: 18.99,
        amount: 0
      }
    ],
    incrementHandle: incrementHandle,
    decrementHandle: decrementHandle
  }

  const [cartState, dispatchCartEvent] = useReducer(cartReducer, initState);

  return (
    <CartContext.Provider value={cartState}>
      {props.children}
    </CartContext.Provider>
  );
}