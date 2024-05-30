import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='w-screen relative pt-[8vw]'>
      <div className=' max-w-screen-xl mx-auto flex flex-col gap-[8vw]'>
        <div className='flex items-end justify-end '>
          <div className='w-1/2 h-[4vw]'></div>
          <div className='w-[4vw] h-[2vw] flex items-center'>
            <Image src='/iconLogo.svg' width={32} height={32} alt="" className='w-[5vw] sm:w-[1.5vw]' />
          </div>
        </div>
        <div className='flex items-end justify-between'>
          <div className='text-[6vw] leading-[5vw] uppercase'>
            <h1>We</h1>
            <h1>make</h1>
            <h1>cool</h1>
            <h1>websites</h1>
          </div>
          <div className='w-1/3 text-[1vw]'>
            <p>Refokus is a forward-thinking web agency that combines Web Design, Webflow Development, and Creative Development to create cool websites that help brands position themselves as market leaders.</p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Hero
