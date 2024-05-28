'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../button/Button'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { opacity } from './anime';

function Header() {
    const [isActive, setIsActive] = React.useState(false)

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
            <motion.div
                    animate={!isActive ? "closed" : "open"}
                    onMouseDown={() => {setIsActive(!isActive)}}
                    className={`sm:hidden`}
            >
                    <motion.h3 
                        variants={opacity} 
                        animate={isActive ? "closed" : "open"}

                    >
                        <HiOutlineMenuAlt4 className=' text-[3.8vw] sm:text-[1.2vw]' />
                    </motion.h3>
                    
            </motion.div>
        </div>
    )
}

export default Header
