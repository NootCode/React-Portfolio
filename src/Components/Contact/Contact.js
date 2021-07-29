import React from 'react'
import "./Contact.css"
import {Button} from '@material-ui/core'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'


const StyledButton = withStyles({
    root: {
        background: "lightblue",
        height: "100px",
        width: "100%",
        fontSize: "40px",
        marginBottom: "50px",
    },
    label:{
        textTransform: "none"

    }
})(Button);

function Contact() {
    return (
        <div className = 'contactPage'>
            <h2> Feel free to contact me for any Questions or Inquiries</h2>
            <h3>andrenalbandian@gmail.com</h3>
            <div className = 'contactLinks'>
                <StyledButton
                    target = "_blank" 
                    href="https://linkedin.com/in/andre-nalbandian">
                LinkedIn
                </StyledButton>
                <StyledButton
                    target = "_blank" 
                    href="https://github.com/NootCode">
                GitHub
                </StyledButton>
            </div>
        </div>
    )
}

export default Contact
