import * as React from 'react'
import {footer, container} from '../../layout/layout.module.css'
import {Link} from 'gatsby'
import {nav} from '../header/header.module.css'
import * as footerStyles from './footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = ()=> {
  return(
    <footer className={footer}>
      <div className={`container ${container} ${footerStyles.footer}`}>
        <div>
          <Link to="/">
            <svg width="409px" height="55px" viewBox="0 0 409 55" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="Poppins-Bold, Poppins" fontSize="75" fontWeight="bold">
                    <g id="homepage" transform="translate(-515.000000, -4989.000000)">
                        <g id="Group-10" transform="translate(424.000000, 4964.000000)">
                            <text id="SHOOTACE">
                                <tspan x="88" y="79" fill="#F5A623">SHOOT</tspan>
                                <tspan x="351.175" y="79" fill="#FFFFFF">ACE</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
          </Link>
        </div>

        <div className={footerStyles.line}>
          <span></span>
          <span></span>
        </div>

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

        <p className={footerStyles.connect}>Connect with us!</p>

        <ul className={footerStyles.social}>
          <li><a href="https://facebook.com" role="button" aria-label='Facebook'><FaFacebook/></a></li>
          <li><a href="https://instagram.com" role="button" aria-label='Instagram'><FaInstagram/></a></li>
          <li><a href="https://linkedin.com" role="button" aria-label='LinkedIn'><FaLinkedin/></a></li>
          <li><a href="https://twitter.com" role="button" aria-label='Twitter'><FaTwitter/></a></li>
          <li><a href="https://github.com" role="button" aria-label='GitHub'><FaYoutube/></a></li>
        </ul>

        <p className={footerStyles.copywrite}>Copywrites 2022. All Rights Reserved | <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/term-of-use">Terms of Use</Link></p>
      </div>
    </footer>
  )
}

export default Footer