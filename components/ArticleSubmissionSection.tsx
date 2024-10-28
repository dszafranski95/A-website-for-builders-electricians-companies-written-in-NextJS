// components/ArticleSubmissionSection.tsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ArticleSubmissionSection: React.FC = () => {
  return (
    <section className="bg-gray-900 w-full">
      <div className="relative flex flex-col items-center space-y-8 max-w-7xl mx-auto px-8 py-24">
        <div className="text-center space-y-4">
          <h1 className="text-blue-400 font-bold text-4xl">
            Skontaktuj się z nami
          </h1>
          <p className="text-xl text-gray-300">
            Jesteśmy do Twojej dyspozycji
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-6">
          <a href="tel:+48123456789" className="flex items-center space-x-2 text-white hover:text-blue-500">
            <FaPhoneAlt className="text-2xl text-blue-400" />
            <span className="text-xl">+48 123 456 789</span>
          </a>
          <a href="mailto:kontakt@twojafirma.pl" className="flex items-center space-x-2 text-white hover:text-blue-500">
            <FaEnvelope className="text-2xl text-blue-400" />
            <span className="text-xl">kontakt@twojafirma.pl</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticleSubmissionSection;
