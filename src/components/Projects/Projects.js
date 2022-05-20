import React, { useState } from 'react'
import projectsData from './projectsData'
import TailwindP from './TailwindP'


const Projects=()=>{

    const [pdata,psetData] = useState(projectsData)
    return(
        <>
        {
            pdata.map((newData)=>{
                return <TailwindP key={newData} {...newData}   />

            })
        }

        </>
    )
}

export default Projects