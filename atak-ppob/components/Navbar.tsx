"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

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
            {isAuthenticated && (
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Dashboard
              </Link>
            )}
            
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
                >
                  <span className="font-semibold">{user?.name}</span>
                  <span className="text-sm">▼</span>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2">
                    <Link
                      href="/dashboard/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Profil Saya
                    </Link>
                    <Link
                      href="/dashboard/balance"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Saldo: Rp {user?.balance.toLocaleString("id-ID")}
                    </Link>
                    <Link
                      href="/dashboard/transactions"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Riwayat Transaksi
                    </Link>
                    <hr className="my-2" />
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Keluar
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
              >
                Masuk
              </Link>
            )}
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
            {isAuthenticated && (
              <>
                <Link
                  href="/dashboard"
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  Profil Saya
                </Link>
                <Link
                  href="/dashboard/transactions"
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  Riwayat Transaksi
                </Link>
              </>
            )}
            
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left bg-red-600 text-white px-6 py-2 rounded-lg"
              >
                Keluar
              </button>
            ) : (
              <Link
                href="/login"
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-center"
              >
                Masuk
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
