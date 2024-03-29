import React from 'react'
import {BallCanvas} from './canvas'
import { technologies } from '../constants'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <h3 className={styles.sectionHeadText}>The technologies I use: </h3><br />
      {technologies.map((technology)=>{
        return <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      })}
    </div>
  )
}

export default SectionWrapper(Tech, "")
