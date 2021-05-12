import classes from './Menu.module.scss';
import MenuItem from "./menuItem/MenuItem";
import {Grid} from "@material-ui/core";
import {useContext} from "react";
import {CartContext} from "../../../context/cart-context";

const Menu = () => {
  const cartContext = useContext(CartContext);

  return (
    <Grid container className={classes.list}>
      {cartContext.cartState.map((item) => {
        return (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
            amount={item.amount}
            onIncrement={() => cartContext.incrementHandle(item.id)}
            onDecrement={() => cartContext.decrementHandle(item.id)}
          />
        )
      })}
    </Grid>
  );
}

export default Menu;