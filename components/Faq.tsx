'use client'

import React, { useState } from 'react'

function Faq() {

    const data =[
        
    ]
    const [expand, setExpand] = useState(false);

    const toogleExpand = () => setExpand(prevExpand => !prevExpand);
    console.log(expand)

  return (
    <div>
        <div
            onClick={toogleExpand} 
            className='w-full  cursor-pointer py-[1vw]
             font-regular border-b-[1px] border-gray2'>
                <div className='flex items-center justify-between'>
                    <h4 className='text-[.9vw]'>What type of clients do you work with?</h4>
                    <span className='text-[2vw] text-gray2'>
                        {expand ? '-' : '+'}
                    </span>
                </div>
            
            { expand && <div className='text-[.8vw] font-normal'>
            We work with a range from startups to Fortune 500 companies, including some cool niches like Venture Capital firms. Sometimes we work with founders, and other times with marketing managers, but what’s most important is that our 
            clients are ready to break the mold and refocus their brand and website 
            with unique experiences.</div>}    
        </div>
        <div
            onClick={toogleExpand} 
            className='w-full  cursor-pointer py-[1vw]
             font-regular border-b-[1px] border-gray2'>
                <div className='flex items-center justify-between'>
                    <h4 className='text-[.9vw]'>What's your pricing looking like?</h4>
                    <span className='text-[2vw] text-gray2'>+</span>
                </div>
            
            { expand && <div className='text-[.8vw] font-normal'>
                Our pricing typically ranges from $25k to $150k, though most of our projects are around $50k. We like to work smart with budgets and strategize around your needs. For example, if you have a few pages but not a big budget, we could do something really cool for the homepage and opt for CMS templates or a component-driven approach for internal pages. 
                But if you give us a huge budget, we can go crazy, add 3D animations, and all the good stuff.</div>}    
        </div>
        <div
            onClick={toogleExpand} 
            className='w-full  cursor-pointer py-[1vw]
             font-regular border-b-[1px] border-gray2'>
                <div className='flex items-center justify-between'>
                    <h4 className='text-[.9vw]'>What type of clients do you work with?</h4>
                    <span className='text-[2vw] text-gray2'>+</span>
                </div>
            
            { expand && <div className='text-[.8vw] font-normal'>
            We work with a range from startups to Fortune 500 companies, including some cool niches like Venture Capital firms. Sometimes we work with founders, and other times with marketing managers, but what’s most important is that our 
            clients are ready to break the mold and refocus their brand and website 
            with unique experiences.</div>}    
        </div>
        
    </div>
  )
}

export default Faq
