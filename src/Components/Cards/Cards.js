import React from 'react'
import {Link} from 'react-router-dom'
import './Cards.css'
import gif1 from './Gifs/TodoList.gif'
import gif2 from './Gifs/UserList.gif'
import { Grid, Card, CardContent } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles({
    gridContainer:{
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "20px",
        paddingBottom: "20px",

    },

    todoListCard:{
        background: "linear-gradient(315deg, #28313b 0%,  #485461 80%)",
        borderRadius: "25px",
    },
    

    userListCard:{
        background: "linear-gradient(315deg, #28313b 0%,  #485461 80%)",
        borderRadius: "25px",
    }
})

function Cards() {
    const classes = useStyles();
    return (
    <Grid container spacing = {4} className = {classes.gridContainer} justify = "center">
        <Grid item xs = {12} md = {6}>
            <Link to = "/todo-list"> 
                <Card className = {classes.todoListCard} zDepth = {5}>
                    <CardContent >
                        <div className = "cardText">
                            <img src = {gif1} alt = "loading" />
                            <p>
                                <div> TodoList App<br/> </div>
                                Feature Requirements<br/>
                                <li>Take in and display to do list items </li>
                                <li>Mark items as complete</li>
                                <li>Provide the time of item addition </li>
                                <li>Deny duplicate items</li>
                                <li>Allow users to update list items</li>
                                <li>Allow users to delete list items</li>
                                
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
        <br/>
        <Grid item xs = {12} md = {6}>
            <Link to = "/user-list"> 
                <Card className = {classes.userListCard}>
                    <CardContent>
                        <div className = "cardText">
                        <img src = {gif2} alt = "loading" />
                        <p>
                            <div> User List App<br/> </div>
                            Feature Requirements<br/>
                            <li>Use of Asynchronous Axios calls to pull data</li>
                            <li>Display User information </li>
                            <li>Remove entries from the list</li>
                            <li>Search for users by name or city</li>
                            <li>Sort users by city</li>
                            
                        </p>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
      </Grid>
    )
}

export default Cards
