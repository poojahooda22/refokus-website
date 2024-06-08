import Image from 'next/image'
import React from 'react'
import Button from './button/Button'

function Project() {
  return (
    <div className='w-full py-[2vw] px-[2vw] bg-blue rounded-2xl flex gap-[1vw]'>
        <div className='w-1/2 flex flex-col items-start gap-[1.5vw] '>
            <h2 className=''>
                <Image src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/64c1cdf5425388ed4532f603_Arqitel%20Logo%20White.svg"
                    alt="" width={32} height={32}
                    className='w-[8vw]'    
                />
            </h2>
            <div className='w-full flex justify-end'>
                <div className='pt-[1vw]'>
                    <Image src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp" alt="" 
                    width={1000} height={100}
                    className='w-[16vw] rounded-2xl' />
                </div>
                
            </div> 
            <Image src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp" alt="" 
            width={1000} height={32}
            className='w-[38vw] rounded-2xl' />
        </div>
        <div className='w-1/2'>
            <div className='bg-secondary w-full h-[26vw] rounded-2xl overflow-hidden'>
                <video src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"
                    autoPlay
                    muted
                    loop
                    className=''
                />
            </div>
            <div className=' mt-[2vw] pl-[1vw]'>
                <p className='text-[.8vw] mb-[.7vw] tracking-tight'>Concept, Design, 3D, Webflow+WebGL Development</p>
                <h3 className='text-[1.1vw] leading-[1.4vw] mb-[2vw] tracking-tight'>With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.</h3>
                <Button text='View Website' />
            </div>
        </div>

    </div>
  )
}

export default Project
