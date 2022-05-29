import React from 'react'
import Home from './components/Home/Home'
import Myskill from './components/Myskill/Myskill'
import Navbar from './components/Navbar/Navbar'
import Skill from './components/Skill/Skill'
const LandingPage=()=>{
    return(
        <div>
            <Navbar/>
            <Home/>
            <Skill/>
            <Myskill/>
          
         
           
        </div>
    )
}

export default LandingPage