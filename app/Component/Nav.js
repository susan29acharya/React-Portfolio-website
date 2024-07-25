import React from 'react'
import Link from 'next/link'
import Aboutpage from '../About/page'
import Contact_page from '../Contact/page'
import Home_page from '../Home/page'

const Nav = () => {
  return (
    <>
        <div className='nav'>
        <h1>logo</h1>
        <ul>
        <li><Link href="/Home" className='link'>home</Link></li>
        <li><Link href="/About" className='link'>about</Link></li>
        <li><Link href="/Contact" className='link'>contact</Link></li>

      </ul>
    </div>
    </>
  )
}

export default Nav