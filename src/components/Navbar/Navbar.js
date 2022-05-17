import React from 'react'
import './navbar.css'

const Navbar=()=>{
    return(
     
            <nav>
               <div className="nav__container container">
            
               <div className="nav__menu__list">
                <ul>
                    <li><a href="#">Projects</a></li>
                </ul>
                <ul>
                    <li><a href="#">Skill</a></li>
                </ul> 
                
               </div>
            
            <a href="#">
                <i className="ri-moon-line"></i>
            </a>
        
        </div>
    </nav>
                
        
    )
}

export default Navbar