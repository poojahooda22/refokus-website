import React from 'react'

function WorkPage() {

  const images = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "45%",
      left: "50%",
      isActive: true
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "40%",
      isActive: false
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "55%",
      isActive: false
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "65%",
      left: "49%",
      isActive: false
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "75%",
      left: "65%",
      isActive: false
    },

  ]

  return (
    <div className='w-full h-[100vh] sm:flex sm:items-center sm:justify-center overflow-hidden'>
        <div className='relative max-w-screen-xl mx-auto text-center'>
          <div className='relative flex gap-2 pt-[60vw] sm:pt-0'>
            <h1 className='text-[52vw] lg:text-[28vw] -rotate-90 sm:rotate-0 font-medium leading-none absolute top-2/5 sm:relative -ml-8 sm:ml-0 '>work</h1>
            <h1 className='sm:hidden text-[52vw] lg:text-[28vw] -rotate-90 font-medium leading-none absolute left-1/3'>work</h1>
            <h1 className='sm:hidden text-[52vw] lg:text-[28vw] -rotate-90 font-medium leading-none absolute -left-1/2 '>work</h1>
          </div>
            
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
            <p 
              className='hidden sm:inline-block text-[4.2vw] 
              sm:text-[1.5vw] xl:text-[1vw] font-regular text-[#787878]'
            >Web Design, Webflow Development, Creative Development</p>   
        </div>
    </div>
  )
}

export default WorkPage
