import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Referencje naszych Klientów
            </h1>
            <p className="text-xl mb-8">
              Sprawdź, co nasi zadowoleni klienci mówią o naszych usługach! Nasze zaangażowanie i profesjonalizm potwierdzają liczne referencje od klientów z całej Polski.
            </p>
            <div className="flex gap-4">
              {/* Przycisk do strony Referencje */}
              <a
                href="/referencje"
                className="bg-white text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
              >
                Zobacz Referencje
              </a>
              {/* Przycisk kontaktowy */}
              <a
                href="/kontakt"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
              >
                Chcesz się z nami skontaktować?
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-12">
            <img
              src="/images/finance-4858797_1280.jpg"
              alt="Referencje Klientów"
              className="rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
