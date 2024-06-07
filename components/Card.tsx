import Image from 'next/image'
import React from 'react'

function Card({width}: {width: string}) {
  return (
    <div className={`${width} h-[10vw] bg-gray rounded-lg py-[1vw] px-[1vw]`}>
        <div className='w-full'>
            <div className='flex items-center justify-between mb-[1vw]'>
                <p className='text-[.7vw]'>Up Next: News</p>
                <Image src='/arrow.svg' width={20} height={20} alt=""/>
            </div>
            <h3>Insights and behind the scenes</h3>
        </div> 

        <div>
            <p>Explore </p>
        </div>
    </div>
  )
}

export default Card
