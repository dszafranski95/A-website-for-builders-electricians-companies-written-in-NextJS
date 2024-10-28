// components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setIsImageVisible(true);
    }, 100);

    const textTimer = setTimeout(() => {
      setIsTextVisible(true);
    }, 500);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Tło obrazu z efektem paralaksy */}
      <div
        className={`absolute inset-0 transition-transform duration-1000 ${
          isImageVisible ? "scale-100" : "scale-110"
        } ${isImageVisible ? "animate-parallax" : ""}`}
      >
        <Image
          src="/images/hero2.webp" // Upewnij się, że ta ścieżka jest poprawna i obraz pasuje do tematyki elektrycznej
          alt="Elektryka przemysłowa"
          fill
          priority
          className={`object-cover z-[-1] transition-opacity duration-1000 ${
            isImageVisible ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Gradientowe przyciemnienie po bokach */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
        </div>
      </div>

      {/* Ciemna nakładka */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Treść tekstowa */}
      <div className="absolute inset-0 flex h-screen items-center justify-center">
        <div className="max-w-full px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
          <div
            className={`transition-opacity duration-1000 ease-in-out ${
              isTextVisible ? "opacity-100" : "opacity-0"
            } ${isTextVisible ? "animate-slide-up" : ""}`}
          >
            <h1 className="mt-10 text-5xl font-extrabold tracking-tight text-white sm:text-7xl drop-shadow-lg">
              <span className="text-blue-400">Zasilamy</span> Twój Świat
            </h1>
            {/* Dodano półprzezroczyste tło za tekstem */}
            <p className="mt-6 text-lg leading-8 text-gray-100 drop-shadow-lg bg-black bg-opacity-50 p-4 rounded">
              Profesjonalne instalacje elektryczne w domach i obiektach przemysłowych
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <Link href="/oferta">
                <button className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Nasza oferta →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Niestandardowe style */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        @keyframes parallax {
          from {
            background-position: center center;
          }
          to {
            background-position: center top;
          }
        }
        .animate-parallax {
          animation: parallax 30s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;
