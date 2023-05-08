import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { nav } from "../../data/Data"
import { FiLogOut } from 'react-icons/fi'
import { FaBars} from 'react-icons/fa'
import { RxCross1} from 'react-icons/rx'


const Header = () => {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <header>
                <div className="container flex">
                    <div className="logo">
                        <img src="./images/logo.png" alt="" />
                    </div>
                    <div className="nav">
                        <ul className={ menu ? 'small' : 'flex'}>
                            {nav.map((list, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={list.path}> {list.text} </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="button flex">
                        <h4><span>2</span>My List</h4>
                        <button className="btn1">
                            <FiLogOut />Sign In
                        </button>
                    </div>
                    <div className="toggle">
                        <button onClick={()=> setMenu(!menu)}>
                            {menu ? <RxCross1/>: <FaBars />  }
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
