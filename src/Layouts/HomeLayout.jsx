import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'
const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        
        <Navbar />
      </header>

      <main className="grow md:px-8">
        <Outlet />
      </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  )
}

export default HomeLayout