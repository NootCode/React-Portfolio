import React from 'react'

function UserFound({user, handleReturn}) {

    return (
        <div key = {user.id}> 
            <h5>Name: {user.name} </h5>
            <h5>Email: {user.email} </h5>
            <h5>Phone #: {user.phone}</h5>
            <h5>City: {user.address.city}</h5>
            <hr/>
            <button onClick = {handleReturn}> Return </button>
        </div>
    )
}

export default UserFound
