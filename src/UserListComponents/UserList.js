import {React, useState, useEffect} from 'react'
import User from './User';
import UserFound from './UserFound';
import UserSearch from './UserSearch';
import './UserList.css'

function UserList() {

    const [userList, setUserList] = useState([]);
    const [found, setFound] = useState(false);
    const [foundUser, setFoundUser] = useState(-1);

    const axios = require("axios");

    useEffect(()=> {
        getUsers()
    }, [])

    function getUsers(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
            setUserList(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    function findUser(text){
        var array = [...userList]
        for(let i = 0; i < array.length; i++){
            if(array[i].address.city === text || array[i].name === text){
                setFound(true)
                setFoundUser(i)
            }
        }
    }

    function handleReturn(){
        setFound(false)
    }

    function sortByCity(){
        var array = [...userList];
        array.sort( function( a, b ) {
            return a.address.city < b.address.city ? -1 : a.address.city > b.address.city ? 1 : 0
        });
        setUserList(array)
    }

    function removeUser(id){
        var check;
        var array = [...userList]
        for(let i = 0; i < array.length; i++){
            if(array[i].id === id){
                check = array[i];
            }
        }
        var index = array.indexOf(check)
        if(index !== -1){
            array.splice(index,1);
            setUserList(array)
        }
    }

    return (
        <div className = 'userList'>
            <UserSearch findUser = {findUser} handleSort = {sortByCity}/>
            <hr/>

            {!found && 
                <div> 
                    <User userArray = {userList} removeUser = {removeUser} />
                    <button onClick = {getUsers}> Reset User List</button>
                </div>
                
            }
            {found && <UserFound user = {userList[foundUser]} handleReturn = {handleReturn}/> }
        </div>
    )
}

export default UserList
