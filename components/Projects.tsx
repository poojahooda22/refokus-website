import React from 'react'
import Project from './Project'

function Projects() {
    const data =[
        {
            image1: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp',
            image2: '',
            logo: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64c1cdf5425388ed4532f603_Arqitel%20Logo%20White.svg',
            videoUrl: '',
            desc: '',
            heading: ''
        }
    ]
  return (
    <div className='w-full py-[4vw]'>
        <div className='max-w-screen-xl mx-auto '>
            <Project />
        </div>
    </div>
  )
}

export default Projects
