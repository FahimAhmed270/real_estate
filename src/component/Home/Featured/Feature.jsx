import React from 'react'
import Heading from '../../common/Heading'
import './Feature.css'
import FeatureCard from './FeatureCard'

const Feature = () => {
  return (
    <>
      <section className="feature background">
          <div className="container">
              <Heading title='Featured Property Types' subtitle='Find All Type of Property.'/>
              <FeatureCard/>
          </div>
      </section>
    </>
  )
}

export default Feature
