import React, {useState} from 'react'

function TodoForm(props) {    
    const [input, setInput] = useState('');  

    const updateInput = e =>{ 
        setInput(e.target.value); 
    } 

    const onClick = e =>{
        e.preventDefault();     
        props.onClick(input); 
        setInput('');
    } 

    return ( 
        <form> 
            <input 
                className="form-input"  
                value={input}   
                placeholder="What do you wanna do?" 
                onChange={updateInput}
            />  
            <button onClick={onClick}>Add task</button>
        </form>
            
    )
}

export default TodoForm
