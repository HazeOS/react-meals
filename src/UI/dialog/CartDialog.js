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
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CartDialog = (props) => {
  //TODO Сделать подсчет суммы и количества в отдельной сноске
  return (
    <div>
      <Dialog fullWidth={true} maxWidth={'md'} onClose={props.onCloseCart} aria-labelledby="customized-dialog-title"
              open={props.isOpen}>
        <DialogTitle id="customized-dialog-title" onClose={props.onCloseCart}>
          Your Order
        </DialogTitle>
        <DialogContent dividers>
          <List dense={true}>
            {props.cartContent.cartState.filter(item => {
              return item.amount > 0;
            }).map(item => {
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
                    secondary={item.amount}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCloseCart} color="secondary">
            Close
          </Button>
          <Button onClick={props.onCloseCart} color="primary">
            Make Order
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CartDialog;