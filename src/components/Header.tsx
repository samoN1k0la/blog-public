"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="s-header">
            {/* Logo */}
            <div className="s-header__logo">
                <Link href="/">
                    <Image src="/images/logo.svg" alt="Homepage" width={100} height={50} />
                </Link>
            </div>

            {/* Navigation */}
            <div className="row s-header__navigation">
                <nav className="s-header__nav-wrap">
                    <h3 className="s-header__nav-heading h6">Navigate to</h3>
                    <ul className="s-header__nav">
                        <li className="current">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="has-children">
                            <a href="#" onClick={(e) => e.preventDefault()}>Categories</a>
                            <ul className="sub-menu">
                                <li><Link href="/category/design">Design</Link></li>
                                <li><Link href="/category/lifestyle">Lifestyle</Link></li>
                                <li><Link href="/category/photography">Photography</Link></li>
                                <li><Link href="/category/vacation">Vacation</Link></li>
                                <li><Link href="/category/work">Work</Link></li>
                                <li><Link href="/category/health">Health</Link></li>
                                <li><Link href="/category/family">Family</Link></li>
                                <li><Link href="/category/relationship">Relationship</Link></li>
                            </ul>
                        </li>
                        <li className="has-children">
                            <a href="#" onClick={(e) => e.preventDefault()}>Blog</a>
                            <ul className="sub-menu">
                                <li><Link href="/blog/video">Video Post</Link></li>
                                <li><Link href="/blog/audio">Audio Post</Link></li>
                                <li><Link href="/blog/standard">Standard Post</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/styles">Styles</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                    <button className="s-header__overlay-close close-mobile-menu">Close</button>
                </nav>
            </div>

            {/* Search Button */}
            <button className="s-header__search-trigger">
                <FaSearch size={20} />
            </button>
        </header>
    );
}

