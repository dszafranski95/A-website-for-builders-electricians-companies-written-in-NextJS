"use client";

import Link from 'next/link';
import { FaHome, FaIndustry, FaSolarPanel, FaServer, FaLightbulb, FaTools } from 'react-icons/fa';

const services = [
  {
    name: 'Instalacje Elektryczne Domowe',
    description: 'Profesjonalne instalacje elektryczne w domach jednorodzinnych i mieszkaniach.',
    icon: <FaHome className="w-8 h-8 text-white" />,
    link: '/uslugi/instalacje-elektryczne-domowe',
  },
  {
    name: 'Instalacje Elektryczne Przemysłowe',
    description: 'Nowoczesne systemy elektryczne dla zakładów przemysłowych i firm.',
    icon: <FaIndustry className="w-8 h-8 text-white" />,
    link: '/uslugi/instalacje-elektryczne-przemyslowe',
  },
  {
    name: 'Panele Fotowoltaiczne',
    description: 'Ekologiczne i oszczędne instalacje fotowoltaiczne dla domów i firm.',
    icon: <FaSolarPanel className="w-8 h-8 text-white" />,
    link: '/uslugi/panele-fotowoltaiczne',
  },
  {
    name: 'Rozdzielnie Elektryczne',
    description: 'Projektowanie i montaż rozdzielni elektrycznych dla domów i zakładów przemysłowych.',
    icon: <FaServer className="w-8 h-8 text-white" />,
    link: '/uslugi/rozdzielnie-elektryczne',
  },
  {
    name: 'Oświetlenie i Automatyka Budynkowa',
    description: 'Inteligentne systemy oświetlenia i automatyki dla nowoczesnych budynków.',
    icon: <FaLightbulb className="w-8 h-8 text-white" />,
    link: '/uslugi/oswietlenie-automatyka',
  },
  {
    name: 'Serwis i Konserwacja',
    description: 'Regularne przeglądy, serwis i konserwacja instalacji elektrycznych.',
    icon: <FaTools className="w-8 h-8 text-white" />,
    link: '/uslugi/serwis-konserwacja',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 space-y-5 text-center">
          <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg bg-gradient-to-r from-blue-700 to-cyan-600 cursor-pointer hover:opacity-90 transition-opacity duration-200">
            Nasze Usługi
          </div>
          <h1 className="mb-5 text-3xl font-extrabold text-white md:text-5xl">
            Co możemy dla Ciebie zrobić?
          </h1>
          <p className="text-xl text-gray-300 md:text-2xl max-w-2xl mx-auto">
            Specjalizujemy się w instalacjach elektrycznych, automatyce budynkowej oraz fotowoltaice.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="relative group transform transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 transition-opacity duration-500 rounded-lg opacity-50 bg-gradient-to-r from-blue-500 to-blue-700 blur-md group-hover:opacity-75"></div>
              <div className="relative p-8 space-y-4 leading-none rounded-lg bg-gradient-to-r from-slate-900 to-slate-950 ring-1 ring-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-lg bg-gray-900 shadow-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{service.name}</h3>
                    <p className="text-gray-400 text-md">Dowiedz się więcej</p>
                  </div>
                </div>
                <p className="mt-4 leading-normal text-gray-300 text-md">{service.description}</p>
                <Link href={service.link}>
                  <button className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none transition duration-200 text-center">
                    Dowiedz się
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
