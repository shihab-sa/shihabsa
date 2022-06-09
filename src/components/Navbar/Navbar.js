import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'


const Navbar=()=>{
return(
            <nav>
               <div className='nav__container container'>
              
                   {/* <a href='#' className='nav__logo'>Shihab</a> */}
                   <div className='nav__menu__list'>
                  
                       <ul className='nav__list'>


                       <Link to="/"><i class='bx bx-home'></i></Link>

                               {/* 1 
                               <li className='list__item'>
                                   <a href='#home' className='nav__link'>
                                   <i class='bx bx-home'></i>
                                   </a>
                               </li>
                               
                               {/* 2 */}
                                {/* 1  */}
                                {/* <li className='list__item'>
                                   <a href='#about' className='nav__link'>
                                   <i class='bx bx-user-voice'></i>
                                   </a>
                               </li> */}

                               {/* 3  */}
                                {/* 1  */}
                                {/* <li className='list__item'>
                                   <a href='#skill' className='nav__link'>
                                   <i class='bx bx-book'></i>
                                   </a>
                               </li> */}

                               {/* 4  */}
                                {/* 1  */}
                                {/* <li className='list__item'>
                                   <a href='#work' className='nav__link'>
                                   <i class='bx bx-briefcase'></i>
                                   </a>
                               </li> */}

                               {/* 5  */}

                              {/* <li className='list__item'>
                                   <a href='#contact' className='nav__link'>
                                   <i class='bx bxs-contact'></i>
                                   </a>
                               </li> */}
                              
                       </ul> 
                      
                   </div>
                  
               </div>

            </nav>
                
        
    )
}

export default Navbar