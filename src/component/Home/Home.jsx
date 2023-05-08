import React from 'react'
import Award from './Award/Award'
import Feature from './Featured/Feature'
import Hero from './Hero/Hero'
import Location from './Location/Location'
import Price from './Price/Price'
import Recent from './Recent/Recent'
import Team from './Team/Team'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Recent/>
      <Award/>
      <Location/>
      <Team/>
      <Price/>
    </div>
  )
}

export default Home
