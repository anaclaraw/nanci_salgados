// import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
const Footer = () => {
    return (
        <div className='relative bottom-0 h-40 text-orange-200 text-opacity-50 pt-3 md:pt-0 bg-red-900 w-[100%] lg:h-52 flex flex-col justify-center items-center mt-36'>
          
            <img src="/assets/img/logo_nanci.png" width={'100px'} />

            <ul className='flex gap-5 md:pt-4'>
                <li>Cardápio</li>
                <li>Inicio</li>
                <li>Sobre</li>
                <li>Redes</li>
            </ul>

            <ul className='flex flex-col md:flex-row md:gap-8 justify-center items-center md:pt-4' >
            <li className='flex items-center gap-1'><FaLocationDot/> Av. Felipo Sturba n°458</li>
            <li className='flex items-center gap-1'><MdEmail/> nanci_salgados_email@gmail.com</li>
                <li className='flex items-center gap-1'><BsFillTelephoneFill/> 1198355698</li>
            </ul>
        </div>
    )
}

export default Footer