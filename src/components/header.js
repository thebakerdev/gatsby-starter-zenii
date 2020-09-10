import { Link } from 'gatsby';
import React, { useEffect } from 'react';

const Header = () => {

    const initSmoothScroll = () => {

        if (typeof window !== 'undefined') {

            const SmoothScroll = require('smooth-scroll');

            const scroll = new SmoothScroll('a[href*="#"]', {
                speed: 800,
                speedAsDuration: true,
                easing: 'easeOutQuart'
            });
        }
    }

    const toggleNav = () => {

        const nav_menu_button = document.getElementById('nav_menu_button');

        const nav_menu = document.getElementById('nav_menu');

        nav_menu.classList.toggle('nav__menu--active');
        
        nav_menu_button.classList.toggle('nav__menu-button--active');
        
        document.body.classList.toggle('disable-scroll');
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
                <li><a href="#about" onClick={toggleNav}>About</a></li>
                <li><a href="#services" onClick={toggleNav}>Services</a></li>
                <li><a href="#pricing" onClick={toggleNav}>Pricing</a></li>
                <li><a href="#contact" onClick={toggleNav}>Contact</a></li>
            </ul>
            <button id="nav_menu_button" className="nav__menu-button" aria-label="mobile menu" onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
        </header>
    );
}

export default Header;