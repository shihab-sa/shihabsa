import React from 'react' 
import './Bio.css'
import {SiMaildotru,SiJavascript,SiTypescript,SiNextdotjs} from 'react-icons/si'
import {DiReact} from 'react-icons/di'



const Bio=()=>{
    return(
        <div>
             {/* introduce myself  */}

             <div className='introduce__myself__container container'>
                  {/* myself wrapper  */}
                  <div className='wrapper__myself'>

                      {/* icone  */}
                      <div className='icone__bio'>
                          <SiMaildotru  className='icone__bio'/>
                      </div>

                      {/* text myself  */}
                      <div className='introducemy__self'>
                          <p>A self-introduction should include your name and occupation (or desired occupation) 
                          and key facts that will help you make an impression on the person you're speaking to.
                          </p>

                      </div>

                      {/* my current fev stacks  */}

                      <div className='my__fev__stacks'>

                        <div className='current__title'>
                         <h2>Current Fev Stacks <SiMaildotru/> </h2>
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
        </div>
    )
}

export default Bio