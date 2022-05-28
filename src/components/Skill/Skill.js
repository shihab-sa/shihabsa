import React, { useState, useEffect } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import './Skill.css'



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
        
  const {level,allskill} = skill[value]

  return (
    <section className="section">
      <div className="title">
        <h2>Skills</h2>
       
      </div>
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
        <article className="skill-info">
          
         {
             allskill.map((newskilldata,index)=>{
                 return(
                     <div key={index} className='skill__section'>

                      
                      <div>
                      <p className='new__skill'><AiOutlineCheckCircle/>{newskilldata.skill1}</p>
                      <span className='kills__level'>{level}</span>
                      </div>
                     <div>
                     <p className='new__skill'><AiOutlineCheckCircle/>{newskilldata.skill2}</p>
                     <span>{level}</span>
                     </div>
                     <div>
                     <p className='new__skill'><AiOutlineCheckCircle/>{newskilldata.skill3}</p>
                     <span>{level}</span>
                     </div>
                     <div>
                     <p className='new__skill'><AiOutlineCheckCircle/>{newskilldata.skill4}</p>
                     <span>{level}</span>
                     </div>
                     <div>
                     <p className='new__skill'><AiOutlineCheckCircle/>{newskilldata.skill5}</p>
                     <span>{level}</span>
                     </div>
                     
                      

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