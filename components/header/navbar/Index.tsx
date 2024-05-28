'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Button from '../../button/Button'
import {motion} from 'framer-motion'
import { menuSlide } from '../anime';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]


function Navbar() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <motion.div 
      initial="initial" animate="enter" exit="exit" variants={menuSlide} 
      className='bg-secondary w-full h-[100vh] text-primary '
    >
      {
        navItems.map( (data, index) => {
          return (
            <p key={index}>{data.title}</p>
          )
      })    }
    </motion.div>
  )
}

export default Navbar
