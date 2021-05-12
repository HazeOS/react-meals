import classes from './MenuItem.module.scss';
import {
  Badge,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const MenuItem = (props) => {
  return (
    <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.card__picture}
            component="img"
            image={props.image}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton onClick={props.onIncrement} aria-label="add" color="primary">
            <AddIcon/>
          </IconButton>
          <Badge color="primary" overlap="rectangle" showZero={true} badgeContent={props.amount}/>
          <IconButton onClick={props.onDecrement} aria-label="delete" color="primary">
            <RemoveIcon/>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default MenuItem;