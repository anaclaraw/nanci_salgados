
const TitleModel = ({subtitle,title}) => {
  return (
    <div className='w-full'>
      <div className="flex flex-col items-center mt-9 ">
        <h2 className='text-orange-300'>{subtitle}</h2>
        <h2 className='font-bold'>{title}</h2>
        <div className='h-1 w-6 mt-1 rounded-lg bg-red-800'></div>
        </div>
      </div>
  )
}

export default TitleModel