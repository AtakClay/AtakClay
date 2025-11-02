"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <Logo className="w-10 h-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Atak PPOB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Beranda
            </Link>
            <Link
              href="/ppob"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              PPOB
            </Link>
            <Link
              href="/topup-game"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Topup Game
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              Masuk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-gray-700 transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-700 transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-700 transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Beranda
            </Link>
            <Link
              href="/ppob"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              PPOB
            </Link>
            <Link
              href="/topup-game"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Topup Game
            </Link>
            <Link
              href="/dashboard"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard"
              className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-center"
            >
              Masuk
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
