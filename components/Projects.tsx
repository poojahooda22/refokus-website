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
            bg: '#5355ee',
            heading: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate."
        },
        {
            image1: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204-p-500.png',
            image2: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png',
            logo: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b4127d91ec4fa9b1124008_Logo%20White%202.svg',
            videoUrl: 'https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4',
            bg: '#4a576b',
            desc: 'Concept, Design, 3D, Webflow+WebGL Development',
            heading: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates."
        },
        {
            image1: '',
            image2: '',
            logo: '',
            videoUrl: '',
            bg: '#3e4365',
            desc: 'Concept, Design, 3D, Webflow+WebGL Development, AI Integrations',
            heading: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design."
        },

    ]
  return (
    <div className='w-full py-[4vw]'>
        <div className='max-w-screen-xl mx-auto flex flex-col gap-[2vw]'>
            {data.map((elem, index) => (
                <Project key={index} val={elem} />
            ))}
        </div>
    </div>
  )
}

export default Projects
