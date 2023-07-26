/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../../Shared/Banner/Banner'
import TeamList from './TeamList'



const TeamPage = () => {
  return (
    <div  >
        <Banner title="Team Members" linkText="Team" />
        <TeamList />
    </div>
  )
}

export default TeamPage