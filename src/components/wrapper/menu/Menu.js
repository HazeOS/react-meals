import classes from './Menu.module.scss';
import MenuItem from "./menuItem/MenuItem";
import {Grid} from "@material-ui/core";

const Menu = (props) => {
  return (
    <Grid container className={classes.list}>
      {props.items.map((item) => {
        return (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        )
      })}
    </Grid>
  );
}

export default Menu;