import React from 'react'
import {FiCircle} from 'react-icons/fi' 
import {GoX} from 'react-icons/go'
import ListGroup from 'react-bootstrap/ListGroup'; 

function TodoList(props) {  
    return props.taskList.map((item) =>{   
        return ( 
            <li className="taskElement"> 
                <FiCircle 
                    onClick={() => props.crossElement(item.id)} 
                    className="Ficircle-task"
                />  
                <GoX  
                    onClick={() => props.removeElement(item.id)}  
                    className="GoX-task"
                />  
                {item.text}
            </li> 
        )
    });   
}

export default TodoList
