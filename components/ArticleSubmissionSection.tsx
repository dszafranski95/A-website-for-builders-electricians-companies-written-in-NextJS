import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ArticleSubmissionSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-blue-900 w-full pb-12">
      <div className="relative flex flex-col items-center space-y-8 max-w-7xl mx-auto px-8 py-24">
        <div className="text-center space-y-4">
          <h1 className="text-blue-400 font-extrabold text-4xl sm:text-5xl drop-shadow-lg">
            Skontaktuj się z nami
          </h1>
          <p className="text-xl text-gray-300 sm:text-2xl">
            Jesteśmy do Twojej dyspozycji!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-6">
          <a
            href="tel:782155430"
            className="flex items-center space-x-2 text-white hover:text-blue-500 transition duration-200 transform hover:scale-105"
          >
            <FaPhoneAlt className="text-3xl text-blue-400" />
            <span className="text-xl font-semibold sm:text-2xl">Maciej Kołodziej - 782-155-430</span>
          </a>
          <a
            href="mailto:kontakt@energo-expert.pl"
            className="flex items-center space-x-2 text-white hover:text-blue-500 transition duration-200 transform hover:scale-105"
          >
            <FaEnvelope className="text-3xl text-blue-400" />
            <span className="text-xl font-semibold sm:text-2xl">kontakt@energo-expert.pl</span>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-6">
          <a
            href="tel:732753715"
            className="flex items-center space-x-2 text-white hover:text-blue-500 transition duration-200 transform hover:scale-105"
          >
            <FaPhoneAlt className="text-3xl text-blue-400" />
            <span className="text-xl font-semibold sm:text-2xl">Bartłomiej Moskwa - 732-753-715</span>
          </a>
          <a
            href="mailto:zamowienia.bud@energo-expert.pl"
            className="flex items-center space-x-2 text-white hover:text-blue-500 transition duration-200 transform hover:scale-105"
          >
            <FaEnvelope className="text-3xl text-blue-400" />
            <span className="text-xl font-semibold sm:text-2xl">zamowienia.bud@energo-expert.pl</span>
          </a>
        </div>
        <div className="absolute inset-0 z-[-1]">
          <svg
            className="absolute bottom-0 left-0 w-full h-full opacity-20 transform scale-125"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#1e3a8a"
              d="M0,256L1440,128L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ArticleSubmissionSection;
