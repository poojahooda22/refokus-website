import React from 'react'

function Card({width}) {
  return (
    <div className={`${width} h-[10vw] bg-gray rounded-lg py-[1vw] px-[1vw]`}>
      <div className='flex items-center justify-between mb-[1vw]'>
        <p>Up Next: News</p>
        <img src="/arrow.svg" alt="Project Image" className='' />
      </div>
        <h3>Insights and behind the scenes</h3> 
      
    </div>
  )
}

export default Card
