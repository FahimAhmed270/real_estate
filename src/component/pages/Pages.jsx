import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from '../About/About'
import Blog from '../Blog/Blog'
import Footer from '../common/footer/Footer'
import Header from '../common/header/Header'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Price from '../Price/Price'
import Services from '../Services/Services'

const Pages = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>} />
                    <Route path='/services' element={<Services/>} />
                    <Route path='/blog' element={<Blog/>} />
                    <Route path='/pricing' element={<Price/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}

export default Pages
