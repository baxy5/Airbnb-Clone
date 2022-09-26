import React, { ReactNode } from 'react'
import Nav from "./Nav"
import Footer from "./Footer"
import Carousel from "./Carousel"

interface Children {
  children: ReactNode
}

const Layout = ({ children }: Children) => {
  return (
    <div>
      <Nav />
      <Carousel />
      {children}
      <Footer />
    </div>
  )
}

export default Layout