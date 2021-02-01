import React from 'react'

function TodoList(props) {  

    const renderList = props.taskList.map((item) =>{  
        return ( 
            <li>{item.text}</li> 
        )
    });   

    return (
        <ul> 
            {renderList}
        </ul>
    )
}

export default TodoList
