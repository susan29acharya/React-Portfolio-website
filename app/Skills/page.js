import React from 'react'
import Card from '../Component/Card'

const Skills_page = () => {
  return (
    <>
    <div className='skills-page'>
     <h1>-- Skills --</h1>
      <div className='container-flex-box'>
        <Card image='./images/web.png'
              title='Web Development'
              desc='I can built desired website as per your need'
        />

          <Card image='./images/app.jpg'
              title='App Development'
              desc='I can built desired App as per your need'
        />

        <Card image='./images/python.jpg'
              title='Python Software'
              desc='I can develop desired python software for your company'
        />

      </div>
    </div>
    </>
  )
}

export default Skills_page