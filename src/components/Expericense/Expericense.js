import React from 'react' 
import {SiMaildotru,SiJavascript,SiTypescript} from 'react-icons/si'



const Expericense=()=>{
    return(
        <div>
             {/* introduce myself  */}

             <div className='introduce__myself__container'>
                  {/* myself wrapper  */}
                  <div className='wrapper__myself'>

                      {/* icone  */}
                      <div className='icone__bio'>
                          <SiMaildotru/>
                      </div>

                      {/* text myself  */}
                      <div className='introducemy__self'>
                          <p>A self-introduction should include your name and occupation (or desired occupation) and key facts that will help you make an impression on the person you're speaking to. In a few sentences, cover the most important things that others need to know about you.</p>

                      </div>

                      {/* my current fev stacks  */}

                      <div className='my__fev__stacks'>

                        <h2>Current Fev Stacks <SiMaildotru/> </h2>

                        {/* language stacks  */}

                        <div className='current__fev'>
                             <div className='language'>
                                     <SiJavascript/>
                                     <SiTypescript/>
                             </div>
                             <div className='framworks'>

                             </div>

                        </div>

                      </div>

                  </div>

             </div>
        </div>
    )
}

export default Expericense