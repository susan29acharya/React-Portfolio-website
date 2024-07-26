import React from 'react'

const Card = () => {
  return (
    <>
        <div className='box1'>
          <div className='img'>
            <img src='./images/web.png' alt='invalid image'/>
          </div>

          <div className='info-desc'>
                <h3>Web Development</h3>
                <p>I can built desired website as per your need</p>
          </div>
        </div>


        <div className='box1'>
          <div className='img'>
            <img src='./images/app.jpg' alt='invalid image'/>
          </div>

          <div className='info-desc'>
                <h3>App Development</h3>
                <p>I can built desired App as per your need</p>
          </div>
        </div>

        <div className='box1'>
          <div className='img'>
            <img src='./images/python.jpg' alt='invalid image'/>
          </div>

          <div className='info-desc'>
                <h3>Python Developer</h3>
                <p>I can develop desired python software as per your need</p>
          </div>
        </div>
    </>
  )
}

export default Card