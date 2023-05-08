import React from 'react'
import Back from '../common/Back'
import FeatureCard from '../Home/Featured/FeatureCard'
import img from '../image/services.jpg'


const Services = () => {
  return (
    <>
      <section className="services mb">
          <Back name='Services' title='Services -All Services' cover={img}/>
          <div className="feature container">
              <FeatureCard/>
          </div>
      </section>
    </>
  )
}

export default Services
