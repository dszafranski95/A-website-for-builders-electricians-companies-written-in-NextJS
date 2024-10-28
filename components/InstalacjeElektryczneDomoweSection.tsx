import React from 'react';

const InstalacjeElektryczneDomoweSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
      {/* Header Section */}
      <div className="flex justify-between mb-12 pt-12">
        <h1 className="text-4xl font-bold text-blue-400">Instalacje Elektryczne Domowe</h1>
        <a
          href="/kontakt"
          className="self-start px-5 py-2 text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-blue-500 from-gray-900 to-black"
        >
          Skontaktuj się z nami
        </a>
      </div>

      {/* Main Introduction */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-semibold text-gray-200 mb-4">
            Dlaczego warto zainwestować w profesjonalne instalacje elektryczne?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Profesjonalne instalacje elektryczne są kluczowe dla bezpieczeństwa Twojego domu i rodziny. Dobrze wykonana instalacja zapewnia niezawodność, wydajność energetyczną oraz minimalizuje ryzyko awarii i zagrożeń elektrycznych. W Energo Expert Plus oferujemy kompleksowe usługi instalacji elektrycznych dla domów jednorodzinnych, dostosowane do Twoich potrzeb.
          </p>
          <div className="grid gap-4 pt-8 border-t border-gray-800">
            <div>
              <h3 className="font-semibold text-gray-300">Bezpieczeństwo przede wszystkim</h3>
              <p className="text-gray-400">
                Nasze instalacje spełniają wszystkie aktualne normy bezpieczeństwa. Dbamy o to, aby każda instalacja była bezpieczna, trwała i niezawodna.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300">Wysoka jakość usług</h3>
              <p className="text-gray-400">
                Używamy tylko najwyższej jakości materiałów i komponentów, aby zapewnić długotrwałą satysfakcję naszych klientów.
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div>
          <img
            src="/images/electric-1080585_1280.jpg"
            alt="Instalacja Elektryczna"
            className="rounded-lg h-96 object-cover"
          />
        </div>
      </div>

      {/* Benefits and Features */}
      <div className="grid gap-8 md:grid-cols-3 mt-16">
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14 mb-4">1</p>
          <h3 className="text-2xl font-semibold mb-4">Bezpieczne Instalacje</h3>
          <p className="text-gray-400">
            Zapewniamy pełne bezpieczeństwo dzięki stosowaniu najnowszych technologii oraz rygorystycznych standardów jakości.
          </p>
        </div>
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14 mb-4">2</p>
          <h3 className="text-2xl font-semibold mb-4">Indywidualne Podejście</h3>
          <p className="text-gray-400">
            Każdy projekt jest dla nas wyjątkowy. Przygotowujemy instalacje dopasowane do Twoich indywidualnych potrzeb i oczekiwań.
          </p>
        </div>
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14 mb-4">3</p>
          <h3 className="text-2xl font-semibold mb-4">Energooszczędne Rozwiązania</h3>
          <p className="text-gray-400">
            Stawiamy na energooszczędność, abyś mógł cieszyć się niższymi rachunkami za prąd oraz przyjaznością dla środowiska.
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-semibold text-gray-200 mb-4">Nasza Oferta</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            W naszej ofercie znajdziesz pełen zakres usług instalacji elektrycznych – od projektowania instalacji, przez montaż i serwis, po modernizację istniejących systemów. Dostosowujemy nasze rozwiązania do indywidualnych potrzeb każdego klienta, dbając o komfort i bezpieczeństwo.
          </p>
          <div className="grid gap-6 pt-8 border-t border-gray-800">
            <div>
              <h3 className="font-semibold text-gray-300">Projektowanie i Doradztwo</h3>
              <p className="text-gray-400">
                Oferujemy pełne wsparcie w zakresie projektowania instalacji, dostosowując je do Twoich wymagań.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300">Montaż i Realizacja</h3>
              <p className="text-gray-400">
                Realizujemy kompleksowe instalacje od A do Z, dbając o każdy detal.
              </p>
            </div>
          </div>
        </div>
        {/* Second Image or Graphic */}
        <div>
          <img
            src="/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg"
            alt="Instalacja Elektryczna Domowa"
            className="rounded-lg h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default InstalacjeElektryczneDomoweSection;
