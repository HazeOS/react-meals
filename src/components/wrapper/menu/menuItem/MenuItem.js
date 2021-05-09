import classes from './MenuItem.module.scss';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
//import jpg from '../../../../../public/burger.jpg'

const MenuItem = (props) => {
  return (
    <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.card__picture}
            component="img"
            image={props.image}
            title="Contemplative Reptile"
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
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default MenuItem;