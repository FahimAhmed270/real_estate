import React from 'react'
import './Footer.css'
import {footer} from '../../data/Data'

const Footer = () => {
    return (
        <>
            <section className="footerContent">
                <div className="container">
                    <div className="send flex">
                        <div className="text">
                            <h1>Do You Have Questions ?</h1>
                            <p>We'll help you to grow your career and growth.</p>
                        </div>
                        <button className="btn5">Contact Us Today</button>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="box">
                        <div className="logo">
                            <img src="/images/logo-light.png" alt="" />
                            <h2>Do You Need Help With Anything?</h2>
                            <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                            <div className="input flex">
                                <input type="text" placeholder='Email Address'/>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    {footer.map((value, id)=>{
                        return (
                            <div className="box" key={id}>
                                <h3>{value.title}</h3>
                                <ul>
                                    {value.text.map((item, id)=>{
                                        return (
                                            <li key={id}>{item.list}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </footer>
            <div className="copy-right">
            <span>© 2021 RentUP. Designd By Fahim Ahmed.</span>
            </div>
        </>
    )
}

export default Footer
