import React from 'react'
import Card from '../Component/Card'

const Skills_page = () => {
  return (
    <>
    <div className='skills-page'>
     <h1>-- Skills --</h1>
      <div className='container-flex-box'>
        <Card image='./images/web.png'
              title='Frontend'
              desc='Creating visually appealing websites with HTML, CSS, and JavaScript for seamless user experiences.'
        />

          <Card image='./images/nextjs.png'
              title='Next.js'
              desc=' Building fast, scalable web apps with server-side rendering for improved performance and user experience.'
        />

        <Card image='./images/MySQL.png'
              title='MySQL'
              desc='Managing databases efficiently to store and retrieve data, ensuring reliability and accessibility.'
        />


      </div>
    </div>
    </>
  )
}

export default Skills_page