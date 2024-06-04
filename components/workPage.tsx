import React from 'react'

function WorkPage() {

  const images = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "53%",
      left: "48%",
      isActive: false
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "47%",
      left: "52%",
      isActive: false
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "51%",
      left: "49%",
      isActive: false
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "53%",
      left: "53%",
      isActive: false
    },

  ]

  return (
    <div className='w-full'>
        <div className='relative max-w-screen-xl mx-auto pt-[8vw] text-center'>
            <h1 className='lg:text-[28vw] font-medium leading-none'>work</h1>
            <div className='absolute top-0 w-full h-full'>
                {images.map((elem, index) => {
                  return (
                    <img key={index} src={elem.url} alt=""
                      
                    />
                  )
                })}
            </div>
        </div>
    </div>
  )
}

export default WorkPage
