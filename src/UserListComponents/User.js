import React from 'react'

function User({userArray, removeUser }) {


    return userArray.map((user) => (
        <div key = {user.id}> 
            <h5>Name: {user.name} </h5>
            <h5>Email: {user.email} </h5>
            <h5>Phone #: {user.phone}</h5>
            <h5>City: {user.address.city}</h5>
            <button onClick = {()=> {removeUser(user.id)}}> Delete User</button>
            <hr/>
        </div>
    ))
    }

export default User
