import React, {useState} from 'react'
import './Navbar.scss'
import CartWidget from '../CartWidget/CartWidget'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
    Link
  } from "react-router-dom";



function Navbar() {


  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light coffee__Navbar">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand coffee__Navbar--a" style={{padding: '0.5rem 1rem'}} >Chiarelli Coffee</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse coffee__Navbar--li4 " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                        <Link to="/" className="nav-link active  coffee__Navbar--a">Home </Link>
                        </li>
                        <li className="nav-item ">
                        <span className="nav-link active coffee__Navbar--a2 ">
                        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret color="warning">
                                Catalogo de Cafes
                            </DropdownToggle>
                            <DropdownMenu>
                                <Link to="/Catalogo/Suave" style={{textDecoration: 'none'}}  ><DropdownItem >Suave</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/Catalogo/Medio" style={{textDecoration: 'none'}}><DropdownItem>Medio</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/Catalogo/Fuerte" style={{textDecoration: 'none'}}><DropdownItem>Fuerte</DropdownItem></Link>
                            </DropdownMenu>
                            </ButtonDropdown>
                        </span> 
                        </li>
                        
                    </ul>
                    
                </div>
                <CartWidget /> 
            </div>
        </nav>
    )
}

export default Navbar
