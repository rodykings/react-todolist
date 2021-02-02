import React, { useState } from "react";
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

  const crossElement = (id) => {
    let element = taskList.find(element => { return element.id === id}); 
    let newTaskList = taskList.filter(element => {return element.id !== id});
    element.isDone = !element.isDone; 
    console.log(element.isDone)
    newTaskList = [element, ...newTaskList];  
    setTaskList(newTaskList); 
    console.log(taskList)
  }

  const addTask = (inputValue) => {
    const newTaskList = [inputValue, ...taskList];
    setTaskList(newTaskList);
  };

  return (
    <div>
      <TodoForm onClick={addTask} />
        <TodoList 
            taskList={taskList} 
            removeElement={removeElement} 
            crossElement={crossElement} 
            className="TodoList"
        />
    </div>
  );
}

export default Todo;
