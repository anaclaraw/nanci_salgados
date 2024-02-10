import { salgados } from "../data/Salgados";


const Cardapio = () => {
  return (
    <div id="cardapio">
      <div className='bg-red-800 w-full p-4 mt-32 '>
        <div className='bg-yellow-600 -mt-9 m-auto flex flex-col justify-center items-center'>
          <h1 className="text-2xl text-center font-bold text-white font-jet bg-red-800 p-3 -mt-4 px-10">Cardápio</h1>
        <p>*Faça seu pedido com antecedencia.</p>
         <Prices/>
         <div className='grid  grid-cols-2 md:grid-cols-3 pt-6'>
          <Card salgados={salgados}/>
          
         
          
         </div>
          <p>*Faça seu pedido com antecedencia.</p>

        </div>
      </div>
    </div>
  )
}
function Card({salgados}) {
  console.log(salgados);
  return(
  salgados.map((salgado)=>(
    <div  key={salgado.id} className='bg-white opacity-90 hover:opacity-85 hover:scale-[1.02]  transition-all  m-3 md:m-8 rounded-t-full rounded-b-[5000px] shadow-sm pb-2 flex flex-col max-w-[30vw] md:max-w-[20vw] items-center justify-center '>
    <img  src={salgado.img} className='w-full rounded-full shadow-lg ' alt="imagem_salgado" width="100%" />
    <p className='font-semibold font-jet for md:text-2xl pt-1'>{salgado.title}</p>
    <p className='opacity-75 text-[10px] md:text-xl px-2'>{salgado.sabores}</p>   
    </div>
    
  )
   
  )
  )
}
function Prices(){
  return(
    <div className='bg-white opacity-95 justify-center rounded-3xl shadow-md flex flex-col items-center w-[90%]  m-auto mt-12 md:mt-20 md:w-full md:rounded-none'>
      <div className='grid grid-cols-3 gap-4 md:gap-10 -mt-9'>
        <div className='bg-black    font-jet  text-white rounded-full w-min p-1  md:p-8 flex items-center justify-center flex-col md:text-2xl hover:scale-105 transition-all '>30<p > salgados</p><h4 className='text-yellow-500 md:text-2xl font-bold'>R$50</h4> </div>
        <div className='bg-red-700  font-jet  text-white rounded-full w-min  p-1 md:p-8  flex items-center justify-center flex-col md:text-2xl hover:scale-105 transition-all'> 50<p > salgados</p><h4 className='text-yellow-500 md:text-2xl font-bold '>R$70</h4></div>
        <div className='bg-white    font-jet  text-black rounded-full w-min  p-1 md:p-8 border border-orange-950 flex items-center justify-center flex-col md:text-2xl hover:scale-105 transition-all '>100<p > salgados</p> <h4 className='text-yellow-500 md:text-2xl font-bold'>R$100</h4> </div>
     
      </div>
      <p><strong>Ou monte seu kit</strong></p>
    </div>
  )
}

// const salgados =[
//   {
//     title:"Pizza",
//     sabores:"frango, queijo"
//   },
//   {
//     title:"Pizza",
//     sabores:"frango, queijo"
//   }
// ]
export default Cardapio