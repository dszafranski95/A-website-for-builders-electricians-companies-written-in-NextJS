import React from 'react';

const InstalacjeElektrycznePrzemysloweSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
      {/* Header Section */}
      <div className="flex justify-between mb-12 pt-12">
        <h1 className="text-4xl font-extrabold text-blue-400 tracking-tight sm:text-5xl lg:text-6xl drop-shadow-md">
          Instalacje Elektryczne Przemysłowe
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
            Dlaczego warto zainwestować w profesjonalne instalacje elektryczne przemysłowe?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Instalacje elektryczne w obiektach przemysłowych wymagają szczególnej uwagi i doświadczenia, aby zapewnić niezawodność, bezpieczeństwo oraz zgodność z wymaganiami prawnymi. W Energo Expert Plus specjalizujemy się w zaawansowanych instalacjach elektrycznych, dostosowanych do potrzeb hal, zakładów produkcyjnych i innych obiektów przemysłowych.
          </p>
          <div className="grid gap-4 pt-8 border-t border-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Zaufaj ekspertom</h3>
              <p className="text-gray-400">
                Nasz zespół składa się z doświadczonych elektryków, którzy rozumieją specyfikę i wymagania instalacji przemysłowych. Zapewniamy pełne bezpieczeństwo i zgodność z normami.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Innowacyjne rozwiązania</h3>
              <p className="text-gray-400">
                Stosujemy nowoczesne technologie i komponenty, które zapewniają efektywność energetyczną i minimalizację kosztów eksploatacyjnych.
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div>
          <img
            src="/images/electrician-8659084_1280(1).jpg"
            alt="Instalacja Elektryczna Przemysłowa"
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
            title: 'Zaawansowane Systemy Elektryczne',
            description: 'Oferujemy kompleksowe systemy elektryczne, które spełniają najwyższe standardy branżowe, zapewniając niezawodność działania.',
          },
          {
            number: '2',
            color: 'text-indigo-400 bg-indigo-800',
            title: 'Bezpieczeństwo i Niezawodność',
            description: 'Bezpieczeństwo jest dla nas priorytetem. Każda instalacja jest dokładnie testowana i spełnia wszystkie normy bezpieczeństwa.',
          },
          {
            number: '3',
            color: 'text-teal-400 bg-teal-800',
            title: 'Optymalizacja Energetyczna',
            description: 'Zajmujemy się optymalizacją zużycia energii, aby zmniejszyć koszty operacyjne i zwiększyć efektywność produkcji.',
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
            Oferujemy kompleksową obsługę instalacji elektrycznych w obiektach przemysłowych – od projektowania po realizację i serwis. Dostosowujemy nasze usługi do specyficznych wymagań każdego klienta, zapewniając bezpieczeństwo i zgodność z normami.
          </p>
          <div className="grid gap-6 pt-8 border-t border-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Projektowanie i Doradztwo</h3>
              <p className="text-gray-400">
                Oferujemy doradztwo techniczne i projektowanie systemów elektrycznych zgodnych z wymaganiami branżowymi.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Montaż i Realizacja</h3>
              <p className="text-gray-400">
                Specjalizujemy się w realizacji zaawansowanych projektów, dbając o każdy aspekt instalacji elektrycznej.
              </p>
            </div>
          </div>
        </div>
        {/* Second Image or Graphic */}
        <div>
          <img
            src="/images/floor-8858091_1280.png"
            alt="Instalacja Elektryczna Przemysłowa"
            className="rounded-lg h-96 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default InstalacjeElektrycznePrzemysloweSection;
