import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = function(todo){
        //check for dups here
        if(!todo.text || /^\s*$/.test(todo.text))
            return

        if(handleValidation(todo.text))
            alert('Duplicates not Allowed') 
        else{
            const newTodos = [...todos, todo]
            setTodos(newTodos)
        }
    }

    const handleValidation = function(text){
        var check = false;
        var array = [...todos]
        for(let i = 0 ; i < array.length; i++){
            if(array[i].text.trim(" ") === text.trim(" "))
                check = true
        }
        return check
    }

    const updateTodo = function(todoId, newValue){
        if(!newValue.text || /^\s*$/.test(newValue.text))
            return 
        if(handleValidation(newValue.text))
            alert('Duplicates not Allowed') 
        else{
            setTodos(prev => prev.map(item => 
                item.id === todoId ? newValue : item 
            ))}
    }

    const removeTodo = function(id){
        var check;
        var array = [...todos]
       for(let i = 0; i < array.length; i++){
           if(array[i].id === id)
            check = array[i]
       }
       var index = array.indexOf(check)
       if(index !== -1){
           array.splice(index,1);
           setTodos(array)
       }
    }

    const displayTime = function(id){
        var check;
        var array = [...todos]
        for(let i = 0; i < array.length; i++){
           if(array[i].id === id){
            check = array[i]
           }
       } 
       return ( check.time )
    }

    const updateTime = function(todo){
        var today = new Date()
        var currTime = today.getHours() + ":"
        if (today.getMinutes < 10)
            currTime += "0" + today.getMinutes
        else
            currTime += today.getMinutes
        
        if (today.getSeconds < 10)
            currTime += "0" + today.getSeconds
        else
            currTime += today.getSeconds 

        todo.time = currTime
    }


    const completeTodo = function(id){
        let updateTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete =! todo.isComplete
            }
            return todo
        })
        setTodos(updateTodos)
    }

    const clear = function(){
        setTodos([])
    }

    return (
        <div>
            <h1> Todo List</h1>
            <TodoForm onSubmit = {addTodo}/>
            <Todo 
                todos = {todos}
                completeTodo = {completeTodo}
                removeTodo = {removeTodo}
                updateTodo = {updateTodo}
                displayTime = {displayTime}
                updateTime = {updateTime}
                
            />
            <button className = "clear-button" onClick= {clear}> Clear </button>
        </div>
    )
}

export default TodoList
