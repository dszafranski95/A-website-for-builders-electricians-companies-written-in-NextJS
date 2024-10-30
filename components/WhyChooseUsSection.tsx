"use client";

import { FaHome, FaIndustry, FaLightbulb, FaNetworkWired } from 'react-icons/fa';

const WhyChooseUsSection = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="bg-blue-800 text-white px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase shadow-lg transform transition-transform hover:scale-105">
            Energo Expert +
          </h2>
          <p className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl text-blue-200 bg-gradient-to-b from-blue-100 to-blue-300 bg-clip-text text-transparent">
            Specjalizujemy się w elektryce przemysłowej i domowej.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 lg:mx-auto">
            Oferujemy kompleksowe usługi elektryczne, zapewniając najwyższą jakość oraz bezpieczeństwo. Nasze realizacje są dostosowane do potrzeb zarówno klientów indywidualnych, jak i firm.
          </p>
        </div>

        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-10">
            {/* Instalacje Domowe */}
            <div className="relative group">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <FaHome className="h-8 w-8" />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-blue-300 group-hover:text-blue-400 transition-colors duration-300">
                  Instalacje Domowe
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                Profesjonalne instalacje elektryczne dla domów, gwarantujące bezpieczeństwo i nowoczesne rozwiązania.
              </dd>
            </div>

            {/* Instalacje Przemysłowe */}
            <div className="relative group">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <FaIndustry className="h-8 w-8" />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-blue-300 group-hover:text-blue-400 transition-colors duration-300">
                  Instalacje Przemysłowe
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                Nowoczesne rozwiązania elektryczne dla przemysłu, dostosowane do specyficznych potrzeb zakładów produkcyjnych.
              </dd>
            </div>

            {/* Rozdzielnie Elektryczne */}
            <div className="relative group">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <FaNetworkWired className="h-8 w-8" />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-blue-300 group-hover:text-blue-400 transition-colors duration-300">
                  Rozdzielnie Elektryczne
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                Montaż i modernizacja rozdzielni elektrycznych, zapewniających niezawodne działanie i bezpieczeństwo.
              </dd>
            </div>

            {/* Oświetlenie i Automatyka */}
            <div className="relative group">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <FaLightbulb className="h-8 w-8" />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-blue-300 group-hover:text-blue-400 transition-colors duration-300">
                  Oświetlenie i Automatyka
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                Inteligentne systemy oświetleniowe i automatyka budynkowa, które zwiększają komfort oraz oszczędność energii.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
