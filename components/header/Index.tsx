'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect} from 'react'
import Button from '../button/Button'
import { forwardRef } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { opacity } from './anime';
import Navbar from './navbar/Index'
import Magnetic from '../magnetic/Index';
import { usePathname } from 'next/navigation';
import styles from './style.module.scss'

const Header = forwardRef(function Index(props, ref){
    const [isActive, setIsActive] = React.useState(false)
    const pathname = usePathname();

    useEffect( () => {
        if(isActive) setIsActive(false)
    }, [pathname])

    return (
        <>
            <div className={styles.header} style={{ overflow: "hidden"}}>
                <div className='flex items-center gap-[4vw]'>
                    <Image src='/logo.svg' width={32} height={32} alt="" className='w-[20vw] sm:w-[5vw]' />
                    <div className='hidden sm:flex items-center gap-[3vw]'>
                        {["Home", "Work", "About"].map((item, index) => {
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
                <div className='hidden'>
                    <Button />  
                </div>
                
                <Magnetic>
                    <div onClick={() => {setIsActive(!isActive)}} className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
                        <div ref={ref} className={styles.bounds}></div>
                    </div>
                </Magnetic>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Navbar />}
            </AnimatePresence>
        </>
    )
})

export default Header
