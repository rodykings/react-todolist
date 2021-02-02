import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import useStyles from "../Styles";
import ScheduleIcon from "@material-ui/icons/Schedule";

function TodoForm(props) {
  const classes = useStyles();
  const [input, setInput] = useState("");

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    const randomNumber = Math.round(Math.random() * 10000);
    props.onClick({ id: randomNumber, text: input, isDone: false });
    setInput("");
  };

  return (
    <form>
      <TextField
        className="form-input"
        variant="outlined"
        label="Type your goal."
        size="small"
        value={input}
        onChange={onChangeInput} 
        className={classes.inputTask}
      />
      <Button
        onClick={onClick}
        variant="contained"
        size="medium"
        className={classes.addTaskButton}
        endIcon={<ScheduleIcon />}
      >
        Add task
      </Button>
    </form>
  );
}

export default TodoForm;
