import React, { ReactNode } from 'react'
import Header from '../header'
import '../../assets/style/index.scss'
import './layout.scss'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  )
}

export default Layout
