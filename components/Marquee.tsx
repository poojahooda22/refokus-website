import Image from 'next/image'
import React from 'react'

function Marquee({imagesUrl}: {imagesUrl: any}) {
    return (
        <div className=''>
                {imagesUrl.map((url: string) => <img  src={url} className='' alt=""/>)}
        </div>
    )
}

export default Marquee
