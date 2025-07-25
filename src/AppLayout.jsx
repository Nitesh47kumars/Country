import React from 'react'
import Navbar from './Landing/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Landing/Footer'

const AppLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default AppLayout
