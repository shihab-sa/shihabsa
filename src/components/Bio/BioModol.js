import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {GoNote} from 'react-icons/go'
import {SiMaildotru} from 'react-icons/si'
import './BioModol.css'
import {MdClose} from 'react-icons/md'




const BioModol=({open,onClose})=>{
    if(!open){
        return null
    }
    return(
        
        <div className='nav__side__bar__activeone container'>
         <div className='nav__side__wrapper'>
              <div className='top__sec'>
              <h3 className='my__last__projects__title'>My Last Projects<SiMaildotru className='my__last__projects__icone'/></h3>
                <MdClose onClick={onClose} className='icon__navbar'/>
              </div>
              
              {/* last project section  */}
              <div className='last__project__section'> 
                   <h3>To do App</h3>
                   <a href="http://example.com" >
                       <AiFillGithub/>
                   </a>
                   <a href="http://example.com" >
                      <HiOutlineExternalLink/>
                   </a>

              </div>

              <h4 className='using__stacks__tech'>Stack:-</h4>
                   <div className='technology'>
                       <span className='technology__name'>#HTML</span>
                       <span className='technology__name'>#CSS</span>
                       <span className='technology__name'>#SASS</span>
                       <span className='technology__name'>#React Js</span>

              </div>

         </div>
         </div>

     

    )
}

export default BioModol