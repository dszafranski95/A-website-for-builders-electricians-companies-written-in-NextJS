import React from 'react';

const OswietlenieAutomatykaSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
      {/* Header Section */}
      <div className="flex justify-between mb-12 pt-12">
        <h1 className="text-4xl font-bold text-blue-400">Oświetlenie i Automatyka Budynkowa</h1>
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
            Nowoczesne Systemy Oświetlenia i Automatyka dla Twojego Domu i Firmy
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Oświetlenie i automatyka budynkowa to kluczowe elementy nowoczesnych instalacji elektrycznych, które poprawiają komfort użytkowania, oszczędność energii oraz bezpieczeństwo. W Energo Expert Plus specjalizujemy się w projektowaniu i montażu inteligentnych systemów oświetleniowych oraz automatyki budynkowej.
          </p>
          <div className="grid gap-4 pt-8 border-t border-gray-800">
            <div>
              <h3 className="font-semibold text-gray-300">Inteligentne Oświetlenie</h3>
              <p className="text-gray-400">
                Instalujemy systemy inteligentnego oświetlenia, które dostosowują się do Twoich potrzeb i zapewniają oszczędność energii.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300">Automatyka Budynkowa</h3>
              <p className="text-gray-400">
                Tworzymy systemy automatyki, które pozwalają na zarządzanie oświetleniem, ogrzewaniem, roletami oraz innymi elementami budynku za pomocą jednego urządzenia.
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div>
          <img
            src="/images/cctv-1144371_1280.jpg"
            alt="Oświetlenie i Automatyka"
            className="rounded-lg h-96 object-cover"
          />
        </div>
      </div>

      {/* Benefits and Features */}
      <div className="grid gap-8 md:grid-cols-3 mt-16">
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-yellow-400 bg-yellow-800 rounded-full shadow-lg w-14 h-14 mb-4">1</p>
          <h3 className="text-2xl font-semibold mb-4">Komfort i Oszczędność Energii</h3>
          <p className="text-gray-400">
            Inteligentne oświetlenie pozwala na automatyczne dostosowanie jasności i barwy światła, co przyczynia się do oszczędności energii.
          </p>
        </div>
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14 mb-4">2</p>
          <h3 className="text-2xl font-semibold mb-4">Zwiększone Bezpieczeństwo</h3>
          <p className="text-gray-400">
            Nasze systemy automatyki mogą współpracować z czujnikami ruchu, alarmami i monitoringiem, zwiększając bezpieczeństwo Twojego domu lub firmy.
          </p>
        </div>
        <div className="flex flex-col p-8 rounded-lg shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14 mb-4">3</p>
          <h3 className="text-2xl font-semibold mb-4">Łatwa Obsługa</h3>
          <p className="text-gray-400">
            Automatyka budynkowa umożliwia kontrolę oświetlenia i innych systemów za pomocą smartfona, tabletu lub panelu sterowania.
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-semibold text-gray-200 mb-4">Nasza Oferta</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Oferujemy kompleksowe usługi związane z projektowaniem, instalacją oraz serwisem systemów oświetleniowych i automatyki budynkowej. Zapewniamy nowoczesne i sprawdzone rozwiązania, które poprawią komfort i efektywność zarządzania energią.
          </p>
          <div className="grid gap-6 pt-8 border-t border-gray-800">
            <div>
              <h3 className="font-semibold text-gray-300">Projektowanie Inteligentnych Systemów</h3>
              <p className="text-gray-400">
                Tworzymy nowoczesne projekty oświetleniowe oraz automatyki, które idealnie dopasowują się do Twoich potrzeb.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300">Serwis i Konserwacja</h3>
              <p className="text-gray-400">
                Oferujemy regularny serwis i konserwację systemów, aby zapewnić ich długowieczność i bezawaryjność.
              </p>
            </div>
          </div>
        </div>
        {/* Second Image or Graphic */}
        <div>
          <img
            src="/images/smart-home-3317440_1280.jpg"
            alt="Automatyka Budynkowa"
            className="rounded-lg h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OswietlenieAutomatykaSection;
