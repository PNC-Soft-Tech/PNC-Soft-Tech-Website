/* eslint-disable no-unused-vars */
import React from 'react'
import Homedetails from './Homedetails'
import Services from '../Services/Services'
import ReliablePart from './ReliablePart'
import SuccessList from './SuccessList'
import Discover from './Discover'

const Home = () => {
  return (
	<div>
		<Homedetails />
		<ReliablePart />
		<Services />
		<SuccessList />
		<Discover />
	</div>
  )
}

export default Home