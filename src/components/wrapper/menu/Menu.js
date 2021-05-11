import classes from './Menu.module.scss';
import MenuItem from "./menuItem/MenuItem";
import {Grid} from "@material-ui/core";
import {useReducer} from "react";
import {findIndexById} from "../../../helpers/Helpers";

const orderReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      state[findIndexById(state, action.id)].amount++;
      return [...state];
    case 'DECREMENT':
      const amount = state[findIndexById(state, action.id)].amount;
      if (!amount) {
        return state;
      } else {
        state[findIndexById(state, action.id)].amount--;
        return [...state];
      }
    default:
      return [...state];
  }
}

const Menu = () => {
  const [orderState, dispatchOrderEvent] = useReducer(orderReducer, [
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
    },
  ]);

  const incrementHandle = (id, amount) => {
    dispatchOrderEvent({type: 'INCREMENT', id: id, amount: amount});
  }

  const decrementHandle = (id, amount) => {
    dispatchOrderEvent({type: 'DECREMENT', id: id, amount: amount});
  }

  return (
    <Grid container className={classes.list}>
      {orderState.map((item) => {
        return (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
            amount={item.amount}
            onIncrement={() => incrementHandle(item.id, item.amount)}
            onDecrement={() => decrementHandle(item.id, item.amount)}
          />
        )
      })}
    </Grid>
  );
}

export default Menu;