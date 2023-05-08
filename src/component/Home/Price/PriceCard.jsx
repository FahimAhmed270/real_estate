import React from 'react'
import { price } from '../../data/Data'

const PriceCard = () => {

  return (
    <>
      <div className="content mtop flex">
        {price.map((value, id) => {
          return (
            <div className="box shadow" key={id}>
              <div className="topbtn">
                <button className="btn3">{value.best}</button>
              </div>
              <h3>{value.plan}</h3>
              <h1>
                <span>$</span>
                {value.price}
              </h1>
              <p>{value.ptext}</p>
              <ul>
                {value.list.map((item, id) => {
                  const { change, text, icon } = item
                  return (
                    <li key={id}>
                      <label htmlFor="" style={{
                        color: change === "color" ? "#dc3848" : "#27ae60",
                      }}>{icon}</label>
                      <p>{text}</p>
                    </li>
                  )
                })}
              </ul>
              <button className='btn5' style={{ background: value.plan === 'Standard' ? "#27ae60" : "#fff", color: value.plan === 'Standard' ? "#fff" : "#27ae60" }}>
                Start {value.plan}
              </button>

            </div>
          )
        })}
      </div>
    </>
  )
}

export default PriceCard
