import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from "@material-ui/icons/Remove";
import classes from './CartDialog.module.scss';

const CartDialog = (props) => {
  //TODO Сделать параметр <Dialog/> maxWidth={'md'} зависимым от ширины экрана
  const notEmptyAmountItems = props.cartContent.cartState.filter(item => {
    return item.amount > 0;
  });

  let list;
  let displayTotalPrice;
  let displayMakeOrder;

  if (notEmptyAmountItems.length === 0) {
    displayTotalPrice = false;
    displayMakeOrder = false;
    list = (
      <Typography gutterBottom>
        You haven't added anything to your cart yet
      </Typography>
    );
  } else {
    displayTotalPrice = true;
    displayMakeOrder = true;
    list = (
      <List dense={true}>
        {notEmptyAmountItems.map(item => {
          return (
            <ListItem
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
              amount={item.amount}
            >
              <ListItemText
                primary={item.name}
                secondary={"Price: $" + item.price + ", Amount: " + item.amount}
              />
              <ListItemSecondaryAction>
                <IconButton onClick={() => props.cartContent.incrementHandle(item.id)} aria-label="add"
                            color="primary">
                  <AddIcon/>
                </IconButton>
                <IconButton onClick={() => props.cartContent.decrementHandle(item.id)} aria-label="delete"
                            color="primary">
                  <RemoveIcon/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
    );
  }

  return (
    <div>
      <Dialog fullWidth={true} maxWidth={'md'} onClose={props.onCloseCart} aria-labelledby="customized-dialog-title"
              open={props.isOpen}>
        <DialogTitle id="customized-dialog-title" className={classes.title} onClose={props.onCloseCart}>
          Your Order
          <IconButton aria-label="close" onClick={props.onCloseCart}>
            <CloseIcon/>
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {list}
          {displayTotalPrice ?
            <Typography gutterBottom>
              Total Price: ${props.cartContent.totalPrice}
            </Typography> :
            null
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCloseCart} color="secondary">
            Close
          </Button>
          {displayMakeOrder ?
            <Button onClick={props.onOrder} color="primary">
              Make Order
            </Button> :
            null
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CartDialog;