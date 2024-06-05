import React from 'react'

function Stripe({val}) {
  return (
    <div 
        className='relative max-w-72 px-[1vw] py-[1vw] border-r-[1px] border-t-[1px] -mt-[4vw]
        border-b-[1px] border-[#333] flex justify-between items-center'
    >
      <img src={val.url} alt="" className='w-[4vw]'/>
      <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe
