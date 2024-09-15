"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for Hamburger

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.navbarLogo}>
          FSD Club
        </Link>
        <div className={styles.mobileIcon} onClick={toggleMenu}>
          {menuOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
        </div>
        <ul className={`${styles.navbarMenu} ${menuOpen ? styles.active : ''}`}>
          {['About', 'Technologies', 'Projects', 'Events', 'Gallery', 'Board Members'].map((section) => (
            <li className={styles.navbarItem} key={section}>
              <Link href={`#${section.toLowerCase().replace(' ', '-')}`} className={styles.navbarLink}>
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

