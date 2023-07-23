/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../../Shared/Banner/Banner'
import Services from './Services'
import ServiceList from './ServiceList'


const ServicePage = () => {
  return (
    <div  >
        <Banner title="Services" linkText="Service" />
        <Services />
        <ServiceList />
    </div>
  )
}

export default ServicePage