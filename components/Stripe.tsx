import React from 'react'

function Stripe({val}: {val: any}) {
    return (
        <div 
            className='relative sm:w-[16.66%] sm:px-[1vw] 
            px-[4vw] py-[2vw] sm:py-[1vw] border-r-[1px] border-t-[1px]
            border-b-[1px] border-[#333] flex justify-between items-center'
        >
            <img src={val.url} alt="" className=' sm:w-[7vw]'/>
            <span className=' sm:text-[1vw] font-semibold'>{val.number}</span>
        </div>
    )
}

export default Stripe
