import React from 'react'
import {FiCircle} from 'react-icons/fi' 
import {GoX} from 'react-icons/go'

function TodoList(props) {  
    const renderList = props.taskList.map((item) =>{   
        return ( 
            <li> 
                <FiCircle /> 
                <GoX 
                    onClick={()=> console.log(item.id)}
                /> 
                <span>{item.text}</span> 
            </li> 
        )
    });   

    return (
        <ul> 
            {renderList}
        </ul>
    )
}

export default TodoList
