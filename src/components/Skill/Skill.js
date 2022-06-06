import React, { useState, useEffect } from 'react'
import './Skill.css'
import {RiCheckboxCircleFill } from 'react-icons/ri'



function App() {
  const [loading, setLoading] = useState(true)
  const [skill, setSkill] = useState([])
  const [value, setValue] = useState(0)


  

  const fetchSkill = async () => {
    const reponse = await fetch("public.json")
    const newSkill = await reponse.json()
    setSkill(newSkill)
    setLoading(false)
  }


  useEffect(() => {
    fetchSkill()
  }, [])
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
        
  const {allskill} = skill[value]

  return (
    <section className="section">
      
      <div className="skills-center">

        {/* btn container */}
        <div className="btn-container">
          {skill.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`skill-btn ${index === value && 'active-btn'}`}
              >
               {item.category}
               
              </button>
            )
          })}
        </div>

        {/* skill info */}
        <article className="skill-info grid">
          
         {
             allskill.map((newSkilldata,index)=>{
                 return(
                     <div key={index} className='skill__section'>
                      {/* start  */}
                    <div className="card__containers container">
                       <div className="card__wrappers">
                           
                           <h3 className='skill__title'><RiCheckboxCircleFill/>{newSkilldata.skill1}</h3>
                           <h3 className='skill__title'><RiCheckboxCircleFill/>{newSkilldata.skill2}</h3>
                           <h3 className='skill__title'><RiCheckboxCircleFill/>{newSkilldata.skill3}</h3>
                           <h3 className='skill__title'><RiCheckboxCircleFill/>{newSkilldata.skill4}</h3>
                           <h3 className='skill__title'><RiCheckboxCircleFill/>{newSkilldata.skill5}</h3>
                           <h3 className='skill__title'><RiCheckboxCircleFill/>{newSkilldata.skill6}</h3>
                          

                       </div>
                   </div>
                      {/* end  */}
                      </div>
                 )
             })
         }
    
        </article>
      </div>
      
    </section>
  )
}

export default App