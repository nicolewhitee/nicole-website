import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo-xsml.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <a href="/">
                <img src={logo} alt="Logo" className='logo'/>
            </a>
            <div className="desktopMenu">
                <Link activeClass='activeNavbar' to='intro' spy={true} offset={-100} duration={200} className="desktopMenuListItem" role="button">Home</Link>
                <Link activeClass='activeNavbar' to='about' spy={true} offset={-50} duration={200} className="desktopMenuListItem" role="button">About</Link>
                <Link activeClass='activeNavbar' to='projects' spy={true} offset={-50} duration={200} className="desktopMenuListItem" role="button">Projects</Link>
                <Link activeClass='activeNavbar' to='certifications' spy={true} offset={-50} duration={200} className="desktopMenuListItem" role="button">Certifications</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
            
            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='activeNavbar' to='intro' spy={true} offset={-100} duration={200} className="listItem" onClick={() => setShowMenu(false)} role="button">Home</Link>
                <Link activeClass='activeNavbar' to='about' spy={true} offset={-50} duration={200} className="listItem" onClick={() => setShowMenu(false)} role="button">About</Link>
                <Link activeClass='activeNavbar' to='projects' spy={true} offset={-50} duration={200} className="listItem" onClick={() => setShowMenu(false)} role="button">Projects</Link>
                <Link activeClass='activeNavbar' to='certifications' spy={true} offset={-50} duration={200} className="listItem" onClick={() => setShowMenu(false)} role="button">Certifications</Link>
                <Link activeClass='activeNavbar' to='contact' spy={true} offset={-50} duration={200} className="listItem" onClick={() => setShowMenu(false)} role="button">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;