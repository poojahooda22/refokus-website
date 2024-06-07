import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full py-[4vw]'>
        <div className='max-w-screen-xl mx-auto flex gap-2 '>
            <Card width="w-1/3" />
            <Card width="w-1/2"/>
        </div>
    </div>
  )
}

export default Cards
