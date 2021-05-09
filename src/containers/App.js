import classes from './App.module.scss';
import Header from "../components/header/Header";
import Wrapper from "../components/wrapper/Wrapper";

const App = () => {
  return (
    <div className={classes.App}>
      <Header/>
      <Wrapper/>
    </div>
  );
}

export default App;
