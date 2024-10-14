"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import {useState} from "react"
import "./navbarStyles.css"
import { FaRegFileArchive } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }


    return (
        
        <nav className='navbar'>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <LogInIcon className="h-8 w-8" />
            <span className="text-xl font-bold">Neera</span>
          </div>

          <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

          <ul className={clicked ? "navbar-menu active" : "navbar-menu"}>
          <div className="flex space-x-4">
            <Link href="#aboutUs" className="text-white" prefetch={false}>
              About us
            </Link>
            <Link href="#host" className="text-white" prefetch={false}>
              Your Host
            </Link>
            <Link href="#gallery" className="text-white" prefetch={false}>
              Gallery
            </Link>
            <Link href="#services" className="text-white" prefetch={false}>
              Services
            </Link>
            <Link href="#nearbyAttraction" className="text-white" prefetch={false}>
              Attractions
            </Link>
            <Link href="#review" className="text-white" prefetch={false}>
              Reviews
            </Link>
          </div>
          </ul>
          <a href="#contactUs"><Button variant="default" className="bg-yellow-500 text-white">
            Get A Quote
          </Button></a>
        </div>
        </nav>
    )}


    export default Navbar;





    

interface IconProps {
    className?: string
  }
    function LogInIcon(props: IconProps) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" x2="3" y1="12" y2="12" />
          </svg>
        )
      }

