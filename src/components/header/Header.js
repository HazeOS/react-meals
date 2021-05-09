import classes from './Header.module.scss';
import {AppBar, Badge, Button, Toolbar, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";

//TODO создать модальное окно корзины
const Header = () => {
  return (
    <AppBar className={classes.bar} position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.bar__title}>
          React Meals
        </Typography>
        <Button
          variant="contained"
          startIcon={<ShoppingCart/>}
          size="medium"
          color="default"
          className={classes.bar__cart}>
          Your cart
        </Button>
        <Badge className={classes.bar__badge} color="secondary" overlap="rectangle" badgeContent={1}/>
      </Toolbar>
    </AppBar>
  );
}

export default Header;