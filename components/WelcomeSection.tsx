import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="bg-gradient-to-b from-blue-100 to-blue-300 bg-clip-text font-bold text-transparent text-4xl sm:text-5xl leading-tight mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
              Referencje naszych Klientów
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed">
              Sprawdź, co nasi zadowoleni klienci mówią o naszych usługach! Nasze zaangażowanie i profesjonalizm potwierdzają liczne referencje od klientów z całej Polski.
            </p>
            <div className="flex gap-4">
              {/* Przycisk do strony Referencje */}
              <a
                href="/referencje"
                className="bg-white text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 font-semibold"
              >
                Zobacz Referencje
              </a>
              {/* Przycisk kontaktowy */}
              <a
                href="/kontakt"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-blue-400 transition-transform transform hover:scale-105 duration-300 font-semibold"
              >
                Chcesz się z nami skontaktować?
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-12">
            <img
              src="/images/finance-4858797_1280.jpg"
              alt="Referencje Klientów"
              className="rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
