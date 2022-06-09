import React from "react";
import { Routes,Route } from 'react-router-dom'
import Projects from "../Projects/Projects";


const Navone=()=>{

    return(
        <div>
           <Routes>
               <Route path="/projects" element={<Projects/>}/>
           </Routes>

        </div>
    )

}


export default Navone;