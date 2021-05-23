import classes from './App.module.scss';
import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import {useContext, useState} from "react";
import CartDialog from "../UI/CartDialog/CartDialog";
import {CartContext} from "../context/CartContext";

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

    console.table(cartContext.cartState.filter(item => {
      return item.amount > 0;
    }));
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
