import React from 'react'
import Link from 'next/link'
import Aboutpage from '../About/page'
import Home_page from '../Home/page'
import Skills_page from '../Skills/page'
import Contact_page from '../Contact/page'
const Copyright = () => {
  return (
    <>
    <div className='copyright'>
        
        <div className='services'>
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Python Software</li>

          </ul>
        </div>

        <div className='useful-links'>
          <h3>Useful Links</h3>
        <ul>
            <li><Link href="/Home" className='links footer-link'>Home</Link></li>
            <li><Link href="/About" className='links footer-link'>About</Link></li>
            <li><Link href="/Skills" className='links footer-link'>Skills</Link></li>
            <li><Link href="/Contact" className='links footer-link'>Contact</Link></li>

          </ul>
        </div>

        <div className='icons'>
          <h3>Social Media</h3>
        </div>
    </div>
    </>
  )
}

export default Copyright