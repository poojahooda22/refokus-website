import Image from 'next/image'
import React from 'react'

function Card({width}: {width: string}) {
  return (
    <div className={`${width}  bg-gray rounded-lg py-[1vw] px-[1vw]`}>
        <div className='w-full'>
            <div className='flex items-center justify-between mb-[1vw]'>
                <p className='text-[.7vw]'>Up Next: News</p>
                <Image src='/arrow.svg' width={20} height={20} alt=""/>
            </div>
            <div className='w-1/2'>
                <h3 className=' font-medium text-[1.2vw]'>Insights and behind the scenes</h3>
            </div>
            
        </div> 

        <div className='down w-full mt-[8vw]'>
            <h1 className='text-[5vw] font-medium leading-none'>Start a Project </h1>
            <button className='text-[.8vw] px-[1.3vw] py-[.7vw] rounded-full mt-[1vw] border-[1px] border-secondary'>
                Contact us
            </button>
            
        </div>
    </div>
  )
}

export default Card
