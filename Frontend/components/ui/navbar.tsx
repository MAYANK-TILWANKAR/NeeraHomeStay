"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "./navbarStyles.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#aboutUs", text: "About us" },
    { href: "#host", text: "Your Host" },
    { href: "#gallery", text: "Gallery" },
    { href: "#services", text: "Services" },
    { href: "#nearbyAttraction", text: "Attractions" },
    { href: "#review", text: "Reviews" },
  ];

  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <LogoIcon className="h-8 w-8" />
          <span className="text-xl font-bold">Neera</span>
        </div>

        <div className="menu-icons" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="flex space-x-4">
            {navLinks.map(({ href, text }) => (
              <Link
                key={href}
                href={href}
                className="text-white"
                prefetch={false}>
                {text}
              </Link>
            ))}
          </div>
        </ul>
        <a href="#contactUs">
          <Button variant="default" className="bg-yellow-500 text-white">
            Get A Quote
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

interface IconProps {
  className?: string;
}

function LogoIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}
