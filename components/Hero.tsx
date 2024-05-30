import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='w-full flex  items-center justify-center'>
      <div className='flex bg-comp mt-[12vw]'>
        <div className='text-[8vw]'>
          <div><h1>We</h1></div>
          <div><h1>Make</h1></div>
          <div><h1>Cool</h1></div>
          <div><h1>Websites</h1></div>
        </div>
        <div>
          <Image src='/iconLogo.svg' width={32} height={32} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
