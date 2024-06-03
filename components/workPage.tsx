import React from 'react'

function WorkPage() {
  const images = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: 0,
      left: 0,
      isActive: false
    }
  ]
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto pt-[8vw] text-center'>
            <h1 className='lg:text-[28vw] font-medium leading-none'>work</h1>
        </div>
    </div>
  )
}

export default WorkPage
