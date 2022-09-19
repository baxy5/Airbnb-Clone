import React, { ReactNode } from 'react'
import Nav from "./Nav"
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
    </div>
  )
}

export default Layout