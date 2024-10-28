"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Image from 'next/image'; // Importujemy komponent Image z next/image

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 bg-transparent backdrop-blur-md transition-all duration-300 shadow-lg ${openSans.className}`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo z pliku ENERGO.png */}
        <Link href="/" passHref>
          <div className="flex items-center">
            <Image
              src="/metadata/ENERGO.png"
              alt="Energo Expert Plus Logo"
              width={300}  // Szerokość logo
              height={150}  // Wysokość logo
              priority      // Ładowanie priorytetowe dla logo
            />
          </div>
        </Link>

        {/* Nawigacja desktopowa */}
        <nav className="hidden lg:flex space-x-10">
          <a
            href="/o-nas"
            className="text-white hover:text-gray-300 transition duration-200 text-lg font-semibold transform hover:scale-105"
          >
            Nasza Firma
          </a>
          <a
            href="/uslugi"
            className="text-white hover:text-gray-300 transition duration-200 text-lg font-semibold transform hover:scale-105"
          >
            Nasze Usługi
          </a>
          <a
            href="/realizacje"
            className="text-white hover:text-gray-300 transition duration-200 text-lg font-semibold transform hover:scale-105"
          >
            Realizacje
          </a>
          <a
            href="/referencje"
            className="text-white hover:text-gray-300 transition duration-200 text-lg font-semibold transform hover:scale-105"
          >
            Referencje
          </a>
          <a
            href="/kontakt"
            className="text-white hover:text-gray-300 transition duration-200 text-lg font-semibold transform hover:scale-105"
          >
            Kontakt
          </a>
          <a
            href="/oferta"
            className="text-white hover:text-gray-300 transition duration-200 text-lg font-semibold transform hover:scale-105"
          >
            Oferta
          </a>
        </nav>

        {/* Przycisk menu mobilnego */}
        <button onClick={toggleMenu} className="lg:hidden text-white">
          {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Menu mobilne */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-80 text-white p-4 absolute w-full top-full left-0 flex flex-col space-y-4 transition-all duration-300">
          <a
            href="/o-nas"
            className="text-white hover:text-gray-300 transition duration-200 font-semibold transform hover:scale-105"
            onClick={toggleMenu}
          >
            Nasza Firma
          </a>
          <a
            href="/uslugi"
            className="text-white hover:text-gray-300 transition duration-200 font-semibold transform hover:scale-105"
            onClick={toggleMenu}
          >
            Nasze Usługi
          </a>
          <a
            href="/realizacje"
            className="text-white hover:text-gray-300 transition duration-200 font-semibold transform hover:scale-105"
            onClick={toggleMenu}
          >
            Realizacje
          </a>
          <a
            href="/referencje"
            className="text-white hover:text-gray-300 transition duration-200 font-semibold transform hover:scale-105"
            onClick={toggleMenu}
          >
            Referencje
          </a>
          <a
            href="/kontakt"
            className="text-white hover:text-gray-300 transition duration-200 font-semibold transform hover:scale-105"
            onClick={toggleMenu}
          >
            Kontakt
          </a>
          <a
            href="/oferta"
            className="text-white hover:text-gray-300 transition duration-200 font-semibold transform hover:scale-105"
            onClick={toggleMenu}
          >
            Oferta
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
