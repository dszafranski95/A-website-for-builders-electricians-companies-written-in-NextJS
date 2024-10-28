import React from 'react';
import Link from 'next/link';

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full mx-auto py-10 bg-slate-900 text-white">
      <div className="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-blue-500">
        Usługi Elektryczne
      </div>

      {/* Sekcja dla usług domowych */}
      <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-6 xs:gap-4 justify-center items-stretch mt-6">
        {/* Zdjęcie */}
        <div className="lg:w-[50%] xs:w-full hidden md:block">
          <img
            className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
            src="/images/electric-4198293_1280.jpg"
            alt="Usługi elektryczne dla domów"
          />
        </div>
        {/* Opis usług */}
        <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-800 text-gray-300 md:p-6 xs:p-4 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-blue-400">
            Szukasz ekspertów, którzy wykonają instalację elektryczną w Twoim domu?
          </h2>
          <p className="text-md mt-4">
            Nasi specjaliści zajmują się kompleksowymi instalacjami elektrycznymi dla domów jednorodzinnych. Dbamy o jakość, bezpieczeństwo oraz energooszczędność. Oferujemy pełne wsparcie – od projektu po realizację i serwis.
          </p>
          <Link href="/realizacje">
            <button className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none transition-colors duration-200">
              Nasze Realizacje
            </button>
          </Link>
        </div>
      </div>
      
      {/* Sekcja dla usług przemysłowych */}
      <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-6 xs:gap-4 justify-center items-stretch mt-8">
        {/* Opis usług */}
        <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-800 text-gray-300 md:p-6 xs:p-4 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-blue-400">
            Profesjonalne Instalacje Elektryczne dla Przemysłu
          </h2>
          <p className="text-md mt-4">
            Oferujemy nowoczesne rozwiązania elektryczne dla zakładów przemysłowych. Nasze usługi obejmują projektowanie, instalację i serwis zaawansowanych systemów elektrycznych, dostosowanych do potrzeb Twojej firmy.
          </p>
          <Link href="/realizacje">
            <button className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none transition-colors duration-200">
              Nasze Realizacje
            </button>
          </Link>
        </div>
        {/* Zdjęcie */}
        <div className="lg:w-[50%] xs:w-full hidden md:block">
          <img
            className="lg:rounded-t-lg xs:rounded-sm"
            src="/images/switchgear-2069758_1280.jpg"
            alt="Instalacje elektryczne przemysłowe"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
