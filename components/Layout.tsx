import React, { ReactNode } from 'react'
import Nav from "./Nav"

interface Children {
  children: ReactNode
}

const Layout = ({ children }: Children) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}

export default Layout