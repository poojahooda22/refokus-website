import React from 'react'
import Button from './button/Button'

function Product({val}: {val: any}) {
  return (
    <div className='w-full py-5'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between py-[2vw]'>
       <h2 className='text-[2vw] font-medium'>{val.title}</h2>
       <div className='w-1/3 flex flex-col gap-[1vw]'>
            <p className='w-3/4 text-[.9vw] leading-[1.5vw]'>
                {val.desc}
            </p>
            <div className='flex items-center gap-[1vw]'>
              {val.live && <Button text='Live Website' />}
              {val.case && <Button text='Case Study' />}
            </div>
            
       </div>
      </div>
    </div>
  )
}

export default Product
