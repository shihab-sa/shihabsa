import React, { useState } from 'react'
import './Baseskill.css'
import {BiLinkExternal} from 'react-icons/bi'
import {GoPrimitiveDot} from 'react-icons/go'
import {AiOutlineCaretLeft,AiFillCaretRight} from 'react-icons/ai'
import basedata from './basedata'


const Baseskill=()=>{
     const [index,setIndex] = useState(0)
     const { mainsub,para,link} = basedata[index]


     const checkNumber=(num)=>{

      if(num > mainsub.length-1){
         return 0
      }
      else if(num < 0){
         return 0
      }
      return num

     }

     const nextSkill=()=>{
        setIndex((index)=>{
           let newIndex = index+1;
           return checkNumber(newIndex)
        })
     }

     const prevSkill=()=>{
        setIndex((index)=>{
           let newIndex = index -1 
           return checkNumber(newIndex)
        })
     }
    
    return(
        <>
          <div className='base__skill container'>
             <div className='base__skill__wrapper'>
                  <div className='base__skill__info'>
                     <div className='base__title'>

                        <h2 className='base__title'>{mainsub}</h2>
                        <p className='base__paragraph'>{para}</p>
                        <div className='base__skill__link'>
                           <a href={link} target="_blank">
                               <BiLinkExternal/>
                           </a>

                        </div>
                     
                     </div>

                     {/* thats my  */}

                   

                     {/* end  */}

                  </div>

                  {/* start  */}

                  <div className='footer__info'>

          {/* three dot  */}
             <div className='three__dot'>
                  <GoPrimitiveDot className='one'/>
                 <GoPrimitiveDot className='two'/>
                 <GoPrimitiveDot className='three'/>

              </div>
            </div>

                  {/* end  */}

             </div>
          </div>


          <div className='two__button' >
             <button className='left__btn' onClick={prevSkill} >
                           <AiOutlineCaretLeft/>
             </button>
            <button className='right__btn' onClick={nextSkill}>
                           <AiFillCaretRight/>
            </button>

</div>


          


        </>
    )
}

export default Baseskill