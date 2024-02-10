import React, { useRef } from 'react'
import { useIsVisible } from '../data/services/useIsVisible'
import { ReviewsData } from '../data/Reviews'

const Reviews = () => {
  const ref = useRef()
  const visible = useIsVisible(ref)
  return (
    <div ref={ref} className={`transition-opacity ease-in duration-700 ${visible ? "opacity-100" : "opacity-0"} `}>
      <section className='mt-20 w-max max-w-[80vw] m-auto '>

        {ReviewsData.map((img) => (
          <img key={img.img} src={img.img} className='shadow-lg rounded-full mt-9' />
        )
        )}

      </section>
    </div>
  )
}

export default Reviews