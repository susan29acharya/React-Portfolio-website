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
      <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
    </div>
    </>
  )
}

export default Nav