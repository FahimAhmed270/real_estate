import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import img from '../image/about.jpg'
import './About.css'

const About = () => {
  return (
    <>
      <section className="about">
          <Back name='About Us' title='About Us - Who We Are?' cover={img}/>
          <div className="container mtop grid2">
              <div className="left row">
                <Heading title='Our Agency Story' subtitle='Check out our company story and work process'/>
                  {/* <h3>Our Agency Story</h3>
                  <span>Check out our company story and work process</span> */}
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <button className="btn2">more about us</button>
              </div>
              <div className="right row">
                  <img src="./immio.jpg" alt="" />
              </div>
          </div>
      </section>
    </>
  )
}

export default About
