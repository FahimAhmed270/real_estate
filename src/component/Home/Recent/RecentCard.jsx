import React from 'react'
import { list } from '../../data/Data'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {GrLocation} from 'react-icons/gr'


const RecentCard = () => {
    return (
        <>
            <div className="content mtop grid3">
                {list.map((value, id) => {
                    const { cover, name, location, category, price, type } = value
                    return (
                        <div className="box shadow" key={id}>
                            <div className="img">
                                <img src={cover} alt="" />
                            </div>
                            <div className="text">
                                <div className="category flex">
                                    <span style={{ background: category === 'For Sale' ? "#25b5791a" : "#ff98001a", color: category === 'For Sale' ? "#25b579" : '#ff9800'}}>{category}</span>
                                    <BsFillSuitHeartFill/>
                                </div>
                                <h4>{name}</h4>
                                <p><GrLocation/>{location}</p>
                            </div>
                            <div className="button flex">
                                <div>
                                    <button className="btn2">{price}</button>
                                    <label htmlFor="">/sqft</label>
                                </div>
                                <span>{type}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RecentCard
