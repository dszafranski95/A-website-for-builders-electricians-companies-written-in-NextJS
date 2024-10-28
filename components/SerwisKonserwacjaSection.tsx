import React from 'react';

const SerwisKonserwacjaSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
      {/* Header Section */}
      <div className="flex justify-between mb-12 mt-12">
        <h1 className="text-4xl font-bold text-blue-400">Serwis i Konserwacja Instalacji Elektrycznych</h1>
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
            Profesjonalny Serwis i Konserwacja dla Twojego Spokoju
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Regularny serwis oraz konserwacja instalacji elektrycznych to klucz do zapewnienia bezpieczeństwa, niezawodności i długowieczności systemów elektrycznych. W Energo Expert Plus oferujemy kompleksowe usługi serwisowe, które zapewniają optymalne działanie Twoich instalacji.
          </p>
          <div className="grid gap-4 pt-8 border-t border-gray-800">
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
            className="rounded-lg h-96 object-cover"
          />
        </div>
      </div>

      {/* Benefits and Features */}
      <div className="grid gap-8 md:grid-cols-3 mt-16">
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-yellow-400 bg-yellow-800 rounded-full shadow-lg w-14 h-14 mb-4">1</p>
          <h3 className="text-2xl font-semibold mb-4">Bezpieczeństwo na Pierwszym Miejscu</h3>
          <p className="text-gray-400">
            Nasze usługi serwisowe dbają o to, aby Twoja instalacja była zgodna z obowiązującymi normami i standardami bezpieczeństwa.
          </p>
        </div>
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14 mb-4">2</p>
          <h3 className="text-2xl font-semibold mb-4">Minimalizacja Ryzyka Awarii</h3>
          <p className="text-gray-400">
            Regularna konserwacja zmniejsza ryzyko kosztownych awarii oraz zapewnia niezawodne działanie instalacji przez cały rok.
          </p>
        </div>
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14 mb-4">3</p>
          <h3 className="text-2xl font-semibold mb-4">Oszczędność Czasu i Pieniędzy</h3>
          <p className="text-gray-400">
            Dobrze utrzymane systemy wymagają mniej napraw i interwencji serwisowych, co przekłada się na oszczędność kosztów i czasu.
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-semibold text-gray-200 mb-4">Nasza Oferta</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Oferujemy pełne wsparcie w zakresie serwisu i konserwacji systemów elektrycznych. Nasze usługi obejmują przeglądy okresowe, diagnostykę, modernizacje oraz naprawy, dzięki czemu Twoja instalacja jest zawsze w najlepszym stanie.
          </p>
          <div className="grid gap-6 pt-8 border-t border-gray-800">
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
            className="rounded-lg h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SerwisKonserwacjaSection;
