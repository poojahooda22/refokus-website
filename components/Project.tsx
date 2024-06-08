import Image from 'next/image'
import React from 'react'

function Project() {
  return (
    <div className='w-full py-[2vw] px-[2vw] bg-blue rounded-2xl '>
        <div className='w-1/2 flex flex-col items-start gap-[2vw] '>
            <h2 className='text-[1.2vw]'>
                <Image src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/64c1cdf5425388ed4532f603_Arqitel%20Logo%20White.svg"
                    alt="" width={32} height={32}
                    className='w-[8vw]'    
                />
            </h2>
            <div className='w-full flex justify-end'>
                <div>
                    <Image src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp" alt="" 
                    width={1000} height={100}
                    className='w-[16vw] rounded-2xl' />
                </div>
                
            </div> 
            <Image src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp" alt="" 
            width={1000} height={32}
            className='w-[38vw] rounded-2xl' />
        </div>
        <div>
            
        </div>

    </div>
  )
}

export default Project
