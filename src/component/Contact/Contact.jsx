import React from 'react'
import Back from '../common/Back'
import './Contact.css'
import img from "../image/pricing.jpg"

const Contact = () => {
    return (
        <>
            <section className="contact mb">
                <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
                <div className="container">
                    <form action="" className='shadow'>
                        <h4>Fillup The Form</h4> <br />
                        
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Subject' />
                        <textarea cols="30" rows="10" placeholder='Message'></textarea>
                        <button>Submit Request</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
