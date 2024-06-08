import React from 'react'
import Project from './Project'

function Projects() {
    const data =[
        {
            image1: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp',
            image2: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp',
            logo: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64c1cdf5425388ed4532f603_Arqitel%20Logo%20White.svg',
            videoUrl: 'https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm',
            desc: 'Concept, Design, 3D, Webflow+WebGL Development',
            heading: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate."
        },
        {
            image1: '',
            image2: '',
            logo: '',
            videoUrl: '',
            desc: 'Concept, Design, 3D, Webflow+WebGL Development',
            heading: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate."
        },

    ]
  return (
    <div className='w-full py-[4vw]'>
        <div className='max-w-screen-xl mx-auto '>
            {data.map((elem, index) => (
                <Project key={index} val={elem} />
            ))}
        </div>
    </div>
  )
}

export default Projects
