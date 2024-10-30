import React from 'react';

const SerwisKonserwacjaSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
      {/* Header Section */}
      <div className="flex justify-between mb-12 mt-12">
        <h1 className="text-4xl font-extrabold text-blue-400 tracking-tight sm:text-5xl lg:text-6xl drop-shadow-md">
          Serwis i Konserwacja Instalacji Elektrycznych
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
            Profesjonalny Serwis i Konserwacja dla Twojego Spokoju
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Regularny serwis oraz konserwacja instalacji elektrycznych to klucz do zapewnienia bezpieczeństwa, niezawodności i długowieczności systemów elektrycznych. W Energo Expert Plus oferujemy kompleksowe usługi serwisowe, które zapewniają optymalne działanie Twoich instalacji.
          </p>
          <div className="grid gap-4 pt-8 border-t border-gray-700">
            <div>
              <h3 className="font-semibold text-gray-300">Serwis Instalacji Elektrycznych</h3>
              <p className="text-gray-400">
                Oferujemy szeroki zakres usług serwisowych, od diagnostyki po naprawy, zapewniając bezpieczne i wydajne działanie Twojej instalacji.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300">Konserwacja Zapobiegawcza</h3>
              <p className="text-gray-400">
                Regularna konserwacja pozwala uniknąć awarii i zapewnia długowieczność systemów elektrycznych, dbając o ich niezawodność.
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div>
          <img
            src="/images/power-972191_1280.jpg"
            alt="Serwis i Konserwacja"
            className="rounded-lg h-96 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Benefits and Features */}
      <div className="grid gap-8 md:grid-cols-3 mt-16">
        {[
          {
            number: '1',
            title: 'Bezpieczeństwo na Pierwszym Miejscu',
            description: 'Nasze usługi serwisowe dbają o to, aby Twoja instalacja była zgodna z obowiązującymi normami i standardami bezpieczeństwa.',
            color: 'text-yellow-400 bg-yellow-800',
          },
          {
            number: '2',
            title: 'Minimalizacja Ryzyka Awarii',
            description: 'Regularna konserwacja zmniejsza ryzyko kosztownych awarii oraz zapewnia niezawodne działanie instalacji przez cały rok.',
            color: 'text-teal-400 bg-teal-800',
          },
          {
            number: '3',
            title: 'Oszczędność Czasu i Pieniędzy',
            description: 'Dobrze utrzymane systemy wymagają mniej napraw i interwencji serwisowych, co przekłada się na oszczędność kosztów i czasu.',
            color: 'text-green-400 bg-green-800',
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
          <h2 className="text-3xl font-semibold text-gray-200 mb-6 sm:text-4xl lg:text-5xl">Nasza Oferta</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Oferujemy pełne wsparcie w zakresie serwisu i konserwacji systemów elektrycznych. Nasze usługi obejmują przeglądy okresowe, diagnostykę, modernizacje oraz naprawy, dzięki czemu Twoja instalacja jest zawsze w najlepszym stanie.
          </p>
          <div className="grid gap-6 pt-8 border-t border-gray-700">
            <div>
              <h3 className="font-semibold text-gray-300">Diagnostyka i Naprawy</h3>
              <p className="text-gray-400">
                Szybko identyfikujemy i usuwamy usterki, zapewniając nieprzerwane działanie Twoich systemów.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300">Modernizacja Instalacji</h3>
              <p className="text-gray-400">
                Przeprowadzamy modernizacje i aktualizacje systemów elektrycznych, aby były zgodne z nowoczesnymi standardami.
              </p>
            </div>
          </div>
        </div>
        {/* Second Image or Graphic */}
        <div>
          <img
            src="/images/electricity-1239626_1280.jpg"
            alt="Serwis Instalacji"
            className="rounded-lg h-96 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default SerwisKonserwacjaSection;
