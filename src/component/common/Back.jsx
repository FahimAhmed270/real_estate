import React from 'react'

const Back = ({name, cover, title}) => {
  return (
    <>
      <div className="back">
          <div className="container">
              <span>{name}</span>
              <h1>{title}</h1>
          </div>
          <div>
              <img src={cover} alt="" />
          </div>
      </div>
    </>
  )
}

export default Back
