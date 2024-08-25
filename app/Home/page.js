"use client"
import React from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home_page = () => {
  function toasts(){
    toast.info('Work in progress sorry!😔', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
      });
  }

  return (
    <>
    <ToastContainer />
    <div className='Home-page'>

          <div className='body-left'>
            <h1>Hey! it's me <span>"Susan</span>Acharya"</h1>
            <p>-- Web designer and Developer --</p>
            <button onMouseEnter={toasts} className='button-link'>Hire me</button>
          </div>

          <div className='body-right'>
            <img src='./images/gitimage.jpg'/>
          </div>



    </div>
    </>
  )
}

export default Home_page