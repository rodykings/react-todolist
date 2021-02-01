import React, { useState } from "react";
import TodoForm from "./TodoForm";

function Todo() {
  const [taskList, setTaskList] = useState([]);

  const onClickAddTask = (inputValue) => {
    setTaskList([inputValue, ...taskList]);
  };

  return (
    <div>
      <TodoForm onClick={onClickAddTask} />
    </div>
  );
}

export default Todo;
