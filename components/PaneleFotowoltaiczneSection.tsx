import React from 'react';

const PaneleFotowoltaiczneSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
      {/* Header Section */}
      <div className="pt-12 flex justify-between mb-12">
        <h1 className="text-4xl font-bold text-green-400">Panele Fotowoltaiczne</h1>
        <a
          href="/kontakt"
          className="self-start px-5 py-2 text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-green-500 from-gray-900 to-black"
        >
          Skontaktuj się z nami
        </a>
      </div>

      {/* Main Introduction */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-semibold text-gray-200 mb-4">
            Dlaczego warto zainwestować w panele fotowoltaiczne?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Panele fotowoltaiczne to przyszłość odnawialnych źródeł energii. W Energo Expert Plus oferujemy kompleksowe rozwiązania fotowoltaiczne, które pomogą Ci zmniejszyć koszty energii oraz wprowadzić ekologiczne i efektywne źródła zasilania do Twojego domu lub firmy.
          </p>
          <div className="grid gap-4 pt-8 border-t border-gray-800">
            <div>
              <h3 className="font-semibold text-gray-300">Oszczędność na rachunkach</h3>
              <p className="text-gray-400">
                Dzięki panelom fotowoltaicznym możesz znacząco obniżyć rachunki za energię elektryczną i uniezależnić się od rosnących cen energii.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300">Ekologia i zrównoważony rozwój</h3>
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
            className="rounded-lg h-96 object-cover"
          />
        </div>
      </div>

      {/* Benefits and Features */}
      <div className="grid gap-8 md:grid-cols-3 mt-16">
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-yellow-400 bg-yellow-800 rounded-full shadow-lg w-14 h-14 mb-4">1</p>
          <h3 className="text-2xl font-semibold mb-4">Montaż w domach jednorodzinnych</h3>
          <p className="text-gray-400">
            Oferujemy instalacje fotowoltaiczne dostosowane do potrzeb domów jednorodzinnych, zapewniając pełną obsługę – od projektu po montaż.
          </p>
        </div>
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14 mb-4">2</p>
          <h3 className="text-2xl font-semibold mb-4">Systemy dla obiektów przemysłowych</h3>
          <p className="text-gray-400">
            Zapewniamy profesjonalne systemy fotowoltaiczne dla zakładów przemysłowych, hal i innych obiektów biznesowych.
          </p>
        </div>
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14 mb-4">3</p>
          <h3 className="text-2xl font-semibold mb-4">Zaawansowane technologie</h3>
          <p className="text-gray-400">
            Stosujemy najnowsze technologie i komponenty, które zapewniają wysoką wydajność oraz długą żywotność instalacji.
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-semibold text-gray-200 mb-4">Nasza Oferta</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Nasza oferta obejmuje kompleksową obsługę instalacji fotowoltaicznych – od doradztwa i projektowania, po realizację i serwis. Dbamy o każdy detal, aby Twoja instalacja była bezpieczna, wydajna i dostosowana do Twoich potrzeb.
          </p>
          <div className="grid gap-6 pt-8 border-t border-gray-800">
            <div>
              <h3 className="font-semibold text-gray-300">Projektowanie i Doradztwo</h3>
              <p className="text-gray-400">
                Pomagamy dobrać odpowiednie panele oraz systemy, które będą najlepiej odpowiadały Twoim wymaganiom i możliwościom technicznym.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300">Montaż i Serwis</h3>
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
            className="rounded-lg h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PaneleFotowoltaiczneSection;
