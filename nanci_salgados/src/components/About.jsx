// import React from 'react'
import TitleModel from './Title'
const About = () => {
    return (
        <div className='flex flex-col 2xl:flex-row 2xl:m-auto 2xl:w-max gap-3 mt-20'>
            <div className='bg-orange-200 rounded-xl  justify-around flex mt-14 border-t-8 border-orange-100 lg:max-w-[60vw] m-auto 2xl:w-[50vw] '>
                <div className='w-1/2 p-3 flex flex-col items-center'>

                    <img src="/assets/img/salgados1.png" className='-mt-8 rounded-xl md:max-w-64 shadow-photo' />
                    <img src="/assets/img/salgados2.png" className='-mb-8 -mt-8 ml-6 md:ml-28 rounded-xl md:max-w-64 shadow-photo' />
                </div>
                <div className='ml-6 w-1/2 flex flex-col items-center justify-center p-2  md:p-6'>
                    <h1 className='-ml-6 font-bold sm:text-2xl font-jet text-xs indent-4' >Um pouco da nossa história</h1>
                    <div className='h-[1px] text-black bg-black w-[80%] m-1'></div>
                    <h2 className='font-bold text-[9px] sm:text-xl font-mono'>Prazer, sou a Nanci!</h2>
                    <p className='text-[7px] sm:text-xl indent-2'>Electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                </div>
            </div>
            <div className='2xl:m-auto mt-10'>
                <TitleModel subtitle={"Produtos"} title={"NÓS OFERECEMOS"} />
                <div className='flex m-0 p-0 max-w-full '>
                    <Produtos img={"assets/img/frig.png"} subtitle={"Salgados fritos"} />
                    <Produtos img={"assets/img/forno.png"} subtitle={"Salgados assados"} />
                    <Produtos img={"assets/img/coxinhas.png"} subtitle={"Carinho e qualidade"} />

                    {/* <div className='w-1/3 p-5 flex flex-col justify-center items-center'>
                <img className='' src='assets/img/forno.png'/>
                <h4 className='text-xs font-semibold w-min text-center'>Salgados assados</h4>
                </div>
                <div className='w-1/3 p-5 flex flex-col justify-center items-center'>
                <img className='' src='assets/img/coxinhas.png'/>
                <h4 className='text-xs font-semibold w-min text-center'>Carinho e qualidade </h4>
            </div> */}
                </div>
            </div>
        </div>
    )
}

function Produtos({ img, subtitle }) {
    return (
        <div className='m-0 w-[33%] md:text-9xl p-5 flex flex-col justify-center items-center'>
            <img className='md:max-w-40' src={img} />
            <p className='font-semibold w-min text-center'>{subtitle}</p>
        </div>)
}
export default About