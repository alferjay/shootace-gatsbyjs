import * as React from 'react'
import {Link} from 'gatsby'
import {container} from '../../layout/layout.module.css'
import {row, nav} from './header.module.css'

const Header = ()=> {
  return(
    <header>
      <div className={`container ${container}`}>
        <div className={row}>
          <Link to="/">
          <svg width="247px" height="34px" viewBox="0 0 247 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="Poppins-Bold, Poppins" fontSize="45" fontWeight="bold">
                  <g id="homepage" transform="translate(-141.000000, -45.000000)">
                      <text id="SHOOTACE">
                          <tspan x="140" y="78" fill="#F5A623">SHOOT</tspan>
                          <tspan x="297.905" y="78" fill="#FFFFFF">ACE</tspan>
                      </text>
                  </g>
              </g>
          </svg>
          </Link>

          <nav className={nav}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/aboutus/">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header