import React from 'react'

function WorkPage() {

  const images = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "60%",
      left: "50%",
      isActive: false
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "45%",
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
      top: "60%",
      left: "49%",
      isActive: false
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "53%",
      left: "58%",
      isActive: false
    },

  ]

  return (
    <div className='w-full'>
        <div className='relative max-w-screen-xl mx-auto pt-[80vw] sm:pt-[20vw] lg:pt-[10vw] xl:pt-[8vw] text-center'>
            <h1 className='text-[40vw] lg:text-[28vw] -rotate-90 font-medium leading-none absolute top-1/2'>work</h1>
            {/* <h1 className='text-[40vw] lg:text-[28vw] -rotate-90 font-medium leading-none absolute'>work</h1>
            <h1 className='text-[40vw] lg:text-[28vw] -rotate-90 font-medium leading-none absolute '>work</h1> */}
            <div className='absolute top-0 w-full h-full'>
                {images.map((elem, index) => (
                  elem.isActive && (
                    <img key={index} src={elem.url} alt=""
                      className='absolute w-[40vw] sm:w-[20vw] xl:w-[16vw] rounded-lg -translate-x-1/2 -translate-y-1/2'
                      style={{top: elem.top, left: elem.left}}
                    />
                  )
                )
                )}
            </div>
            <p className='text-[4.2vw] sm:text-[1.5vw] xl:text-[1vw] font-regular text-[#787878]'>Web Design, Webflow Development, Creative Development</p>
        </div>
    </div>
  )
}

export default WorkPage
