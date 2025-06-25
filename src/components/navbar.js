import './navbar.css';
import React, { useRef } from 'react';

export default function Navbar() {
  const navsRef = useRef(null);
  const sun = document.querySelector('.fa-sun');


  function toggleNavbar(e) {
    e.preventDefault();
    navsRef.current.classList.toggle('active');
  }

  function toggleDarkMode(){
    if(sun.classList.contains('fa-sun')){
      sun.classList.remove('fa-sun');
      sun.classList.add('fa-moon');
    }
    else if(sun.classList.contains('fa-moon')){
      sun.classList.remove('fa-moon');
      sun.classList.add('fa-sun')
    }


  }


  return (
    <nav className="navbar">
      <h1>Portfolio</h1>

      <ul className="navs" ref={navsRef}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="dark"><i class="fa-solid fa-sun" onClick={toggleDarkMode}></i></div>

      <i className="fa-solid fa-bars" onClick={toggleNavbar}></i>
    </nav>
  );
}
