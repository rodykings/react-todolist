import React from "react";
import { FiCircle } from "react-icons/fi";
import { Card, Button } from "@material-ui/core";
import useStyles from "../Styles";

function TodoList(props) {
  const classes = useStyles();

  return props.taskList.map((item) => {
    return (
      <Card className={classes.taskCard}>
        <FiCircle
          onClick={() => props.crossElement(item.id)}
          className={classes.fiCircleTask}
        />
        <span 
          class={item.isDone === true ? "crossedElement" : ""}
          >{item.text}</span>
        <Button
          variant="contained"
          color="secondary"
          className={classes.deleteButton}
          size="small"
          onClick={() => props.removeElement(item.id)}
        >
          Delete
        </Button>
      </Card>
    );
  });
}

export default TodoList;
