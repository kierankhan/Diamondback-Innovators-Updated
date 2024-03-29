import React from 'react'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div className='flex flex-col justify-start items-center h-screen' style={{ backgroundImage: 'url("/um.jpg")' }}>
      <h1 className="text-5xl font-extrabold text-gray-100 text-shadow leading-none tracking-tight py-8 px-4">Prospective Students</h1>
      <div className='h-2/3'><Form /></div>
      
      
    </div>
  )
}

export default Contact