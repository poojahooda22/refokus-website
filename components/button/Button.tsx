import Image from 'next/image'
import React from 'react'

function Button({text}: {text: string}) {
  return (
    <div className='w-fit px-[1vw] py-[.3vw]  bg-secondary rounded-full flex items-center gap-[.5vw] justify-center'>
      <div className='h-[1.5vw] ctaWrapper overflow-hidden text-primary '>
        <h5 className='text-[.8vw] leading-[1.4vw]  '>{text}</h5>
        <h5 className='text-[.8vw] leading-[1.4vw]'>{text}</h5>
      </div>
      <div className='h-[.5vw] ctaIcon overflow-hidden'>
        <Image src='/icon.svg' width={8} height={8} alt="" className='w-[.9vw]' />
        <Image src='/icon.svg' width={8} height={8} alt="" className='w-[.9vw]' />
      </div>
    </div>
  )
}

export default Button
