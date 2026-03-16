import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollction'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'


const home = () => {
  return (
    <div>
      <Hero />
    <LatestCollection />
    <BestSeller />
    <OurPolicy />
    <NewsletterBox/>
    </div>
  )
}

export default home