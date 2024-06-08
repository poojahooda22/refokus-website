import Image from 'next/image'
import React from 'react'

function Button({text}: {text: string}) {
  return (
    <div className='w-fit px-[6vw] py-[3vw] sm:px-[1vw] sm:py-[.3vw] bg-secondary 
      rounded-full flex items-center gap-[.5vw] justify-center'>
      <div className='h-[4vw] sm:h-[1.5vw] ctaWrapper overflow-hidden text-primary'>
        <h5 className='text-[3.5vw] leading-[4vw] sm:text-[.8vw] sm:leading-[1.4vw]'>{text}</h5>
        <h5 className='text-[3.5vw] leading-[4vw] sm:text-[.8vw] sm:leading-[1.4vw]'>{text}</h5>
      </div>
      <div className='h-[1.9vw] sm:h-[.5vw] ctaIcon overflow-hidden'>
        <Image src='/icon.svg' width={8} height={8} alt="" className='w-[3.2vw] sm:w-[.9vw]' />
        <Image src='/icon.svg' width={8} height={8} alt="" className='w-[3.2vw] sm:w-[.9vw]' />
      </div>
    </div>
  )
}

export default Button
