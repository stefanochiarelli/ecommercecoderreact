import React from 'react'
import './Navbar.scss'
import CartWidget from '../CartWidget/CartWidget'



function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light coffee__Navbar">
            <div className="container-fluid">
                <a className="navbar-brand coffee__Navbar--a" href="/">Chiarelli Coffee</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse coffee__Navbar--li4 " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active  coffee__Navbar--a" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  coffee__Navbar--a" href="/">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  coffee__Navbar--a" href="/">Nuestras Sucursales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link coffee__Navbar--a" href="/" >Contactanos</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link coffee__Navbar--a " href="/" > </a>
                        </li>
                    </ul>
                    
                </div>
                <CartWidget /> 
            </div>
        </nav>
    )
}

export default Navbar
