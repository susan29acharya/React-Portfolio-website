import React from 'react'
import Link from 'next/link'
const Home_page = () => {
  return (
    <>

    <div className='Home-page'>

          <div className='body-left'>
            <h1>Hey! it's me <span>"Susan Acharya"</span></h1>
            <p>-- Web designer and Developer --</p>
            <button><Link href= "#" className='button-link'>Hire me</Link></button>
          </div>

          <div className='body-right'>
            <img src='./images/gitimage.jpg'/>
          </div>



    </div>
    </>
  )
}

export default Home_page