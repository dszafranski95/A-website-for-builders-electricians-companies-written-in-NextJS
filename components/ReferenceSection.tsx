// components/ReferencesSection.tsx
"use client";

import Link from 'next/link';
import { FaFilePdf } from 'react-icons/fa';

const references = [
  { name: 'TBS Bielawa', link: '/referencje/referencje1.pdf' },
  { name: 'LINDOS', link: '/referencje/referencje2.pdf' },
  { name: 'FRECH TOOLS POLAND', link: '/referencje/referencje3.pdf' },
  { name: 'DAM-BUD', link: '/referencje/referencje4.pdf' },
  { name: 'DC ELECTRICS', link: '/referencje/referencje5.pdf' },
  { name: 'HANDPOL', link: '/referencje/referencje6.pdf' },
  { name: 'EL-PARTNER', link: '/referencje/referencje7.pdf' },
  { name: 'INVEST-PARK DEVELOPMENT', link: '/referencje/referencje8.pdf' },
  { name: 'PW PASEK', link: '/referencje/referencje9.pdf' },
  { name: 'PRYLIŃSKI SP.K', link: '/referencje/referencje10.pdf' },
];

const ReferencesSection = () => {
  return (
    <section id="references" className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg bg-gradient-to-r from-blue-700 to-blue-600">
            Nasze Referencje
          </div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200 mt-5 md:text-5xl">
            Zaufało nam już wiele firm.
          </h1>
          <p className="mt-4 text-xl text-gray-300 md:text-2xl max-w-2xl mx-auto">
            Przeglądaj nasze referencje, aby poznać nasze doświadczenie i jakość pracy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {references.map((reference, index) => (
            <div key={index} className="relative group transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-500 rounded-lg opacity-50 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
              <Link href={reference.link} target="_blank" rel="noopener noreferrer" className="relative">
                <div className="relative p-6 space-y-4 leading-none rounded-lg bg-gradient-to-r from-slate-900 to-blue-900 ring-1 ring-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-r from-slate-700 to-blue-700 shadow-lg group-hover:bg-gradient-to-l group-hover:from-blue-700 group-hover:to-teal-600 transition-all duration-300">
                      <FaFilePdf className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {reference.name}
                      </h3>
                      <p className="text-gray-400 text-md group-hover:text-gray-200 transition-colors duration-300">
                        Otwórz plik PDF
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
