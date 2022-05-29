import React from 'react'
import './Myskill.css'


const Myskill=()=>{
    return(
        <div>
           <div className="container__myskill container">
                 <div className="components__my container">
    {/* button start  */}
                <div className='myskill__button'>
                   <div className="btn btn__primary"><p>Front-End</p></div>
                   <div className="btn btn__secondary"><p>Back-End</p></div>
                   <div className="btn btn__secondary"><p>Tools</p></div>
                </div>

    {/* button end  */}
    
   {/* clock section  */}
    
     <div className="clock">
        <div className="hand hours"></div>
           <div className="hand minutes"></div>
             <div className="hand seconds"></div>
                <div className="point"></div>
                   <div className="marker">
                     <span className="marker__1"></span>
                  <span className="marker__2"></span>
              <span className="marker__3"></span>
           <span className="marker__4"></span>
         </div>
     </div>

    {/* clock sec end  */}

    
    
    
    {/* tap start ============================== */}
    <div className="segmented-control">
      
      <input type="radio" name="radio2" value="3" id="tab-1" checked/>
      <label for="tab-1" className= "segmented-control__1">
        <p>Tab 1</p></label>
      
      <input type="radio" name="radio2" value="4" id="tab-2" />
      <label for="tab-2" className= "segmented-control__2">
        <p>Tab 2</p></label>
      
      <input type="radio" name="radio2" value="5" id="tab-3" />
      <label for="tab-3" class= "segmented-control__3">
        <p>Tab 3</p></label>
      
      <div className="segmented-control__color"></div>
    </div>

    {/* tab end ===================================== */}
    
    
 
    </div>
  </div>

        </div>
    )
}

export default Myskill