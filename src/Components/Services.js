import React from 'react'
import SingleService from './SingleService'
const Services = ({ services }) => {
  return (
    <div className='services'>
       {services.map((service)=>{
         return  <SingleService key={service.id}  service={service}/>
       }

       )}

     
    </div>
  )
}

export default Services