"use client";

import { Logs, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-50 text-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold font-mono">
          Kridha
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          <li className="hover:text-blue-600">
            <Link href="/">Home</Link>
          </li>

          <li className="hover:text-blue-600">
            <Link href="/collections">Categories</Link>
          </li>

          <li className="hover:text-blue-600">
            <Link href="/about">About</Link>
          </li>

          {/* Auth Dropdown */}
          <li className="relative">
            <Logs
              className="cursor-pointer hover:text-blue-600"
              onClick={() => setAuthOpen(!authOpen)}
            />

            {authOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white border rounded-lg shadow-lg">
                <Link
                  href="/login"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setAuthOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setAuthOpen(false)}
                >
                  Signup
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer">
          {menuOpen ? (
            <X onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 px-4 py-4 space-y-3">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/collections"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Categories
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            About
          </Link>

          <hr />

          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
