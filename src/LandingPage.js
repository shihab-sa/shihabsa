import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import './landingPage.css'


const LandingPage=()=>{
    return(
        <div>
            <Navbar/>
            <Home/>
           <div className='projects__sections'>
             <Projects/>
             
           </div>
        </div>
    )
}

export default LandingPage