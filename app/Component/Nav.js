import React from 'react'
import Link from 'next/link'


const Nav = () => {
  return (
    <>
        <div className='nav'>
        <h1>My <span>port</span>folio</h1>
        <ul>
        <li><Link href="/Home" className='link nav-link'>home</Link></li>
        <li><Link href="/About" className='link nav-link'>about</Link></li>
        <li><Link href="/Skills" className='link nav-link'>skills</Link></li>
        <li><Link href="/projec" className='link nav-link'>projects</Link></li>
        <li><Link href="/Contact" className='link nav-link'>contact</Link></li>

      </ul>
    </div>
    </>
  )
}

export default Nav