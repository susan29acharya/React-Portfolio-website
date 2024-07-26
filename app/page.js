import React from 'react'
import Nav from './Component/Nav'
import Home_page from './Home/page'
import Aboutpage from './About/page'
import Skills_page from './Skills/page'
import Contact_page from './Contact/page'
const page = () => {
  return (
    <>
    <Nav />
    <Home_page />
    <Aboutpage />
    <Skills_page />
    <Contact_page/>
    </>
  )
}

export default page