import React from 'react';

const GallerySelection: React.FC = () => {
  return (
    <div className="h-screen h-full py-6 sm:py-8 lg:py-12 bg-gradient-to-r from-slate-900 to-blue-900">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
              Nasze Realizacje
            </h2>

            <p className="hidden max-w-screen-sm md:block text-gray-200">
              Zobacz niektóre z naszych najnowszych realizacji, obejmujących instalacje elektryczne w domach i obiektach przemysłowych. Gwarantujemy wysoką jakość i bezpieczeństwo.
            </p>
          </div>

          <a
            href="/realizacje"
            className="inline-block rounded-lg border border-blue-400 px-4 py-2 text-center text-sm font-semibold text-gray-300 transition duration-200 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 md:px-8 md:py-3 md:text-base"
          >
            Zobacz wszystkie
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* image - start */}
          <a
            href="/uslugi/instalacje-elektryczne-domowe"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="/images/electrician-3276851_1280.jpg"
              loading="lazy"
              alt="Instalacja elektryczna w domu jednorodzinnym"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-75"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm md:text-lg text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] font-semibold transition-transform transform group-hover:scale-105 group-hover:text-blue-300">
              <span className="bg-gradient-to-r from-blue-300 to-teal-200 bg-clip-text text-transparent">
                Domowa Instalacja
              </span>
            </span>
          </a>
          {/* image - end */}

          {/* image - start */}
          <a
            href="/uslugi/instalacje-elektryczne-przemyslowe"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="/images/switch-cabinet-2147370_1280.jpg"
              loading="lazy"
              alt="Instalacja elektryczna w obiekcie przemysłowym"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-75"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm md:text-lg text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] font-semibold transition-transform transform group-hover:scale-105 group-hover:text-blue-300">
              <span className="bg-gradient-to-r from-blue-300 to-teal-200 bg-clip-text text-transparent">
                Instalacja Przemysłowa
              </span>
            </span>
          </a>
          {/* image - end */}

          {/* image - start */}
          <a
            href="/uslugi/rozdzielnie-elektryczne"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="/images/switch-3199559_1280.jpg"
              loading="lazy"
              alt="Montaż rozdzielni elektrycznej"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-75"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm md:text-lg text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] font-semibold transition-transform transform group-hover:scale-105 group-hover:text-blue-300">
              <span className="bg-gradient-to-r from-blue-300 to-teal-200 bg-clip-text text-transparent">
                Rozdzielnia Elektryczna
              </span>
            </span>
          </a>
          {/* image - end */}

          {/* image - start */}
          <a
            href="/uslugi/serwis-konserwacja"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="/images/wire-1098059_1280.jpg"
              loading="lazy"
              alt="Modernizacja instalacji elektrycznej"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-75"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm md:text-lg text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] font-semibold transition-transform transform group-hover:scale-105 group-hover:text-blue-300">
              <span className="bg-gradient-to-r from-blue-300 to-teal-200 bg-clip-text text-transparent">
                Serwis i Konserwacja Instalacji Elektrycznych
              </span>
            </span>
          </a>
          {/* image - end */}
        </div>
      </div>
    </div>
  );
};

export default GallerySelection;
