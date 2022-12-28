import React from 'react'
import image from '../assets/img1.jpg'



function About() {
  return (
<>
    <span className='mt-5 text-3xl text-purple-400 flex justify-center font-semibold'> What is This</span> 
    <div className='flex justify-between bg-gray-50 p-10 mt-2 w-full'>
      <h1 className='w-1/2 text-lg text-slate-500 flex text-justify'> A snow dog is a type of sled dog that is bred and trained to pull a sled over snow and ice. Snow dogs are typically found in colder climates, where they are used for a variety of purposes, including transportation, sport, and work. Snow dogs are known for their strength, endurance, and ability to work in cold weather. <br /><br />
      There are several different breeds of snow dogs, including the Alaskan Malamute, Siberian Husky, and Samoyed. These breeds are known for their thick coats, which help to keep them warm in extreme cold, and for their strong leg muscles, which allow them to run long distances and pull heavy loads. Snow dogs are often trained to work in teams, with each dog pulling a section of the sled. They are also often trained to follow commands, such as "stop," "go," and "turn," which allow the sled driver to control the movement of the sled.
      </h1>
    <div className='w-1/2 flex justify-center'>
      <img className='rounded-md' src={image} alt="" />
    </div>
    </div>
</>
  )
}

export default About