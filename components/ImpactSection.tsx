"use client";

import React from 'react';
import { FaMapMarkedAlt, FaSmile, FaPhoneAlt } from 'react-icons/fa';

const ImpactSection: React.FC = () => {
  return (
    <div className="text-gray-900 pt-12 pb-24 px-6 w-full bg-gradient-to-r from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="bg-gradient-to-b from-blue-100 to-blue-300 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl pb-3">
          Bo klient dla nas jest najważniejszy.
        </h2>
        <p className="text-lg text-gray-300 mb-16">
          Zaufaj setkom zadowolonych klientów w całej Polsce
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Klienci w Całej Polsce */}
          <div className="flex flex-col items-center p-8 bg-gradient-to-r from-slate-900 to-blue-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <div className="mb-6 flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-1 transform hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <FaMapMarkedAlt className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="text-3xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">Cała Polska</div>
            <div className="text-gray-300">Działamy na terenie całego kraju</div>
          </div>

          {/* Zadowoleni Klienci */}
          <div className="flex flex-col items-center p-8 bg-gradient-to-r from-slate-900 to-blue-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <div className="mb-6 flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-1 transform hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <FaSmile className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="text-3xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">100 +</div>
            <div className="text-gray-300">Zadowolonych Klientów</div>
          </div>

          {/* Świetny Kontakt */}
          <div className="flex flex-col items-center p-8 bg-gradient-to-r from-slate-900 to-blue-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <div className="mb-6 flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-1 transform hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <FaPhoneAlt className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="text-3xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">Świetny Kontakt</div>
            <div className="text-gray-300">Szybka i profesjonalna obsługa klienta</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
