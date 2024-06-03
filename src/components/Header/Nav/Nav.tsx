import "./Nav.css"
import React, { useEffect } from 'react';

export const Nav = () => {

    const handleLinkClick = () => {
        const checkbox = document.getElementById('toggle-menu') as HTMLInputElement;
        if (checkbox) {
            checkbox.checked = false;
            checkbox.dispatchEvent(new Event('change'));
        }
    }

    const handleMenuBackgroundClick = (event: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        if (event.target === event.currentTarget) {
            event.preventDefault();
        }
    }

    useEffect(() => {
        const body = document.body;
        const checkbox = document.getElementById('toggle-menu') as HTMLInputElement;
        const toggleScroll = () => {
            if (checkbox.checked) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        };

        checkbox.addEventListener('change', toggleScroll);

        return () => {
            checkbox.removeEventListener('change', toggleScroll);
        };
    }, []);

    return (
        <div className="navbar">
            <div className="navbar-div">
                <div className="navbar-items">
                    <div className="navbar-icons">
                        <ul>
                            <li><a href="https://github.com/" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/in//" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="hamburger-icon">
                        <label className="hamburger" htmlFor="toggle-menu">
                            <input type="checkbox" id="toggle-menu" name='menu'></input>
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                            <nav className="menu">
                                <ul onClick={handleMenuBackgroundClick}>
                                    <li><a href="#main-page" onClick={handleLinkClick}>Accueil</a></li>
                                    <li><a href="#about" onClick={handleLinkClick}>À propos</a></li>
                                    <li><a href="#studies" onClick={handleLinkClick}>Parcours</a></li>
                                    <li><a href="#" onClick={handleLinkClick}>Expériences</a></li>
                                    <li><a href="#" onClick={handleLinkClick}>Portfolio</a></li>
                                    <li><a href="#" onClick={handleLinkClick}>Contact</a></li>
                                </ul>
                            </nav>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;