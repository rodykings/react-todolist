import React, { useState } from "react";
import TodoForm from "./TodoForm"; 
import TodoList from "./TodoList"; 

function Todo() {
  const [taskList, setTaskList] = useState([]);

  const onClickAddTask = (inputValue) => {
    setTaskList([inputValue, ...taskList]);
  };

  return (
    <div>
      <TodoForm onClick={onClickAddTask} />
      <TodoList taskList={taskList}/>

    </div>
  );
}

export default Todo;
