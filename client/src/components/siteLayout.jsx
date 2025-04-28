import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

const SiteLayout = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default SiteLayout
