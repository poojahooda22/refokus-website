import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-[1vw] flex items-center justify-between'>
        <div className='flex items-center gap-[4vw]'>
            <Image src='/logo.svg' width={32} height={32} alt="" className='w-[5vw]' />
            <div className='flex items-center gap-[3vw]'>
                {["Home", "Work", "About", "News", "Careers"].map((item, index) => {
                    return (
                        <div key={index} className=''>
                            <Link href="/">
                                <p className='text-[.8vw] flex items-center gap-[.2vw]'>
                                    {index === 1 && <span className='inline-block w-[.2vw] h-[.2vw] rounded-full bg-green-500'></span> }
                                    {item}
                                </p>
                            </Link>  
                        </div>
                    )
                })}
            </div>   
        </div>

        <Button />  
    </div>
  )
}

export default Navbar
