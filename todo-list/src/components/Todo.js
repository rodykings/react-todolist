import React, { useState, useEffect} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";  

function Todo() {
  const [taskList, setTaskList] = useState([]);


  useEffect(() => {
      getLocalTodos();
  }, [])

  useEffect(() => {
    saveLocalTodos();
  }, [taskList])


  const saveLocalTodos = () =>{
    localStorage.setItem('todos', JSON.stringify(taskList));
  }

 const getLocalTodos = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTaskList(todoLocal);
    }
  }

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
    newTaskList = [element, ...newTaskList];  
    setTaskList(newTaskList); 
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
