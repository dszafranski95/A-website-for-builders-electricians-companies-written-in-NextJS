"use client";
import React from 'react';
import Link from 'next/link';

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 border-b-4 border-blue-500 inline-block px-4 pb-2">
          Usługi Elektryczne
        </h2>
      </div>

      {/* Sekcja dla usług domowych */}
      <div className="container mx-auto flex flex-col md:flex-row items-stretch gap-8 px-4">
        {/* Zdjęcie */}
        <div className="md:w-1/2 lg:flex lg:justify-end">
          <img
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            src="/images/electric-4198293_1280.jpg"
            alt="Usługi elektryczne dla domów"
          />
        </div>
        
        {/* Opis usług */}
        <div className="md:w-1/2 bg-slate-800 text-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-400">
            Szukasz ekspertów, którzy wykonają instalację elektryczną w Twoim domu?
          </h3>
          <p className="text-md mt-4 leading-relaxed">
            Nasi specjaliści zajmują się kompleksowymi instalacjami elektrycznymi dla domów jednorodzinnych. Dbamy o jakość, bezpieczeństwo oraz energooszczędność. Oferujemy pełne wsparcie – od projektu po realizację i serwis.
          </p>
          <Link href="/realizacje">
            <button className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
              Nasze Realizacje
            </button>
          </Link>
        </div>
      </div>

      {/* Sekcja dla usług przemysłowych */}
      <div className="container mx-auto flex flex-col md:flex-row items-stretch gap-8 px-4 mt-12">
        {/* Opis usług */}
        <div className="md:w-1/2 bg-slate-800 text-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-400">
            Profesjonalne Instalacje Elektryczne dla Przemysłu
          </h3>
          <p className="text-md mt-4 leading-relaxed">
            Oferujemy nowoczesne rozwiązania elektryczne dla zakładów przemysłowych. Nasze usługi obejmują projektowanie, instalację i serwis zaawansowanych systemów elektrycznych, dostosowanych do potrzeb Twojej firmy.
          </p>
          <Link href="/realizacje">
            <button className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
              Nasze Realizacje
            </button>
          </Link>
        </div>

        {/* Zdjęcie */}
        <div className="md:w-1/2 lg:flex lg:justify-start">
          <img
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            src="/images/switchgear-2069758_1280.jpg"
            alt="Instalacje elektryczne przemysłowe"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
