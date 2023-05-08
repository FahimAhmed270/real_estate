import React from 'react'
import Heading from '../../common/Heading'
import './Team.css'
import { team } from '../../data/Data'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import { FaRegEnvelope } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'


const Team = () => {
  return (
    <>
      <div className="team background">
        <div className="container">
          <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          <div className="content mtop grid3">
            {team.map((team, id) => {
              const { list, cover, address, name, icon } = team
              return (
                <div className="box" key={id}>
                  <button className="btn3">{list} Listing</button>
                  <div className="details">
                    <div className="img">
                      <img src={cover} alt="" />
                      <BsFillCheckCircleFill />
                    </div>
                    <div className="other">
                      <ImLocation2 />
                      <label htmlFor="">{address}</label>
                      <h4>{name}</h4>
                    </div>

                    <ul>
                      {team.icon.map((icon, id) => {
                        return (
                          <li key={id}>{icon}</li>
                        )
                      })}
                    </ul>
                    <div className="button flex">
                      <button>
                        <FaRegEnvelope />Message
                      </button>
                      <button className='btn4'>
                        <BsFillTelephoneFill />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Team
