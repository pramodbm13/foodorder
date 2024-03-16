import React from 'react'
import Logo from"../assets/logo.png"
import { Link } from "react-router-dom"
function Header() {
    return (
      <>
      
      <header>
      <div className="logo">
          <Link to="/"><img src={Logo} alt="Bookstore"/></Link>
          <span>Mama's Kitchen</span>
          <p className="belowtitle">Biryani,South Indian</p>
      </div>
      <div>
          
      <form class="d-flex" role="search">

      <a class="navbar-brand" href="/">Overview</a>
        
      <a class="navbar-brand" href="/order">Order Online</a>
      
      <a class="navbar-brand" href="/cart">Cart</a>
      
      <a class="navbar-brand" href="/review">Review</a>
      
      
      
      </form>
      
      </div>
      </header>
      </>
      
    )
  }
  
  export default Header