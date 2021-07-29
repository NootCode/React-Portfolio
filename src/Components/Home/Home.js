import React from 'react';
import Cards from '../Cards/Cards';
import './Home.css'

function Home() {
    return (
        <div className = "home">
            <Cards />   
            <div className = "homeP"> 
                <p> The past 8 weeks I was lucky enough to participate in the IBM Accelerate Program. This program was an eye opening experience and
                has taught me so many hard and soft skills. Above are <span className ="bolden">2 interactive, unchanged projects </span> 
                I created as my weekly labs as a measurement of my progress in Front-End Developement. I'd like to thank the 
                staff at IBM for being so welcoming and inspiring.  </p>
            </div>
        </div>
    )
}

export default Home
