import classes from './App.module.scss';
import Header from "../components/header/Header";
import Wrapper from "../components/wrapper/Wrapper";
import {useContext, useState} from "react";
import CartDialog from "../UI/dialog/CartDialog";
import {CartContext} from "../context/cart-context";

const App = () => {
  const [openCart, setOpenCart] = useState(false);
  const cartContext = useContext(CartContext);


  const onOpenCartHandler = () => {
    setOpenCart(true);
  }

  const onCloseCartHandler = () => {
    setOpenCart(false);
  }

  const onOrderHandler = () => {
    setOpenCart(false);
    console.table(cartContext.cartState);
    //document.location.reload();
  }


  return (
    <div className={classes.App}>
      <Header cartContent={cartContext} onOpenCart={onOpenCartHandler}/>
      <Wrapper/>
      {openCart &&
      <CartDialog cartContent={cartContext} isOpen={openCart} onCloseCart={onCloseCartHandler}
                  onOrder={onOrderHandler}/>}
    </div>
  );
}

export default App;
