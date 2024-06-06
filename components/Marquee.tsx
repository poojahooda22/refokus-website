import Image from 'next/image'
import React from 'react'

function Marquee({imagesurl}: {imagesurl: any}) {
    return (
        <div className='w-full flex items-center gap-[6vw] py-[2vw] overflow-hidden'>
            {imagesurl.map((url: string) => <img  src={url} className='w-[6vw] flex-shrink-0' alt=""/>)}
            {imagesurl.map((url: string) => <img  src={url} className='w-[6vw] flex-shrink-0' alt=""/>)}
        </div>
    )
}

export default Marquee
