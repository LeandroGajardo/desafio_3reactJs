import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light myNav">
                    <div className="container">
                        <a className="navbar-brand text-warning" href="">La Dulceria</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active text-warning" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-warning dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="">Paletas de Caramelo</a></li>
                                        <li><a className="dropdown-item" href="">Caramelos Duros</a></li>
                                        <li><a className="dropdown-item" href="">Caramelos Blandos</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-warning" href="">Nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-warning" href="">Contacto</a>
                                </li>
                            </ul>
                        </div>
                        <CartWidget icon={faShoppingCart}/>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
