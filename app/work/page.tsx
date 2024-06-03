import Header from '@/components/header/Index'
import React from 'react'
import WorkPage from '@/components/workPage'

function Work() {
  return (
    <div className='w-screen h-[100vh] relative bg-primary text-secondary'>
        <Header/>
        <WorkPage/>
    </div>
  )
}

export default Work