import React from 'react'
import Heading from '../../common/Heading'
import './Award.css'
import { awards } from '../../data/Data'

const Award = () => {
    return (
        <>
            <div className="award padding">
                <div className="container">
                    <Heading title='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' subtitle='Our Awards' />
                    <div className="content mtop grid4">
                        {awards.map((won, id) => {
                            const { icon, num, name } = won
                            return (
                                <div className="box" key={id}>
                                    <div className="icon">
                                        <span>{icon}</span>
                                    </div>
                                    <h1>{num}</h1>
                                    <p>{name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Award
