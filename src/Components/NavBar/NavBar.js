import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import face from './linkedinCover.jpg'
import styled from "styled-components"


const NavUnlisted = styled.ul`
    text-decoration: none;
    `;

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    fontSize: "30px",
    textAlign: "center",
    border: "3px solid white",
    padding: "10px",
}

function NavBar() {
    return (
        <NavUnlisted className = 'navbar'>
            <div className = "nameFace">
                <img src = {face} alt = "loading"/>
                <h1 className = "name"> Andre Nalbandian </h1>
            </div>
            <div className = "links">
                    <Link to = '/' style = {linkStyle}>Home</Link>
                    <Link to = '/about' style = {linkStyle}>About Me</Link>
                    <Link to = '/contact' style = {linkStyle}>Contact Me</Link>
            </div>
        </NavUnlisted>
    )
}

export default NavBar
