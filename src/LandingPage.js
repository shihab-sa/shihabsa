import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skill from './components/Skill/Skill'
const LandingPage=()=>{
    return(
        <div>
            <Navbar/>
            <Home/>
            <Skill/>
            <Projects/>
           
          
         
           
        </div>
    )
}

export default LandingPage