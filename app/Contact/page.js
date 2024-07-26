import React from 'react'
import Link from 'next/link'

const Contact_page = () => {
  return (
    <>
      <div className='contact-page'>
        <h1>-- Contact --</h1>
        <div className='location'>
          <h2>-- Contact me --</h2>
          <p>Location: abcd,Jhapa</p>
          <p>Phone: 9800000000</p>
          <p>Email: susan80@gmail.com</p>
        </div>

        <div className='contact-form'>
          <div className='form'>
            <h3>Get in touch</h3>
            <p>Feel free to contact me</p>
            <form>
              <input type='text' placeholder='Enter your name' /><br />
              <input type='number' placeholder='Enter your number' /><br />
              <input type='email' placeholder='Enter your email' /><br />
              <button><Link href="#" className='link'>Send</Link></button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact_page