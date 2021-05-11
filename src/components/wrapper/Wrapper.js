import {Container, Paper, Typography} from "@material-ui/core";
import classes from "./Wrapper.module.scss";
import Menu from "./menu/Menu";

const Wrapper = () => {
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

      <Menu/>

    </Container>
  );
}

export default Wrapper;