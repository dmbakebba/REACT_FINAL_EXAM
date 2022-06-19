import React from 'react'

const SingleService = ({ service}) => {
  return (
    <div className='single-services'>
        <h3>{service.heading}</h3>
        <p>{service.text}</p>
    </div>
  )
}

export default SingleService