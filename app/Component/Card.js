import React from 'react'
const Card = (props) => {
  return (
    <>
        <div className='box1'>
          <div className='img'>
            <img src={props.image} alt='invalid image'/>
          </div>

          <div className='info-desc'>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
          </div>
        </div>

    </>
  )
}

export default Card