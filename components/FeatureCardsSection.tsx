"use client";
import { FaEnvelope, FaBuilding, FaSearch } from 'react-icons/fa';

const features = [
  {
    title: 'Dane Kontaktowe',
    description: (
<>
  <p>Maciej Kołodziej - Tel: <a href="tel:782155430" className="text-blue-400 hover:text-blue-500 transition duration-200 underline">782-155-430</a> | <a href="mailto:kontakt@energo-expert.pl" className="text-blue-400 hover:text-blue-500 transition duration-200 underline">kontakt@energo-expert.pl</a></p>
  <p>Bartłomiej Moskwa - Tel: <a href="tel:732753715" className="text-blue-400 hover:text-blue-500 transition duration-200 underline">732-753-715</a> | <a href="mailto:zamowienia.bud@energo-expert.pl" className="text-blue-400 hover:text-blue-500 transition duration-200 underline">zamowienia.bud@energo-expert.pl</a></p>
</>

    ),
    icon: <FaEnvelope className="h-6 w-6 text-white" />,
  },
  {
    title: 'Dane Firmy',
    description: (
<>
  <p>Adres: ul. STANISŁAWA LESZCZYŃSKIEGO 4/25</p>
  <p>50-078 WROCŁAW</p>
  <p>Województwo: DOLNOŚLĄSKIE</p>
  <p>NIP: 8971905067</p>
  <p>REGON: 521818266</p>
</>

    ),
    icon: <FaBuilding className="h-6 w-6 text-white" />,
  },
  {
    title: 'Weryfikacja Firmy',
    description: (
      <>
        <p>Sprawdź naszą firmę w rejestrze KRS:</p>
        <a 
          href="https://krs-pobierz.pl/energo-expert-plus-spolka-z-ograniczona-odpowiedzialnoscia-i0000968047"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 transition duration-200 underline"
        >
          Weryfikacja w KRS
        </a>
      </>
    ),
    icon: <FaSearch className="h-6 w-6 text-white" />,
  },
];

const FeatureCardsSection = () => {
  return (
    <div className="bg-slate-950">
      <section
        id="features"
        className="relative block px-6 py-16 md:py-24 md:px-10 border-t border-b border-gray-700 bg-gradient-to-r from-slate-900 to-blue-900"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-blue-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Informacje o Firmie
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Kontakt i Dane Rejestrowe Energo Expert Plus
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Znajdź wszystkie niezbędne informacje dotyczące kontaktu oraz weryfikacji naszej firmy.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-neutral-800 bg-slate-800 p-8 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 border border-blue-500 mb-4"
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <div className="my-4 font-normal leading-relaxed tracking-wide text-gray-300">
                {feature.description}
              </div>
            </div>
          ))}
        </div>

        {/* Sekcja z mapą */}
        <div className="mt-16 max-w-5xl mx-auto p-6 rounded-lg border border-neutral-800 bg-slate-950 shadow-lg">
          <h3 className="text-2xl font-bold text-white text-center mb-4">Lokalizacja Naszej Firmy</h3>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7034893546726!2d17.0290195!3d51.1078233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2746bbe770f%3A0x5d26a1321f47d7ff!2sStanis%C5%82awa%20Leszczy%C5%84skiego%204%2C%2050-078%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1698250393242!5m2!1spl!2spl"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
></iframe>

        </div>

        {/* Nowy gradient w odcieniach niebiesko-białych */}
        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundImage:
              'linear-gradient(to right top, rgba(0, 123, 255, 0.2) 0%, transparent 50%, transparent 100%)',
            borderColor: 'rgba(0, 123, 255, 0.2)',
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              'linear-gradient(to left top, rgba(0, 150, 255, 0.2) 0%, transparent 50%, transparent 100%)',
            borderColor: 'rgba(0, 150, 255, 0.2)',
          }}
        ></div>
      </section>
    </div>
  );
};

export default FeatureCardsSection;
