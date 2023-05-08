import React from 'react'
import Heading from '../../common/Heading'
import './Location.css'
import {location} from '../../data/Data'

const Location = () => {
  return (
    <>
      <section className="location padding">
          <div className="container">
              <Heading title='Explore By Location' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
              <div className="content grid3 mtop">
                  { location.map((place, id)=>{
                      const {name, Villas,  Apartments, Offices, cover} = place
                      return (
                          <div className="box" key={id}>
                              <img src={cover} alt="" />
                              <div className="overlay">
                                  <h5>{name}</h5>
                                  <p>
                                      {/* <span>{Villas}</span>
                                      <span>{Offices}</span>
                                      <span>{Apartments}</span> */}
                                      <label htmlFor="">{Villas}</label>
                                      <label htmlFor="">{Offices}</label>
                                      <label htmlFor="">{Apartments}</label>
                                  </p>
                              </div>
                          </div>
                      )
                  })}
              </div>
          </div>
      </section>
    </>
  )
}

export default Location
