import React from "react"
import { Link } from "gatsby"
import logo from '../../assets/images/logo.png'
import './header.scss'

const Header = () => (
  <header className="header">
    <Link to="/" className="home">
      <img className="logo" src={logo} />
      AP<strong>A</strong>C
    </Link>
    <nav>
      <Link to="/about">Sobre Nós</Link>
      <Link to="/adoptions">Nossos animais</Link>
      <Link to="/services">Nossos serviços</Link>
      <Link to="/store">Nossa loja</Link>
      <Link to="/contact">Contato</Link>
    </nav>
    <Link className="adopt-button" to="/adoptions">Adote um pet</Link>
  </header>
)

export default Header
