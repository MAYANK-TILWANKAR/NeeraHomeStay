




      "use client";
import Link from 'next/link'
import { useState } from 'react'
import "./navbarStyles.css"

const NavbarItems: React.FC = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <nav className="NavbarItems">
      {/* <img className="tedx-logo" src={} alt="logo" /> */}

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "navbar-menu active" : "navbar-menu"}>
        <li>
          <Link className="nav-links" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-links" href="#about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-links" href="#speakers">
            Speakers
          </Link>
        </li>
        <li>
          <Link className="nav-links" href="#partners">
            Partners
          </Link>
        </li>
        <li>
          <Link className="nav-links" href="/team">
            Team
          </Link>
        </li>
        <li>
          <Link className="nav-links" href="#contact">
            Contact
          </Link>
        </li>
        <li>
          <a className="nav-links" id="registerbutton" href="https://forms.gle/AccyXiX28zjbCfiN6">
            Register Now
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarItems
