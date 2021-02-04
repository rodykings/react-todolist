import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  AppCard: {
    padding: "1.5em",
  },
  addTaskButton: {
    backgroundColor: "#2699FB",
    marginLeft: "1em",
    color: "white",
  },

  inputTask: {
    marginLeft: "1em",
    borderColor: "white",
    marginBottom: "1em",
    width: "30em",
  },

  taskCard: {
    padding: "1em",
    width: "70%",
    margin: "0.5em 0 0 1em",
  },

  typoBar: {
    fontSize: "large",
    color: "white",
    fontFamily: "Georgia",
  },

  appBar: {
    backgroundColor: "#2699FB",
    marginBottom: "3em",
    margin: "0",
  },

  fiCircleTask: {
    marginRight: "1em", 
    cursor: "pointer",
  },

  goXTask: {
    display: "inline",
    marginRight: "0",
  },

  deleteButton: {
    float: "right",
  },
});

export default useStyles;
