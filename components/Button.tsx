import Image from 'next/image'
import React from 'react'

function Button() {
  return (
    <div className='px-[1vw] h-[2vw]  bg-red-200 rounded-full flex items-center justify-center'>
        <div className='h-[1.4vw] overflow-hidden'>
            <h5 className='text-[.8vw] '>Start a Project</h5>
            <h5 className='text-[.8vw]'>Start a Project</h5>
        </div>
        <div className='h-[1.4vw] overflow-hidden'>

            <Image src='/icon.svg' width={8} height={8} alt="" className='w-[1vw]' />

        </div>
    </div>
  )
}

export default Button
