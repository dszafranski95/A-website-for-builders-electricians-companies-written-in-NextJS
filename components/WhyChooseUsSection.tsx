// energo-app\components\WhyChooseUsSection.tsx
"use client";

import { FaHome, FaIndustry, FaLightbulb, FaNetworkWired } from 'react-icons/fa';

const WhyChooseUsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="font-heading mb-4 bg-blue-800 text-white px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase">
            Energo Expert +
          </h2>
          <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight sm:text-4xl">
            Specjalizujemy się w elektryce przemysłowej i domowej.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 lg:mx-auto">
            Oferujemy kompleksowe usługi elektryczne, zapewniając najwyższą jakość oraz bezpieczeństwo. Nasze realizacje są dostosowane do potrzeb zarówno klientów indywidualnych, jak i firm.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* Instalacje Domowe */}
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <FaHome className="h-8 w-8" />
                </div>
                <p className="font-heading ml-16 text-lg leading-6 font-bold">Instalacje Domowe</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-300">
                Profesjonalne instalacje elektryczne dla domów, gwarantujące bezpieczeństwo i nowoczesne rozwiązania.
              </dd>
            </div>
            {/* Instalacje Przemysłowe */}
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <FaIndustry className="h-8 w-8" />
                </div>
                <p className="font-heading ml-16 text-lg leading-6 font-bold">Instalacje Przemysłowe</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-300">
                Nowoczesne rozwiązania elektryczne dla przemysłu, dostosowane do specyficznych potrzeb zakładów produkcyjnych.
              </dd>
            </div>
            {/* Rozdzielnie Elektryczne */}
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <FaNetworkWired className="h-8 w-8" />
                </div>
                <p className="font-heading ml-16 text-lg leading-6 font-bold">Rozdzielnie Elektryczne</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-300">
                Montaż i modernizacja rozdzielni elektrycznych, zapewniających niezawodne działanie i bezpieczeństwo.
              </dd>
            </div>
            {/* Oświetlenie i Automatyka */}
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <FaLightbulb className="h-8 w-8" />
                </div>
                <p className="font-heading ml-16 text-lg leading-6 font-bold">Oświetlenie i Automatyka</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-300">
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
