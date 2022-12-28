import React from 'react'
import video from "../assets/Christmas.mp4"
import About from './About'
import Services from './Services'

function Home() {
  return (
<>

    <div className="relative">
    <video src={video}  autoPlay loop className='w-full h-auto m-0'>
    </video>
      <div className="absolute inset-0 flex items-center justify-center p-20 text-white text-2xl font-bold">
    Welcome To my Website.
      </div>
    </div>
    <About />
    <Services />

</>
    )
}

export default Home