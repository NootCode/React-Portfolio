import React , {useState, useEffect, useRef} from 'react'
import {v4 as uuid} from 'uuid'

function TodoForm(props) {
    
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
    
    const handleChange = function(e){
        setInput(e.target.value)
    }

    const handleSubmit = function(e){
        e.preventDefault();

        var today = new Date()
        var currTime = today.getHours() + ":"
        var mins = today.getMinutes()
        var seconds = today.getSeconds()
        if(mins < 10)
            currTime += 0 + "" + mins + ":"
        else
            currTime += mins + ":"
        
        if(seconds < 10)
            currTime += 0 + "" + seconds
        else
            currTime += seconds


        props.onSubmit({
             id: uuid(),
             text: input,
             time: currTime
        });
        setInput('')
    }

    return (
        <form className = "todo-form">
            {props.edit ? (
                <div>
                    <input 
                        type = "text" 
                        placeholder = "Update" 
                        value = {input} 
                        name = "text"
                        className = "todo-input edit"
                        onChange = {handleChange}
                        ref = {inputRef}
                    />
                    <button type="submit" onClick = {handleSubmit} onKeyDown ={handleSubmit}
                        className = "todo-button edit"> Update </button>
                    <hr/>
                </div>
            ):(<div> 
                    <input 
                        data-testid = "new-item-input"
                        type = "text" 
                        placeholder = "Add a Todo" 
                        value = {input} 
                        name = "text"
                        className = "todo-input"
                        onChange = {handleChange}
                        ref = {inputRef}
                    />
                    <button type="submit" data-testid = "new-item-button" onClick = {handleSubmit} onKeyDown ={handleSubmit}
                        className = "todo-button"> Add Todo </button>
                    <hr/>
                </div> 
            )}   
        </form>
    )
}

export default TodoForm
