import {Container, Paper, Typography} from "@material-ui/core";
import classes from "./Wrapper.module.scss";
import Menu from "./menu/Menu";

const Wrapper = () => {
  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      image: './assets/dishes/sushi.jpg',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      image: './assets/dishes/schnitzel.jpg',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      image: './assets/dishes/burger.jpg',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      image: './assets/dishes/salad.jpg',
      price: 18.99,
    },
  ];

  return (
    <Container component="div" maxWidth={false} disableGutters={true} className={classes.wrapper}>

      <div className={classes.wrapper__fiction}>
        <Paper elevation={20} className={classes.wrapper__fiction__block}>
          <Typography variant="h6" className={classes.wrapper__fiction__block__title}>Delicious Food, Delivered To
            You</Typography>
          <Typography variant="body1" align="center">
            Choose your favorite meal from our broad selection of available meals and enjoy delicious lunch or dinner at
            home. <br/>
            All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
          </Typography>
        </Paper>
      </div>

      <Menu items={DUMMY_MEALS}/>

    </Container>
  );
}

export default Wrapper;