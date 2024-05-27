import Image from 'next/image'
import React from 'react'

function Button() {
  return (
    <div className='w-[8vw] h-[2vw] py-2 bg-red-200 rounded-full flex items-center justify-center'>
        <div className=''>
            <h5 className='text-[.7vw]'>Start a Project</h5>
            <h5 className='text-[.7vw]'>Start a Project</h5>
        </div>
        <div>
            <div>
                <Image src='/icon.svg' width={8} height={8} alt="" />
            </div>
            <div>
                <Image src='/icon.svg' width={8} height={8} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Button
