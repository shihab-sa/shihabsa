import React, { useState } from 'react' 
import './Bio.css'
import {SiMaildotru,SiJavascript,SiTypescript,SiNextdotjs} from 'react-icons/si'
import {VscDebugBreakpointLogUnverified} from 'react-icons/vsc'
import {DiReact} from 'react-icons/di'
import {GiHamburgerMenu} from 'react-icons/gi'
import BioModol from './BioModol'




const Bio=()=>{

    const [openModol,setModol] =  useState(false)
   
   return(
        <div>
             {/* introduce myself  */}

             
             <div className='introduce__myself__container container'>
                  {/* myself wrapper  */}
                  <div className='wrapper__myself'>

                      {/* icone  */}
                      <div className='icone__card'>
                          <SiMaildotru/>
                          {/* <GiHamburgerMenu className='' onClick={handleClick}/> */}

                        <div className='hamburger'>
                        <button onClick={()=>setModol(true)}>
                             <GiHamburgerMenu/>
                        </button>
                        </div>
                      </div>

                      {/* text myself  */}
                      <div className='introducemy__self'>
                          <h4>A self-introduction I'm a Front-End Dev<SiMaildotru/>.<br/>
                          Especially at<VscDebugBreakpointLogUnverified/><sup className='pro'>Pro</sup> React Js
                          <sup className='pro'>Pro</sup> Google Seaching...
                           & too much loveing JavaScript's Stack <br/>
                         
                          </h4>

                      </div>

                      {/* my current fev stacks  */}

                      <div className='my__fev__stacks'>

                        <div className='current__title'>
                         <h2>Current Fev St<SiMaildotru/>ck </h2>
                        </div>

                        {/* language stacks  */}

                        <div className='current__fev'>
                             <div className='language'>
                                     <SiJavascript/>
                                     <SiTypescript/>
                             </div>
                             <div className='framworks'>
                                  <SiNextdotjs/>
                                  <DiReact/>
                             </div>

                        </div>

                      </div>

                  </div>

             </div>

            <BioModol open={openModol} onClose={()=>setModol(false)}/>

             {/* nav side bar end  */}
        </div>
    )
}

export default Bio