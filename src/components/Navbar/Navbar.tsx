"use client"

import SectionPadding from "@/layouts/SectionPadding"
import type React from "react"
import { useState } from "react"
import Logo from "../Logo"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const navs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
]

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <SectionPadding className="sticky top-0 py-3 z-[999] px-4 sm:px-6 md:px-10">
      <div className="border rounded-2xl px-4 sm:px-6 py-3 flex justify-between items-center shadow-md bg-background/50 backdrop-blur-2xl">
        <Logo />
        <ul className="hidden md:flex gap-6 lg:gap-10 items-center">
          {navs.map((nav, index) => (
            <li key={index}>
              <a href={nav.link} className="text-sm text-gray-700 hover:text-gray-900">
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Link to="/auth/login">
            <Button className="rounded-full cursor-pointer px-6">Login</Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2 border rounded-2xl px-4 py-3 shadow-md bg-background/50 backdrop-blur-2xl">
          <ul className="flex flex-col gap-3">
            {navs.map((nav, index) => (
              <li key={index}>
                <a
                  href={nav.link}
                  className="text-sm text-gray-700 hover:text-gray-900 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
          <Link to="/auth/login" className="block mt-3">
            <Button className="rounded-full cursor-pointer px-6 w-full">Login</Button>
          </Link>
        </div>
      )}
    </SectionPadding>
  )
}

export default Navbar

