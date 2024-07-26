/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from 'react'
import Homedetails from './Homedetails'
import Services from '../Services/Services'
import ReliablePart from './ReliablePart'
import SuccessList from './SuccessList'
import Discover from './Discover'
import { ScrollToTop } from '../../constant/ScrollToTop'
import BestPart from './BestPart'
import { Helmet } from 'react-helmet';
const Home = () => {
  return (
	<div>
 <Helmet>
 <meta name="description" content="PNC Soft Tech" />
      <meta property="og:title" content="PNC Soft Tech" />
      <meta property="og:description" content="PNC Soft Tech" />
      <meta property="og:type" content="website" />
	  <meta name="google-site-verification" content="MWLJ5SvtAhyJ6sVDa5RvLS7PkuGJ8oE2oy9bdKMAa7c" />
 <ScrollToTop />
		<Homedetails />
		<ReliablePart />
		<Services />
		<Discover />
		<SuccessList />
		<BestPart />
 </Helmet>

	</div>
  )
}

export default Home