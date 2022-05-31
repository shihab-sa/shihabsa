import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skill from './components/Skill/Skill'
import Expericense from './components/Expericense/Expericense'





const LandingPage=()=>{
    return(
        <div>
            <Navbar/>
            <Home/>
            <Skill/>
            <Projects/>   
            <Expericense/>  
        </div>
    )
}

export default LandingPage