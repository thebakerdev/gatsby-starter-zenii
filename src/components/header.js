import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';

const Header = ({ siteTitle }) => {

    const initSmoothScroll = () => {

        if (typeof window !== 'undefined') {

            const scroll = new SmoothScroll('a[href*="#"]', {
                speed: 800,
                speedAsDuration: true,
                easing: 'easeOutQuart'
            });
        }
    }

    useEffect(() => {
        initSmoothScroll();
    },[]);

    return (
        <header className="header container">
            <Link to="/">
                <img src={ require('assets/images/logo.svg') } alt="site logo" />
            </Link>
            <nav className="nav">
            <h2 className="hidden">Top navigation</h2>
            <ul id="nav_menu" className="nav__menu">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button id="nav_menu_button" className="nav__menu-button">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
        </header>
    );
}

export default Header;