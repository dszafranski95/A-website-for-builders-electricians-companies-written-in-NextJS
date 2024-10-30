import React from 'react';

const InstalacjeElektryczneDomoweSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
      {/* Header Section */}
      <div className="flex justify-between mb-12 pt-12">
        <h1 className="text-4xl font-extrabold text-blue-400 tracking-tight sm:text-5xl lg:text-6xl drop-shadow-md">
          Instalacje Elektryczne Domowe
        </h1>
        <a
          href="/kontakt"
          className="self-start px-6 py-3 bg-blue-600 text-gray-100 font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Skontaktuj się z nami
        </a>
      </div>

      {/* Main Introduction */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-200 mb-6 sm:text-4xl lg:text-5xl">
            Dlaczego warto zainwestować w profesjonalne instalacje elektryczne?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Profesjonalne instalacje elektryczne są kluczowe dla bezpieczeństwa Twojego domu i rodziny. Zapewniają niezawodność, wydajność energetyczną i minimalizują ryzyko awarii. W Energo Expert Plus oferujemy kompleksowe usługi instalacji elektrycznych, dostosowane do Twoich potrzeb.
          </p>
          <div className="grid gap-4 pt-8 border-t border-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Bezpieczeństwo przede wszystkim</h3>
              <p className="text-gray-400">
                Nasze instalacje spełniają wszystkie aktualne normy bezpieczeństwa, aby zapewnić trwałość i niezawodność.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Wysoka jakość usług</h3>
              <p className="text-gray-400">
                Używamy jedynie najwyższej jakości materiałów, by zapewnić długotrwałą satysfakcję naszych klientów.
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div>
          <img
            src="/images/electric-1080585_1280.jpg"
            alt="Instalacja Elektryczna"
            className="rounded-lg h-96 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Benefits and Features */}
      <div className="grid gap-8 md:grid-cols-3 mt-16">
        {[
          {
            number: '1',
            color: 'text-green-400 bg-green-800',
            title: 'Bezpieczne Instalacje',
            description: 'Zapewniamy bezpieczeństwo dzięki najnowszym technologiom i rygorystycznym standardom jakości.',
          },
          {
            number: '2',
            color: 'text-indigo-400 bg-indigo-800',
            title: 'Indywidualne Podejście',
            description: 'Każdy projekt jest unikalny. Dopasowujemy instalacje do Twoich indywidualnych potrzeb.',
          },
          {
            number: '3',
            color: 'text-teal-400 bg-teal-800',
            title: 'Energooszczędne Rozwiązania',
            description: 'Stawiamy na energooszczędność, abyś mógł cieszyć się niższymi rachunkami i przyjaznością dla środowiska.',
          },
        ].map((feature, index) => (
          <div key={index} className="flex flex-col p-8 rounded-lg shadow-xl bg-gradient-to-br from-gray-900 to-black">
            <p className={`flex items-center justify-center text-4xl font-semibold ${feature.color} rounded-full shadow-lg w-14 h-14 mb-4`}>
              {feature.number}
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-gray-200 mb-6 sm:text-4xl lg:text-5xl">
            Nasza Oferta
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Oferujemy pełen zakres usług – od projektowania instalacji, przez montaż i serwis, po modernizację istniejących systemów. Każde rozwiązanie dostosowujemy do indywidualnych potrzeb klienta.
          </p>
          <div className="grid gap-6 pt-8 border-t border-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Projektowanie i Doradztwo</h3>
              <p className="text-gray-400">
                Oferujemy pełne wsparcie projektowe, dostosowując instalacje do Twoich wymagań.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Montaż i Realizacja</h3>
              <p className="text-gray-400">
                Realizujemy kompleksowe instalacje z dbałością o każdy detal.
              </p>
            </div>
          </div>
        </div>
        {/* Second Image */}
        <div>
          <img
            src="/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg"
            alt="Instalacja Elektryczna Domowa"
            className="rounded-lg h-96 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default InstalacjeElektryczneDomoweSection;
