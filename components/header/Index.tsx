import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../button/Button'
import { RiMenu3Fill } from "react-icons/ri";

function Header() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className='max-w-screen-2xl mx-auto sm:py-[1vw] flex items-center justify-between py-[6vw] px-[5vw] sm:px-0 '>
            <div className='flex items-center gap-[4vw]'>
                <Image src='/logo.svg' width={32} height={32} alt="" className='w-[20vw] sm:w-[5vw]' />
                <div className='hidden sm:flex items-center gap-[3vw]'>
                    {["Home", "Work", "About", "News", "Careers"].map((item, index) => {
                        return (
                            <div key={index} className=''>
                                <Link href="/">
                                    <p className='text-[.8vw] flex items-center gap-[.2vw]'>
                                        {index === 1 && <span style={{boxShadow:'0 0 0.25em #00FF19'}} className='inline-block w-[.2vw] h-[.2vw] rounded-full bg-comp'></span> }
                                        {item}
                                    </p>
                                </Link>  
                            </div>
                        )
                    })}
                </div>   
            </div>
            <div className='hidden sm:inline-block'>
                <Button />  
            </div>

            {/* // Mobile Menu */}
            <div className='sm:hidden'>
                <RiMenu3Fill size={24} />
            </div>          
        </div>
    )
}

export default Header
