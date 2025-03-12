"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faDribbble } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

interface HeroPost {
    id: string;
    title: string;
    author_id: string;
    hero_url: string;
}

export default function Hero() {
    const [heroes, setHeroes] = useState<HeroPost[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const fetchHeroes = async () => {
        try {
          const response = await axios.get<{ posts: HeroPost[] }>("http://localhost:4000/posts/heroes");
          setHeroes(response.data.posts);
        } catch (error) {
          console.error("Error fetching heroes:", error);
        }
      };

      fetchHeroes();
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroes.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroes.length) % heroes.length);
    };

    return (
        <section id="hero" className="s-hero">
            <div className="s-hero__slider">
                {heroes.map((slide, index) => (
                    <div key={slide.id} className={`s-hero__slide ${index === currentSlide ? "active" : "hidden"}`}>
                        <div className="s-hero__slide-bg" style={{ backgroundImage: `url(${slide.hero_url})` }}></div>
                        <div className="row s-hero__slide-content">
                            <div className="column">
                                <div className="s-hero__slide-meta">
                                    <span className="cat-links">
                                        {/*slide.categories.map((cat, i) => (
                                            <Link key={i} href="#">
                                                {cat}
                                            </Link>
                                        ))*/}
                                    </span>
                                    <span className="byline">
                                        Posted by <span className="author">
                                            <Link href="#">{slide.author}</Link>
                                        </span>
                                    </span>
                                </div>
                                <h1 className="s-hero__slide-text">
                                    <Link href="#">{slide.title}</Link>
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Social Links */}
            <div className="s-hero__social hide-on-mobile-small">
                <p>Follow</p>
                <span></span>
                <ul className="s-hero__social-icons">
                    <li>
                        <Link href="https://facebook.com" target="_blank">
                            <FontAwesomeIcon className="s-hero__social-icon" icon={faFacebookF} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://twitter.com" target="_blank">
                            <FontAwesomeIcon className="s-hero__social-icon" icon={faTwitter} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://instagram.com" target="_blank">
                            <FontAwesomeIcon className="s-hero__social-icon" icon={faInstagram} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://dribbble.com" target="_blank">
                            <FontAwesomeIcon className="s-hero__social-icon" icon={faDribbble} />
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Navigation Arrows */}
            <div className="nav-arrows s-hero__nav-arrows">
                <button className="s-hero__arrow-prev" onClick={prevSlide}>
                    <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                        <path d="M1.5 7.5l4-4m-4 4l4 4m-4-4H14" stroke="currentColor"></path>
                    </svg>
                </button>
                <button className="s-hero__arrow-next" onClick={nextSlide}>
                    <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                        <path d="M13.5 7.5l-4-4m4 4l-4 4m4-4H1" stroke="currentColor"></path>
                    </svg>
                </button>
            </div>

            <style jsx>{`
                .s-hero__slide {
                    display: none;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                }
                .s-hero__slide.active {
                    display: block;
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}

