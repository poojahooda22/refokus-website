import React from 'react'

function Card() {
  return (
    <div className='w-1/4 h-[10vw] bg-gray rounded-lg py-[1vw] px-[1vw]'>
      <div className='flex items-center justify-between mb-[1vw]'>
        <p>Up Next: News</p>
        <img src="/arrow.svg" alt="Project Image" className='' />
      </div>
      <div className='flex flex-col justify-between'>
        <h3>Insights and behind the scenes</h3>
        <p>Explore what drives our team.</p>
      </div>
    </div>
  )
}

export default Card
