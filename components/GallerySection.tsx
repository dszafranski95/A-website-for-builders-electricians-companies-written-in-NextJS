import React from 'react';

const GallerySelection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 h-screen h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
              Nasze Realizacje
            </h2>

            <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              Zobacz niektóre z naszych najnowszych realizacji, obejmujących instalacje elektryczne w domach i obiektach przemysłowych. Gwarantujemy wysoką jakość i bezpieczeństwo.
            </p>
          </div>

          <a
            href="/realizacje"
            className="inline-block rounded-lg border px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            Zobacz wszystkie
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* image - start */}
          <a
            href="/uslugi/instalacje-elektryczne-domowe"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="/images/electrician-3276851_1280.jpg"
              loading="lazy"
              alt="Instalacja elektryczna w domu jednorodzinnym"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Domowa Instalacja</span>
          </a>
          {/* image - end */}

          {/* image - start */}
          <a
            href="/uslugi/instalacje-elektryczne-przemyslowe"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="/images/switch-cabinet-2147370_1280.jpg"
              loading="lazy"
              alt="Instalacja elektryczna w obiekcie przemysłowym"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Instalacja Przemysłowa</span>
          </a>
          {/* image - end */}

          {/* image - start */}
          <a
            href="/uslugi/rozdzielnie-elektryczne"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="/images/switch-3199559_1280.jpg"
              loading="lazy"
              alt="Montaż rozdzielni elektrycznej"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Rozdzielnia Elektryczna</span>
          </a>
          {/* image - end */}

          {/* image - start */}
          <a
            href="/uslugi/serwis-konserwacja"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="/images/wire-1098059_1280.jpg"
              loading="lazy"
              alt="Modernizacja instalacji elektrycznej"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Serwis i Konserwacja Instalacji Elektrycznych
            </span>
          </a>
          {/* image - end */}
        </div>
      </div>
    </div>
  );
};

export default GallerySelection;
