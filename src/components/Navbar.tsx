'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Priyank</div>

        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={pathname === link.path ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
}
