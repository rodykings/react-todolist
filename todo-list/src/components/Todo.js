import React, { useState } from "react";
import { FiToggleLeft } from "react-icons/fi";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [taskList, setTaskList] = useState([]);

  const removeElement = id => { 
      console.log(id); 
  } 

  const onClickAddTask = (inputValue) => {   
    const newTaskList = [inputValue, ...taskList]; 
    setTaskList(newTaskList);
  };

  return (
    <div>
      <TodoForm onClick={onClickAddTask} />
      <TodoList 
            taskList={taskList} 
            removeElement={removeElement}
        />
    </div>
  );
}

export default Todo;
