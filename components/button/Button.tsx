import Image from 'next/image'
import React from 'react'

function Button() {
  return (
    <div className='px-[1vw] h-[2vw]  bg-secondary rounded-full flex items-center gap-[.5vw] justify-center'>
      <div className='h-[1.4vw] ctaWrapper overflow-hidden text-primary '>
        <h5 className='text-[.8vw] '>Start a Project</h5>
        <h5 className='text-[.8vw]'>Start a Project</h5>
      </div>
      <div className='h-[.5vw] ctaIcon overflow-hidden'>
            <Image src='/icon.svg' width={8} height={8} alt="" className='w-[.9vw]' />
            <Image src='/icon.svg' width={8} height={8} alt="" className='w-[.9vw]' />
        </div>
    </div>
  )
}

export default Button
