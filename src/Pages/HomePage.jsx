import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import NavBar from '../components/NavBar/NavBar'
import SideBar from '../components/SideBar/SideBar'

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <Home />
        <Footer />
    </>
  )
}

export default HomePage
