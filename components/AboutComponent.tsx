// components/AboutComponent.tsx
import Image from "next/image";

const AboutComponent = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      <h2 className="text-5xl font-bold text-center mb-12 text-blue-400">O Energo Expert Plus</h2>
      <p className="text-xl mb-12 text-center pb-10 text-gray-300 max-w-4xl mx-auto leading-relaxed">
        Energo Expert Plus to firma z siedzibą w Polsce, specjalizująca się w profesjonalnych instalacjach elektrycznych dla domów oraz obiektów przemysłowych. Dzięki naszemu doświadczeniu i zaangażowaniu, realizujemy projekty o różnym stopniu skomplikowania, zapewniając innowacyjne rozwiązania i najwyższą jakość usług. Nasz zespół składa się z wykwalifikowanych elektryków, którzy dbają o bezpieczeństwo i efektywność każdej instalacji. Zrealizowaliśmy setki projektów, obsługując klientów indywidualnych oraz przedsiębiorstwa z różnych sektorów.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 items-center">
        <Image
          src="/images/szafa.jpg"
          alt="Instalacje Elektryczne"
          width={600}
          height={400}
          className="object-cover rounded-lg shadow-lg order-1 md:order-2"
        />
        <div className="flex flex-col items-center order-2 md:order-1">
          <h3 className="text-5xl font-semibold mb-6 text-blue-400">Kim Jesteśmy</h3>
          <p className="text-xl text-center text-gray-300 leading-relaxed max-w-lg">
            Naszą wizją jest dostarczanie najwyższej jakości usług elektrycznych, które spełniają oczekiwania naszych klientów zarówno w sektorze mieszkaniowym, jak i przemysłowym. Planujemy i realizujemy instalacje elektryczne wszelkiego rodzaju – od modernizacji domów jednorodzinnych po kompleksowe systemy zasilania dla dużych zakładów przemysłowych, zapewniając niezawodność i efektywność energetyczną.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
        <Image
          src="/images/robota.jpg"
          alt="Serwis Elektryczny"
          width={600}
          height={400}
          className="object-cover rounded-lg shadow-lg order-1 md:order-1"
        />
        <div className="flex flex-col items-center order-2 md:order-2">
          <h3 className="text-5xl font-semibold mb-6 text-blue-400">Nasze Usługi</h3>
          <div className="text-lg text-gray-300 leading-relaxed max-w-lg">
            <p className="mb-6 text-center">
              Oferujemy szeroki zakres usług elektrycznych:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-400 rounded-full h-4 w-4 mt-1 mr-4"></span>
                <span>Projektowanie i wykonawstwo instalacji elektrycznych</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-400 rounded-full h-4 w-4 mt-1 mr-4"></span>
                <span>Modernizacja istniejących systemów</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-400 rounded-full h-4 w-4 mt-1 mr-4"></span>
                <span>Instalacje oświetleniowe i automatyka budynkowa</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-400 rounded-full h-4 w-4 mt-1 mr-4"></span>
                <span>Serwis i konserwacja urządzeń elektrycznych</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-400 rounded-full h-4 w-4 mt-1 mr-4"></span>
                <span>Audyt energetyczny i optymalizacja zużycia energii</span>
              </li>
            </ul>
            <p className="mt-8 text-center">
              Dzięki naszym usługom zapewniamy bezpieczeństwo, niezawodność oraz oszczędność energii dla naszych klientów.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
