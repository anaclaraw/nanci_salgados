// import React from 'react'

const Reception = () => {
  return (
    <>
      <div>
        <div className="bg-[url('/assets/img/form_red.png')] mt-14  bg-cover bg-center lg:h-[80vh] flex justify-around items-center ">
          <div className="w-[60vw] md:w-1/3 ml-2">
            <h1 className='text-[12px] lg:text-5xl text-black pt-2 md:text-4xl font-jet tracking-tight indent-3'>O Porto Seguro dos seus salgadinhos.</h1>
            <p className='text-[8px] lg:text-[18px] text-black pt-2 pl-1  tracking-tighter indent-2'>  Seja você já um cliente fiel ou que está visitando pela primeira vez, é um prazer recebê-lo em nosso cantinho de delicias. Aqui na Nanci Salgados somos comprometidos em proporcionar uma experiência deliciosa e acolhedora.</p>
          </div>
          <div className="bg-white w-1/2 rounded-full min-h-32  flex justify-center items-center">
            <img src="/assets/img/logo_nanci.png" className=' p-2' />
          </div>
          {/* <img src="/assets/img/form_red.png" className='w-full mt-10'/> */}
        </div>
        {/* <div className='w-20 h-20 bg-white '></div> */}
      </div>
    </>
  )
}
 
export default Reception