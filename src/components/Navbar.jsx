"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname to detect the active route


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname(); // Get the current path
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Function to add active class with underline
  const getLinkClasses = (route) => {
    return pathname === route
      ? "block mt-4 md:inline-block md:mt-0 text-blue-400"
      : "block mt-4 md:inline-block md:mt-0 hover:text-blue-400";
  };

  return (
    <nav className="p-3 md:ps-40">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Brand Logo */}
        <div className="font-bold text-black text-xl w-1/4">
          <Link href="/">BrandName</Link>
        </div>

        {/* Mobile Menu, Search Toggle & Login Toggle */}
        <div className="md:hidden flex gap-4">
          {/* Search Button for Mobile */}
          <button
            onClick={toggleSearch}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M18 10.5A7.5 7.5 0 1 1 10.5 3a7.5 7.5 0 0 1 7.5 7.5z"
              />
            </svg>
          </button>

          {/* Hamburger Menu Button */}
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Links Section (Visible in Medium and Larger Screens) */}
        <div className="w-2/4 hidden md:flex justify-center md:me-11 md:items-center">
          <div className="md:flex md:items-center md:justify-center">
            <div className="text-black md:flex md:gap-4">
              <Link href="/" className={getLinkClasses("/")}>
                Home
              </Link>
              <Link href="/blog" className={getLinkClasses("/blog")}>
                Blog
              </Link>
              <Link href="/about" className={getLinkClasses("/about")}>
                About
              </Link>
              <Link href="/addBlog" className={getLinkClasses("/addBlog")}>
                Add Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Search Input and Login Button for Large Screens */}
        <div className="hidden md:flex justify-between w-1/4 me-56 items-center">
       

          <Link href="/login" className="text-black hover:text-blue-300 px-4">
            Login
          </Link>
          
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-black border border-black rounded-full px-3 py-1 focus:outline-none"
          />
        </div>
      </div>

      {/* Search Input for Mobile (Visible if toggled) */}
      {isSearchOpen && (
        <div className="mt-4 flex justify-center md:hidden">
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-black border border-black rounded-full px-3 py-1 w-3/4 focus:outline-none"
          />
        </div>
      )}

      {/* Mobile Menu (Visible if toggled) */}
      {isOpen && (
        <div className="md:hidden bg-white flex justify-center p-4 mt-2 rounded-lg">
          <div className="flex  flex-col  gap-4 font-bold text-black">
            <Link href="/" className={getLinkClasses("/")}>
              Home
            </Link>
            <Link href="/blog" className={getLinkClasses("/blog")}>
              Blog
            </Link>
            <Link href="/contacts" className={getLinkClasses("/contacts")}>
              Contacts
            </Link>
            <Link href="/addBlog" className={getLinkClasses("/addBlog")}>
              Add Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
