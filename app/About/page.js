import React from 'react'
import Link from 'next/link'
const Aboutpage = () => {
  return (
    <>
      <div className='about-page'>

        <div className='container'>

          <h1>-- About me --</h1>

          <div className='flex-box'>
            <div className='left-img-section'>
              <img src='./images/about.jpg' />
            </div>

            <div className='right-info-section'>
              <p>
                As a BCA student specializing in web designing and development, 
                I excel in creating user-friendly, visually appealing websites using HTML, 
                CSS, JavaScript, and various frameworks. I am passionate about leveraging 
                my technical skills to build innovative web solutions and enhance my 
                expertise.
                </p>
            
            <button><Link href="#" className='link'>CV</Link></button>
            
            </div>

          </div>



        </div>

      </div>
    </>
  )
}

export default Aboutpage