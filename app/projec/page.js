import React from 'react'
import Project from '../Component/project'

const Project_page = () => {
  return (
    <>
      <div className='project'>
        <h1>-- projects --</h1>
        <div className='float-left'>
        <Project imgs='./images/ticketproject.png'
          heading='Book My Bus'
          desc="This is my project -Book My Bus- a bus ticket booking system from which one can book deired bus ticket from online.This was my 6th sem college project."
          
           />
          </div>
          <div className='float-right'>
          <Project imgs='./images/nepal.png'
          heading='Nepal website'
          desc="This is my project -Nepal website- form which someone can learn about nepals history,famous destination and many more." 
          demo='https://nepal-website.vercel.app/'
          />
          </div>

      </div>
    </>
  )
}

export default Project_page