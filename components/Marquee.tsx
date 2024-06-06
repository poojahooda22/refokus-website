import Image from 'next/image'
import React from 'react'

function Marquee({imagesurl}: {imagesurl: any}) {
    return (
        <div className=''>
            {imagesurl.map((url: string) => <img  src={url} className='' alt=""/>)}
        </div>
    )
}

export default Marquee
