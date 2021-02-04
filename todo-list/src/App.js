import "./App.css";
import Todo from "./components/Todo";
import { Card, AppBar, Typography, Toolbar } from "@material-ui/core";
import useStyle from "./Styles";

function App() {
  const classes = useStyle();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.typoBar}> Todo List </Typography>
          <span className="author"><a href="www.github.com/Jumaruba">Made with love by Juliane Marubayashi</a></span>
        </Toolbar>
      </AppBar>
      <div className="center">
        <Card className={classes.AppCard}>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <h1>Todo list</h1>
          <p>Give yourself some goals to your day and put yourself to work.</p>
          <Todo />
        </Card>
      </div>
    </div>
  );
}

export default App;
