import React from 'react'
import Hero2 from '../Components/Hero2/Hero2'
import PricingCard from '../Components/PricingCard/PricingCard'
import Work from '../work'

const Project = () => {
  return (
    <>
      <Hero2 heading="PROJECTS" text="Some of my most resent works"/>
      {/* <WorkCard/> */}
      <Work/>
      <PricingCard/>
    </>
  )
}

export default Project