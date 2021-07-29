import {React, useState} from 'react'

function UserSearch(props) {
    const [input, setInput] = useState("")

    function handleSearch(e){
        e.preventDefault();
        props.findUser(input)
    }

    function handleChange(e){
        setInput(e.target.value)
    }

    function handleSort(e){
        e.preventDefault()
        props.handleSort();
    }

    return (
        <div>
            <form>
                <input onChange = {handleChange} placeholder = "Search By Name or City"/>
                <button onClick = {handleSearch}> Search! </button>
            </form>
            <button onClick = {handleSort}> Sort by City</button>
        </div>
    )
}

export default UserSearch
