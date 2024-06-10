'use client'
import { useState, useEffect } from 'react'; 
import Image from 'next/image';
import style from "./NavBar.module.css";
import Link from 'next/link';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('/'); 

    useEffect(() => {
        setActiveLink(window.location.pathname); 
    }, []); 

    const handleSetActiveLink = (route) => {
        setActiveLink(route);
    }

    return ( 
        <nav className={`navbar navbar-expand-lg bg-body-white ${style.navBarStyle}`}>
            <div className="container-fluid row">
                <Link href="/" className="navbar-brand col-md-4 col-6 text-center">
                    <Image
                        src="/images.png"
                        width={50}
                        height={50}
                        alt="Picture of the author"
                    />
                    Man Store
                </Link>
                <button className="navbar-toggler col-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-md-8 d-md-flex justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" className={`nav-link ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleSetActiveLink('/')}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/trending" className={`nav-link ${activeLink === '/trending' ? 'active' : ''}`} onClick={() => handleSetActiveLink('/trending')}>Trending Now</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/sale" className={`nav-link ${activeLink === '/sale' ? 'active' : ''}`} onClick={() => handleSetActiveLink('/sale')}>Sale</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link href="#" className={`nav-link dropdown-toggle ${style.dropdown}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">Man&#39;s Clothing</Link>
                            <ul className="dropdown-menu">
                                {/* <li><Link href="#" className="dropdown-item">All Man's Clothing</Link></li>
                                <li><Link href="#" className="dropdown-item">New Arrivals</Link></li>
                                <li><Link href="#" className="dropdown-item">Blazers & Sport Coats</Link></li>
                                <li><Link href="#" className="dropdown-item">Coats & Jackets</Link></li>
                                <li><Link href="#" className="dropdown-item">Jeans</Link></li> */}
                                <li><Link href="accessoires" className={`dropdown-item ${activeLink === '/accessoires' ? 'active' : ''}`} onClick={() => handleSetActiveLink('/accessoires')}>accessoires</Link></li>
                                <li><Link href="pants" className={`dropdown-item ${activeLink === '/pants' ? 'active' : ''}`} onClick={() => handleSetActiveLink('/pants')}>Pants</Link></li>
                                <li><Link href="shirts" className={`dropdown-item ${activeLink === '/shirts' ? 'active' : ''}`} onClick={() => handleSetActiveLink('/shirts')}>Shirts</Link></li>
                                <li><Link href="short" className={`dropdown-item ${activeLink === '/short' ? 'active' : ''}`} onClick={() => handleSetActiveLink('/short')}>Shorts</Link></li>
                                <li><Link href="shoes" className={`dropdown-item ${activeLink === '/shoes' ? 'active' : ''}`} onClick={() => handleSetActiveLink('/shoes')}>Shoes</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/login" className={`nav-link ${activeLink === '/login' ? 'active' : ''}`} onClick={() => handleSetActiveLink('/login')}>LogIn</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;


