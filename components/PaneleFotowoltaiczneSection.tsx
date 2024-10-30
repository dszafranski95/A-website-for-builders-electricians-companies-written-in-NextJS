import React from 'react';

const PaneleFotowoltaiczneSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
      {/* Header Section */}
      <div className="pt-12 flex justify-between mb-12">
        <h1 className="text-4xl font-extrabold text-green-400 tracking-tight sm:text-5xl lg:text-6xl drop-shadow-md">
          Panele Fotowoltaiczne
        </h1>
        <a
          href="/kontakt"
          className="self-start px-6 py-3 bg-green-600 text-gray-100 font-semibold rounded-lg shadow-md hover:bg-green-500 transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Skontaktuj się z nami
        </a>
      </div>

      {/* Main Introduction */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-200 mb-6 sm:text-4xl lg:text-5xl">
            Dlaczego warto zainwestować w panele fotowoltaiczne?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Panele fotowoltaiczne to przyszłość odnawialnych źródeł energii. W Energo Expert Plus oferujemy kompleksowe rozwiązania fotowoltaiczne, które pomogą Ci zmniejszyć koszty energii oraz wprowadzić ekologiczne i efektywne źródła zasilania do Twojego domu lub firmy.
          </p>
          <div className="grid gap-4 pt-8 border-t border-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-green-400">Oszczędność na rachunkach</h3>
              <p className="text-gray-400">
                Dzięki panelom fotowoltaicznym możesz znacząco obniżyć rachunki za energię elektryczną i uniezależnić się od rosnących cen energii.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-400">Ekologia i zrównoważony rozwój</h3>
              <p className="text-gray-400">
                Korzystanie z energii słonecznej to sposób na zmniejszenie śladu węglowego i dbanie o środowisko naturalne.
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div>
          <img
            src="/images/photovoltaic-4522955_1280.jpg"
            alt="Panele Fotowoltaiczne"
            className="rounded-lg h-96 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Benefits and Features */}
      <div className="grid gap-8 md:grid-cols-3 mt-16">
        {[
          {
            number: '1',
            color: 'text-yellow-400 bg-yellow-800',
            title: 'Montaż w domach jednorodzinnych',
            description: 'Oferujemy instalacje fotowoltaiczne dostosowane do potrzeb domów jednorodzinnych, zapewniając pełną obsługę – od projektu po montaż.',
          },
          {
            number: '2',
            color: 'text-teal-400 bg-teal-800',
            title: 'Systemy dla obiektów przemysłowych',
            description: 'Zapewniamy profesjonalne systemy fotowoltaiczne dla zakładów przemysłowych, hal i innych obiektów biznesowych.',
          },
          {
            number: '3',
            color: 'text-green-400 bg-green-800',
            title: 'Zaawansowane technologie',
            description: 'Stosujemy najnowsze technologie i komponenty, które zapewniają wysoką wydajność oraz długą żywotność instalacji.',
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
            Nasza oferta obejmuje kompleksową obsługę instalacji fotowoltaicznych – od doradztwa i projektowania, po realizację i serwis. Dbamy o każdy detal, aby Twoja instalacja była bezpieczna, wydajna i dostosowana do Twoich potrzeb.
          </p>
          <div className="grid gap-6 pt-8 border-t border-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-green-400">Projektowanie i Doradztwo</h3>
              <p className="text-gray-400">
                Pomagamy dobrać odpowiednie panele oraz systemy, które będą najlepiej odpowiadały Twoim wymaganiom i możliwościom technicznym.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-400">Montaż i Serwis</h3>
              <p className="text-gray-400">
                Zajmujemy się profesjonalnym montażem i serwisem instalacji, zapewniając długotrwałe i bezawaryjne działanie.
              </p>
            </div>
          </div>
        </div>
        {/* Second Image or Graphic */}
        <div>
          <img
            src="/images/solar-panels-2685357_1280.jpg"
            alt="Instalacja Paneli Fotowoltaicznych"
            className="rounded-lg h-96 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default PaneleFotowoltaiczneSection;
