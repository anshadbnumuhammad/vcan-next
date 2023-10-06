import React from 'react'
import { Contact, GetInvolveWithUs, Glimpses, Navbar, OurModel, OurTeam, WhoWeAre } from '../components'

const Page = () => {
  return (
    <div>
      <Navbar />
      <WhoWeAre />
      <OurModel />
      <OurTeam />
      <GetInvolveWithUs />
      <Glimpses />
      <Contact />
    </div>
  )
}

export default Page