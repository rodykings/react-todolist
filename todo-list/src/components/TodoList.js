import React from 'react'
import {FiCircle} from 'react-icons/fi' 
import {GoX} from 'react-icons/go'

function TodoList(props) {  
    return props.taskList.map((item) =>{   
        return ( 
            <li> 
                <FiCircle /> 
                <GoX 
                    onClick={() => props.removeElement(item.id)}
                /> 
                <span>{item.text}</span> 
            </li> 
        )
    });   
}

export default TodoList
