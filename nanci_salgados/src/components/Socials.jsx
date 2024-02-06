import React from 'react'
import TitleModel from './Title'
import { FaInstagram,FaWhatsapp, FaFacebook } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='mt-32 lg:mt-44'>
        <TitleModel title="NOSSAS REDES" subtitle="CONTATO"/>
        <section role='redes-sociais' className='bg-gray-200 w-full mt-6 flex  justify-around h-full items-center' >
            <img src='/assets/img/post.png' className='w-[30vw] h-[60vw] -mt-4 -mb-4 m-auto rounded-3xl shadow-lg shadow-gray-400' ></img>
            
            <div className='w-1/2 flex flex-col items-center lg:gap-8 gap-3 h-full'>
                <img src='/assets/img/stars.png' className='w-1/2 md:mb-5'/>
                <div className='bg-gray-300 w-4/5 md:w-2/3 md:p-3 rounded-3xl pr-1 flex items-center justify-evenly md:text-3xl '>  <FaInstagram className='text-white md:text-6xl text-xl p-1 md:p-2 bg-pink-600 -mt-8 -mb-8 rounded-full'/> <p>@nanci_salgados</p> </div>
                <div className='bg-gray-300 w-4/5 md:w-2/3 md:p-3 rounded-3xl pr-1 flex items-center justify-evenly md:text-3xl '>  <FaWhatsapp  className='text-white md:text-6xl text-xl p-1 md:p-2 bg-green-600 -mt-8 -mb-8 rounded-full'/> <p>(11)99999-9999</p> </div>
                <div className='bg-gray-300 w-4/5 md:w-2/3 md:p-3 rounded-3xl pr-1 flex items-center justify-evenly md:text-3xl '>  <FaFacebook className='text-white md:text-6xl text-xl p-1 md:p-2 bg-blue-600 -mt-8 -mb-8 rounded-full'/> <p>@nanci_salgados</p> </div>
            </div>
            
        </section>
    </div>
  )
}

export default Socials