// components/PricingPlansSection.tsx
"use client";

import Link from 'next/link';
import { FaCheckCircle, FaBolt } from 'react-icons/fa'; // Added FaBolt for icon

const plans = [
  {
    title: 'Instalacje Domowe',
    price: 'Wycena indywidualna',
    description:
      'Profesjonalne instalacje elektryczne dla domów jednorodzinnych, mieszkań oraz małych obiektów mieszkalnych.',
    features: [
      'Projektowanie instalacji',
      'Montaż i uruchomienie',
      'Modernizacja istniejących systemów',
      'Serwis i konserwacja',
    ],
    buttonText: 'Skontaktuj się z nami',
    buttonLink: '/kontakt',
    popular: false,
    bgColor: 'bg-white',
    textColor: 'text-gray-800',
    borderStyle: 'border border-blue-500',
  },
  {
    title: 'Instalacje Przemysłowe',
    price: 'Wycena indywidualna',
    description:
      'Kompleksowe usługi elektryczne dla zakładów produkcyjnych, magazynów i obiektów przemysłowych.',
    features: [
      'Instalacje wysokoprądowe',
      'Automatyka przemysłowa',
      'Oświetlenie przemysłowe',
      'Serwis i utrzymanie',
    ],
    buttonText: 'Skontaktuj się z nami',
    buttonLink: '/kontakt',
    popular: true,
    bgColor: 'bg-gray-800',
    textColor: 'text-white',
    borderStyle: 'border-2 border-blue-400',
  },
  {
    title: 'Systemy Fotowoltaiczne',
    price: 'Wycena indywidualna',
    description:
      'Ekologiczne i oszczędne instalacje fotowoltaiczne dla domów, firm i przemysłu.',
    features: [
      'Panele fotowoltaiczne najwyższej jakości',
      'Monitoring online',
      'Optymalizacja zużycia energii',
      'Gwarancja i serwis',
    ],
    buttonText: 'Skontaktuj się z nami',
    buttonLink: '/kontakt',
    popular: false,
    bgColor: 'bg-white',
    textColor: 'text-gray-800',
    borderStyle: 'border border-blue-500',
  },
  {
    title: 'Serwis i Utrzymanie',
    price: 'Wycena indywidualna',
    description:
      'Regularne przeglądy, serwis i konserwacja instalacji elektrycznych oraz systemów fotowoltaicznych.',
    features: [
      'Przeglądy instalacji elektrycznych',
      'Audyty energetyczne',
      'Konserwacja urządzeń',
      'Naprawy i modernizacje',
    ],
    buttonText: 'Skontaktuj się z nami',
    buttonLink: '/kontakt',
    popular: false,
    bgColor: 'bg-gray-800',
    textColor: 'text-white',
    borderStyle: 'border-2 border-blue-400',
  },
];

const PricingPlansSection = () => {
  return (
    <section className="py-8 md:py-16 bg-slate-900 text-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="leading-none font-display tracking-tight text-4xl sm:text-5xl md:text-7xl xl:text-9xl text-white">
          Nasza oferta.<br />
          <span className="text-blue-500">Indywidualna wycena.</span>
        </h2>
        <p className="mt-8 max-w-xl sm:text-lg sm:leading-normal lg:text-xl lg:leading-normal xl:text-2xl xl:leading-normal font-semibold text-gray-300">
          Energo Expert Plus oferuje szeroki zakres usług elektrycznych oraz fotowoltaicznych, dostosowanych do Twoich potrzeb. Skontaktuj się z nami, aby uzyskać indywidualną wycenę.
        </p>

        <div className="mt-12 md:mt-24 grid gap-y-8 sm:grid-cols-2 sm:gap-x-8 md:gap-x-12 xl:gap-x-24">
          {plans.map((plan, index) => (
            <Link href={plan.buttonLink} key={index}>
              <button
                className={`py-10 px-6 flex flex-col rounded-xl text-center transition duration-300 hover:-rotate-1 hover:scale-105 focus:-rotate-1 focus:scale-105 ${plan.bgColor} ${plan.textColor} ${plan.borderStyle}`}
              >
                <div className="flex justify-center items-center mb-6">
                  {/* React icon used here */}
                  <FaBolt className="text-5xl text-blue-500 mr-2" />
                  <h3 className={`inline-block text-2xl md:text-3xl font-bold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                    {plan.title}
                  </h3>
                </div>

                <div className="flex-1 py-6 font-bold leading-none text-2xl md:text-3xl md:leading-none lg:text-4xl lg:leading-none xl:text-5xl xl:leading-none">
                  {plan.price}
                </div>

                <ul className="mx-auto text-left md:text-lg md:leading-normal font-bold space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li className="flex items-start" key={idx}>
                      <FaCheckCircle className="mt-1 mr-2 h-5 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-12">
                  <div
                    className={`group inline-flex items-center justify-center text-lg md:text-xl font-bold ${
                      plan.popular ? 'text-white bg-blue-500 hover:bg-blue-600' : 'text-blue-500 hover:text-blue-600'
                    } px-6 py-3 rounded-lg transition-colors duration-200`}
                  >
                    {plan.buttonText}
                    <svg
                      className="ml-2 fill-current group-hover:translate-x-1 group-focus:translate-x-1 transition-transform"
                      width="25"
                      height="16"
                      viewBox="0 0 25 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M25 8a.75.75 0 0 1-.252.555l-7.08 6.57a1 1 0 0 1-1.153.144 1 1 0 0 1-.565-.899V11.2H9.8A.8.8 0 0 1 9 10.4V5.6a.8.8 0 0 1 .8-.8h6.15V2.73a1 1 0 0 1 .565-.899 1 1 0 0 1 1.153.144l7.08 6.57A.75.75 0 0 1 25 8z" />
                      <path d="M5 6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6z" />
                      <path d="M0 6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V6z" />
                    </svg>
                  </div>
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlansSection;
