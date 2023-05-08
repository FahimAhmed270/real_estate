import React from 'react'
import { featured } from '../../data/Data'

const FeatureCard = () => {
  return (
    <>
      <div className="content mtop grid5">
        {featured.map((items, id) => {
          return (
            <div className="box" key={id}>
              <img src={items.cover} alt="" />
              <h4>{items.name}</h4>
              <label>{items.total}</label>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FeatureCard
