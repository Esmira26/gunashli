import React from 'react'
import '../css/Home.css'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
        <nav>
        <div className="xerite">
            <i aria-hidden="true" className="fas fa-map-marked-alt"></i>
            <div className="biryerde">
                <p>Ünvan:</p>
                <p className="balaca">Bakı şəhəri, Hövsan </p>
            </div>
        </div>
        <div className="telefon">
            <i className="fa-solid fa-mobile-screen-button"></i>
            <div className="biryerde">
                <p>Telefon nömrəsi:</p>
                <p className="balaca">+994 50 671 74 23</p>
            </div>
        </div>
        <div className="email">
            <i aria-hidden="true" className="fas fa-envelope-open"></i>
            <div className="biryerde">
                <p>ePoçt ünvanı:</p>
                <p className="balaca">esmirafrcova@gmail.com</p>
            </div>
        </div>
        <div className="icon">
           <NavLink><i className="fa-regular fa-circle-user"></i></NavLink> 
           <NavLink><i className="fa-regular fa-heart"></i></NavLink> 
           <NavLink to="/Sebet"><i className="fa-solid fa-cart-shopping"></i></NavLink> 
        </div>
    </nav>
  )
}

export default Nav