'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About')
    
  return (
    <motion.section
      ref={ref}
      id="about"
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial= {{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}      

    >
      <SectionHeading>About me</SectionHeading>
    
      <p className='mb-3'>
      I am an accomplished professional seeking to launch my career in the dynamic field of cloud computing, 
      aspiring to contribute my skills to a forward-thinking organization that provides avenues for career advancement. 
      Drawing upon my knowledge and certifications from Microsoft and Amazon, 
      I am well-versed in enhancing software processes, serverless applications, framework design, and digital solutions.
      </p>
      <p>
      My proficiency extends to key areas such as time management, organization, prioritization, and cross-functional collaboration.
      These skills have been honed through years of experience and are essential for navigating complex software development projects efficiently. 

      As a U.S. Army Veteran, I bring a disciplined and strategic approach to problem-solving, 
      allowing me to define clear technical objectives, unite diverse teams, and successfully achieve predetermined goals.
      </p>
     <p>
      <br />Beyond my technical skills, I am multilingual, fluent in English and Filipino as native languages, 
      and possess elementary proficiency in German. This linguistic versatility enhances my ability to 
      communicate effectively with diverse teams and stakeholders, fostering a collaborative and inclusive work environment. 
      Eager to contribute my skills and dedication to the success of innovative projects, I am ready to embark on a new chapter in my professional journey 
      within the cloud computing industry.

      </p>
    </motion.section>
  )
}
