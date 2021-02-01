import React, {useState} from 'react'

function TodoForm(props) {    
    const [input, setInput] = useState('');  
    
    const onChangeInput= e =>{  
        setInput(e.target.value); 
    }   

    const onClick = e =>{ 
        e.preventDefault();      
        const randomNumber = Math.round(Math.random*10000)
        props.onClick({id: randomNumber, text: input, isDone: false}); 
        setInput('');
    } 

    return ( 
        <form> 
            <input 
                className="form-input"  
                value={input}   
                placeholder="What do you wanna do?" 
                onChange={onChangeInput}
            />  
            <button onClick={onClick}>Add task</button>
        </form>
            
    )
}

export default TodoForm
