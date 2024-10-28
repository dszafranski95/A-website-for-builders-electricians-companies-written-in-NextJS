import React from 'react';

const RozdzielnieElektryczneSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
      {/* Header Section */}
      <div className="pt-12 flex justify-between mb-12">
        <h1 className="text-4xl font-bold text-blue-400">Rozdzielnie Elektryczne</h1>
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
            Profesjonalne Rozdzielnie Elektryczne dla Twojego Domu i Firmy
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Rozdzielnie elektryczne są kluczowym elementem każdego systemu elektrycznego, zapewniającym bezpieczne i wydajne zarządzanie energią. W Energo Expert Plus specjalizujemy się w projektowaniu i montażu rozdzielni elektrycznych, które są dostosowane do specyficznych potrzeb naszych klientów.
          </p>
          <div className="grid gap-4 pt-8 border-t border-gray-800">
            <div>
              <h3 className="font-semibold text-gray-300">Bezpieczeństwo i Niezawodność</h3>
              <p className="text-gray-400">
                Nasze rozdzielnie zapewniają maksymalne bezpieczeństwo użytkowania oraz bezawaryjne działanie, dostosowane do aktualnych norm i standardów.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300">Kompleksowe Usługi</h3>
              <p className="text-gray-400">
                Oferujemy pełne wsparcie – od projektowania rozdzielni, przez montaż, aż po serwis i konserwację.
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div>
          <img
            src="/images/przemysl.jpg"
            alt="Rozdzielnie Elektryczne"
            className="rounded-lg h-96 object-cover"
          />
        </div>
      </div>

      {/* Benefits and Features */}
      <div className="grid gap-8 md:grid-cols-3 mt-16">
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-yellow-400 bg-yellow-800 rounded-full shadow-lg w-14 h-14 mb-4">1</p>
          <h3 className="text-2xl font-semibold mb-4">Rozdzielnie dla Domów Jednorodzinnych</h3>
          <p className="text-gray-400">
            Tworzymy rozdzielnie elektryczne dla domów jednorodzinnych, zapewniając bezpieczeństwo i zgodność z obowiązującymi standardami.
          </p>
        </div>
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14 mb-4">2</p>
          <h3 className="text-2xl font-semibold mb-4">Systemy dla Obiektów Przemysłowych</h3>
          <p className="text-gray-400">
            Specjalizujemy się w projektowaniu rozdzielni dla zakładów przemysłowych, hal produkcyjnych oraz magazynów.
          </p>
        </div>
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14 mb-4">3</p>
          <h3 className="text-2xl font-semibold mb-4">Nowoczesne Technologie</h3>
          <p className="text-gray-400">
            Korzystamy z najnowszych rozwiązań technologicznych, które zapewniają trwałość, wydajność i łatwość w zarządzaniu energią.
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-semibold text-gray-200 mb-4">Nasza Oferta</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Nasza oferta obejmuje projektowanie, montaż oraz serwis rozdzielni elektrycznych. Stawiamy na jakość i bezpieczeństwo, dostarczając rozwiązania, które sprostają najbardziej wymagającym potrzebom.
          </p>
          <div className="grid gap-6 pt-8 border-t border-gray-800">
            <div>
              <h3 className="font-semibold text-gray-300">Projektowanie Rozdzielni</h3>
              <p className="text-gray-400">
                Tworzymy indywidualne projekty rozdzielni, uwzględniając specyficzne wymagania i potrzeby klienta.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300">Serwis i Konserwacja</h3>
              <p className="text-gray-400">
                Oferujemy regularne przeglądy oraz konserwację rozdzielni, aby zapewnić ich niezawodność i bezpieczeństwo na długie lata.
              </p>
            </div>
          </div>
        </div>
        {/* Second Image or Graphic */}
        <div>
          <img
            src="/images/rozdzielnia.jpg"
            alt="Instalacja Rozdzielni Elektrycznych"
            className="rounded-lg h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RozdzielnieElektryczneSection;
