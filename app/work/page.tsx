'use client'

import Header from '@/components/header/Index'
import React from 'react'
import WorkPage from '@/components/workPage'
import Cursor from "@/components/StickyCursor/Index";
import { useRef} from 'react';
import Stripes from '@/components/Stripes';
import Products from '@/components/Products';

function Work() {
    const stickyElement = useRef(null);
  return (
    <div className='w-full min-h-[100vh] relative bg-primary text-secondary '>
        <Cursor stickyElement={stickyElement} />
        <Header/>
        <WorkPage/>
        <Stripes/>
        <Products/>
    </div>
  )
}

export default Work