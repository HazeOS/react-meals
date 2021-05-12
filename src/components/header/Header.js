import classes from './Header.module.scss';
import {AppBar, Badge, Button, Toolbar, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";

const Header = (props) => {
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
          className={classes.bar__cart}
          onClick={props.onOpenCart}
        >
          Your cart
        </Button>
        {/*TODO Сделать общий подсчет количества добавленных товаров*/}
        <Badge className={classes.bar__badge} color="secondary" showZero={true} overlap="rectangle" badgeContent={0}/>
      </Toolbar>
    </AppBar>
  );
}

export default Header;