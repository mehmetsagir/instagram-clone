import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <div className="container mt-60">
        {children}
      </div>
    </>
  )
}

export default Layout
