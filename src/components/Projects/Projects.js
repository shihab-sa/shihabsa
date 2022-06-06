import React from "react";
import {FiGithub} from 'react-icons/fi'
import {BiLinkExternal} from 'react-icons/bi'
import {BsCheckCircleFill} from 'react-icons/bs'
import {SiReact} from 'react-icons/si'
import {HiOutlineChartSquareBar} from 'react-icons/hi'
import {DiSass} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {GrNode} from 'react-icons/gr'
import './Projects.css'

const Projects=()=>{
    return(
        <div>


                   

            {/* image click navabr  */}

            <div className="custom__navbar__projects container">
                   
                  
                  <a href="#" className="javascript">
                       <DiJavascript1/>
                   </a>

                   <a href="#" className="react">
                        <SiReact/>
                   </a>

                   <a href="#" className="sass">
                        <DiSass/>
                   </a>
                 
                    <a href="#" className="node">
                    <GrNode/>
                    </a>

                 
               

                 
               

            </div>






          {/* image click navabr  */}














             {/* Projects card design start  */}
             


            <div className="card__container container">
               <div className="card__wrapper">
                   <div className="link__section">
                       

                       {/*=============== github link =============== */}

                       <a href="https://developer.mozilla.org" target="_blank">
                          <FiGithub className="github"/>
                       </a>


                       {/*=================== project link================ */}

                       <a href="https://developer.mozilla.org" target="_blank">
                            <BiLinkExternal className="project__link__live"/>
                       </a>
                        
                        {/*==================== checked  ============== */}
                       
                        <div className="checked">
                             <BsCheckCircleFill/>
                        </div>

                   </div>

                   {/*=================================== project image ======================== */}

                   <div className="image__projects">
                        <img className="image__rounded" src="https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80" alt=""/>
                   </div>

                   {/*  =============================== footer section =========================== */}

                   <div className="projects__footer">

                     
                     <HiOutlineChartSquareBar className="project__icone"/>
                     <h1 className="title__pro">To Do App</h1>

                     
                     

                   </div>

               </div>

            </div>


             {/* project cart design end  */}
        </div>
    )
}

export default Projects