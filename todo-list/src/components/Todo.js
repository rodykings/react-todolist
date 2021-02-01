import React, { useState } from "react";
import { FiToggleLeft } from "react-icons/fi";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [taskList, setTaskList] = useState([]);

  const removeElement = (id) => { 
      const newTaskList = taskList.filter(element => {
        return element.id !== id;
      });  
      setTaskList(newTaskList);
  };

  const onClickAddTask = (inputValue) => {
    const newTaskList = [inputValue, ...taskList];
    setTaskList(newTaskList);
  };

  return (
    <div>
      <TodoForm onClick={onClickAddTask} />
      <ul>
        <TodoList 
            taskList={taskList} 
            removeElement={removeElement} 

        />
      </ul>
    </div>
  );
}

export default Todo;
