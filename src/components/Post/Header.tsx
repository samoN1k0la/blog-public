'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <header className="s-header s-header--opaque">
            <div className="s-header__logo">
                <Link href="/">
                    <img src="/images/logo.svg" alt="Homepage" />
                </Link>
            </div>
            
            <div className="row s-header__navigation">
                <nav className={`s-header__nav-wrap ${menuOpen ? 'is-open' : ''}`}>
                    <h3 className="s-header__nav-heading h6">Navigate to</h3>
                    <ul className="s-header__nav">
                        <li><Link href="/">Home</Link></li>
                        <li className="has-children">
                            <a href="#0">Categories</a>
                            <ul className="sub-menu">
                                {['Design', 'Lifestyle', 'Photography', 'Vacation', 'Work', 'Health', 'Family', 'Relationship'].map(category => (
                                    <li key={category}><Link href="/category">{category}</Link></li>
                                ))}
                            </ul>
                        </li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                    <button onClick={() => setMenuOpen(false)} className="s-header__overlay-close close-mobile-menu">Close</button>
                </nav>
            </div>
            
            <button onClick={() => setMenuOpen(!menuOpen)} className="s-header__toggle-menu"><span>Menu</span></button>
            
            {searchOpen && (
                <div className="s-header__search">
                    <div className="s-header__search-inner">
                        <div className="row wide">
                            <form role="search" method="get" className="s-header__search-form" action="#">
                                <label>
                                    <span className="h-screen-reader-text">Search for:</span>
                                    <input type="search" className="s-header__search-field" placeholder="Search for..." name="s" autoComplete="off" />
                                </label>
                                <button type="submit" className="s-header__search-submit">Search</button>
                            </form>
                            <button onClick={() => setSearchOpen(false)} className="s-header__overlay-close">Close</button>
                        </div>
                    </div>
                </div>
            )}

            <button onClick={() => setSearchOpen(!searchOpen)} className="s-header__search-trigger">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.982 17.983">
                    <path fill="#010101" d="M12.622 13.611l-.209.163A7.607 7.607 0 017.7 15.399C3.454 15.399 0 11.945 0 7.7 0 3.454 3.454 0 7.7 0c4.245 0 7.699 3.454 7.699 7.7a7.613 7.613 0 01-1.626 4.714l-.163.209 4.372 4.371-.989.989-4.371-4.372zM7.7 1.399a6.307 6.307 0 00-6.3 6.3A6.307 6.307 0 007.7 14c3.473 0 6.3-2.827 6.3-6.3a6.308 6.308 0 00-6.3-6.301z"/>
                </svg>
            </button>
        </header>
    );
};

export default Header;
