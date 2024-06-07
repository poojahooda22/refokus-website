import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full py-[4vw]'>
        <div className='max-w-screen-xl mx-auto flex gap-4 '>
            <Card width="w-1/3" 
                toptitle='Up Next: News' 
                toptitle2='Insights and behind the scenes' 
            />
            <Card width="w-2/3" toptitle='Get In Touch' toptitle2="Let's get to it, together."/>
        </div>
    </div>
  )
}

export default Cards
