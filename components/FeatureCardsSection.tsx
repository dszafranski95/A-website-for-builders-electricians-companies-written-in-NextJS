// energo-app\components\FeatureCardsSection.tsx
"use client";

import Image from 'next/image';
import { FaEnvelope, FaBuilding, FaSearch } from 'react-icons/fa';

const features = [
  {
    title: 'Dane Kontaktowe',
    description: (
      <>
        <p>Email: <a href="mailto:kontakt@energoexpertplus.pl" className="text-blue-500 hover:underline">kontakt@energoexpertplus.pl</a></p>
        <p>Telefon: <a href="tel:+48123456789" className="text-blue-500 hover:underline">+48 123 456 789</a></p>
        <p>Godziny pracy: Pon-Pt 8:00 - 17:00</p>
      </>
    ),
    icon: <FaEnvelope className="h-6 w-6 text-white" />,
  },
  {
    title: 'Dane Firmy',
    description: (
      <>
        <p>Nazwa: Energo Expert Plus Sp. z o.o.</p>
        <p>Adres: ul. Przykładowa 12, 00-001 Warszawa, Polska</p>
        <p>NIP: 123-456-78-90</p>
        <p>REGON: 987654321</p>
      </>
    ),
    icon: <FaBuilding className="h-6 w-6 text-white" />,
  },
  {
    title: 'Weryfikacja Firmy',
    description: (
      <>
        <p>Sprawdź naszą firmę w rejestrze KRS:</p>
        <a 
          href="https://ems.ms.gov.pl/krs/wyszukiwaniepodmiotu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Weryfikacja w KRS
        </a>
      </>
    ),
    icon: <FaSearch className="h-6 w-6 text-white" />,
  },
];

const FeatureCardsSection = () => {
  return (
    <div className="bg-black">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-gray-300 bg-gray-900"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Informacje o Firmie
          </span>
          <h2 className="block w-full font-bold text-white text-3xl sm:text-4xl">
            Kontakt i Dane Rejestrowe Energo Expert Plus
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl text-center font-medium leading-relaxed tracking-wide text-gray-300">
            Znajdź wszystkie niezbędne informacje dotyczące kontaktu oraz weryfikacji naszej firmy.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-md border border-neutral-800 bg-gray-800 p-8 text-center shadow"
            >
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-600 border border-blue-500"
              >
                {feature.icon}
              </div>
              <h3 className="mt-6 text-white">{feature.title}</h3>
              <div className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-300">
                {feature.description}
              </div>
            </div>
          ))}
        </div>

        {/* Sekcja z mapą */}
        <div className="mt-16 max-w-5xl mx-auto p-6 rounded-lg border border-neutral-800 bg-gray-800 shadow-lg">
          <h3 className="text-2xl font-bold text-white text-center mb-4">Lokalizacja Naszej Firmy</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.6978042380374!2d16.6057825!3d50.6720213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e37e35922bfa7%3A0x3a8fcb97a46209b2!2sOstroszowicka%2C%2058-260%20Bielawa!5e0!3m2!1spl!2spl!4v1698159954245!5m2!1spl!2spl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Nowy gradient w odcieniach niebiesko-białych */}
        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundImage:
              'linear-gradient(to right top, rgba(0, 123, 255, 0.2) 0%, transparent 50%, transparent 100%)',
            borderColor: 'rgba(0, 123, 255, 0.2)',
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              'linear-gradient(to left top, rgba(0, 150, 255, 0.2) 0%, transparent 50%, transparent 100%)',
            borderColor: 'rgba(0, 150, 255, 0.2)',
          }}
        ></div>
      </section>
    </div>
  );
};

export default FeatureCardsSection;
