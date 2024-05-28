import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../../button/Button'
import {motion} from 'framer-motion'


function Navbar() {
  return (
    <motion.div className='bg-secondary w-full h-[100vh] text-primary'>
      Hello    
    </motion.div>
  )
}

export default Navbar
