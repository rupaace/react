import React from 'react'
import Card from '../components/Card'
import image1 from "../assets/img1.jpg"
import image2 from "../assets/img2.jpg"
import image3 from "../assets/img3.jpg"

const data = [
  {
    image : image1,
    name  : 'Snow Leopard',
    discription : 'Wont found in Dessert'
  },
  {
    image : image2,
    name  : 'Tree',
    discription : 'Beautiful White Tree'
  },
  
  {
    image : image3,
    name  : 'Home',
    discription : 'Hut in snow'
  },

]

function Services() {
  return (
    <>
    <span className='mt-5 text-3xl text-purple-400 flex justify-center font-semibold'> Wniter is Here</span> 
    <div className='flex justify-between mt-20'>
      {data.map(item => (
    <Card  image = {item.image} name = {item.name} discription= {item.discription}/>
      ))}

    </div>

    </>
  )
}

export default Services