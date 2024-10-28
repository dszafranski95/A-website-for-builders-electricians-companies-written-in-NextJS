// components/ContactForm.tsx
"use client";
import Image from 'next/image';
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ArticleSubmissionSection from '@/components/ArticleSubmissionSection';

const ContactForm = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  return (
    <div className="font-sans bg-gray-900 text-white">
      {/* Sekcja informacji kontaktowych */}
      <ArticleSubmissionSection />

      {/* Obrazek lub baner */}
      <div className="relative w-full h-80">
        <Image
          src="/images/hero.jpg"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      </div>

      {/* Formularz kontaktowy */}
      <div className="-mt-40 mb-6 px-4">
        <div className="mx-auto max-w-6xl shadow-xl p-8 relative bg-gray-800 rounded-md">
          <h2 className="text-2xl text-blue-400 font-bold">Zapytanie o produkt lub usługę</h2>

          <form className="mt-8 grid sm:grid-cols-2 gap-6">
            {/* Pola formularza */}
            <div>
              <label className="text-gray-300 text-sm block mb-2">Twoje Imię</label>
              <input
                type="text"
                placeholder="Wpisz imię"
                className="w-full rounded-md py-2.5 px-4 border border-gray-700 bg-gray-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm block mb-2">Twój E-mail</label>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full rounded-md py-2.5 px-4 border border-gray-700 bg-gray-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm block mb-2">Twój Numer Telefonu</label>
              <input
                type="tel"
                placeholder="Numer telefonu"
                className="w-full rounded-md py-2.5 px-4 border border-gray-700 bg-gray-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm block mb-2">Strona Internetowa</label>
              <input
                type="text"
                placeholder="Strona internetowa"
                className="w-full rounded-md py-2.5 px-4 border border-gray-700 bg-gray-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm block mb-2">Firma</label>
              <input
                type="text"
                placeholder="Firma"
                className="w-full rounded-md py-2.5 px-4 border border-gray-700 bg-gray-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm block mb-2">Temat</label>
              <input
                type="text"
                placeholder="Temat"
                className="w-full rounded-md py-2.5 px-4 border border-gray-700 bg-gray-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-full">
              <label className="text-gray-300 text-sm block mb-2">Wiadomość</label>
              <textarea
                placeholder="Wiadomość"
                rows={6}
                className="w-full rounded-md px-4 py-2.5 border border-gray-700 bg-gray-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="flex items-center col-span-full">
              <input
                id="checkbox1"
                type="checkbox"
                checked={agreeTerms}
                onChange={handleCheckboxChange}
                className="w-4 h-4 mr-3 shrink-0 text-blue-500 bg-gray-900 border-gray-700 focus:ring-blue-500"
              />
              <label htmlFor="checkbox1" className="text-sm text-gray-300">
                Jestem człowiekiem ✅

              </label>
            </div>

            <button
              type="submit"
              className="text-white w-max bg-blue-600 hover:bg-blue-500 tracking-wide rounded-md text-sm px-6 py-3 mt-4 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!agreeTerms}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                />
              </svg>
              Wyślij Wiadomość
            </button>
          </form>
        </div>
      </div>

      {/* Mapa z lokalizacją firmy */}
      <div className="mb-12 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tutaj znajduje się nasza firma</h2>
          <p className="text-gray-300 mb-6">Zapraszamy do odwiedzenia nas w naszym biurze</p>
          <div className="w-full h-80 rounded-md overflow-hidden shadow-xl animate-fadeIn">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.291113705967!2d16.604114276208396!3d50.67333766803454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e37e312e92a9d%3A0xa857cd8bb83c70e4!2sOstroszowicka%208%2C%2058-260%20Bielawa!5e0!3m2!1spl!2spl!4v1697048362584!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
