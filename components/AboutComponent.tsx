// components/AboutComponent.tsx
"use client"
import Image from "next/image";

const AboutComponent = () => {
  return (
    <div className="relative z-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 px-8 mt-[-50px] rounded-t-[100px] shadow-2xl overflow-hidden">
      <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-b from-blue-100 to-blue-300 bg-clip-text text-transparent text-3xl drop-shadow-lg animate-fade-in">
        O Energo Expert Plus
      </h2>
      <p className="text-xl mb-12 text-center pb-10 text-gray-300 max-w-4xl mx-auto leading-relaxed">
        Energo Expert Plus to firma z siedzibą w Polsce, specjalizująca się w profesjonalnych instalacjach elektrycznych dla domów oraz obiektów przemysłowych. Dzięki naszemu doświadczeniu i zaangażowaniu, realizujemy projekty o różnym stopniu skomplikowania, zapewniając innowacyjne rozwiązania i najwyższą jakość usług. Nasz zespół składa się z wykwalifikowanych elektryków, którzy dbają o bezpieczeństwo i efektywność każdej instalacji. Zrealizowaliśmy setki projektów, obsługując klientów indywidualnych oraz przedsiębiorstwa z różnych sektorów.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 items-center animate-slide-in">
        <Image
          src="/images/szafa.jpg"
          alt="Instalacje Elektryczne"
          width={600}
          height={400}
          className="object-cover rounded-lg shadow-lg order-1 md:order-2 transform transition-transform duration-300 hover:scale-105"
        />
        <div className="flex flex-col items-center order-2 md:order-1">
          <h3 className="text-5xl font-semibold mb-6 bg-gradient-to-b from-blue-100 to-blue-300 bg-clip-text text-transparent text-3xl drop-shadow-lg">
            Kim Jesteśmy
          </h3>
          <p className="text-xl text-center text-gray-300 leading-relaxed max-w-lg">
            Naszą wizją jest dostarczanie najwyższej jakości usług elektrycznych, które spełniają oczekiwania naszych klientów zarówno w sektorze mieszkaniowym, jak i przemysłowym. Planujemy i realizujemy instalacje elektryczne wszelkiego rodzaju – od modernizacji domów jednorodzinnych po kompleksowe systemy zasilania dla dużych zakładów przemysłowych, zapewniając niezawodność i efektywność energetyczną.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 my-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-slide-in">
        <Image
          src="/images/robota.jpg"
          alt="Serwis Elektryczny"
          width={600}
          height={400}
          className="object-cover rounded-lg shadow-lg order-1 md:order-1 transform transition-transform duration-300 hover:scale-105"
        />
        <div className="flex flex-col items-center order-2 md:order-2">
          <h3 className="text-5xl font-semibold mb-6 bg-gradient-to-b from-blue-100 to-blue-300 bg-clip-text text-transparent text-3xl drop-shadow-lg">
            Nasze Usługi
          </h3>
          <div className="text-lg text-gray-300 leading-relaxed max-w-lg">
            <p className="mb-6 text-center">
              Oferujemy szeroki zakres usług elektrycznych:
            </p>
            <ul className="space-y-4">
              {[
                "Projektowanie i wykonawstwo instalacji elektrycznych",
                "Modernizacja istniejących systemów",
                "Instalacje oświetleniowe i automatyka budynkowa",
                "Serwis i konserwacja urządzeń elektrycznych",
                "Audyt energetyczny i optymalizacja zużycia energii",
              ].map((service, index) => (
                <li key={index} className="flex items-start group">
                  <span className="bg-blue-400 rounded-full h-4 w-4 mt-1 mr-4 transition-transform duration-300 group-hover:scale-125"></span>
                  <span className="transition-colors duration-300 group-hover:text-blue-100">{service}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center">
              Dzięki naszym usługom zapewniamy bezpieczeństwo, niezawodność oraz oszczędność energii dla naszych klientów.
            </p>
          </div>
        </div>
      </div>

      {/* Animacje CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }
        @keyframes slide-in {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 1.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AboutComponent;
