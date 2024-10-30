// components/PricingPlansSection.tsx
"use client";

import Link from 'next/link';
import { FaCheckCircle, FaBolt } from 'react-icons/fa';

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
    bgColor: 'bg-slate-800',
    textColor: 'text-gray-300',
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
    bgColor: 'bg-slate-900',
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
    bgColor: 'bg-slate-800',
    textColor: 'text-gray-300',
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
    bgColor: 'bg-slate-900',
    textColor: 'text-gray-300',
    borderStyle: 'border-2 border-blue-400',
  },
];

const PricingPlansSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-extrabold text-4xl sm:text-5xl md:text-7xl text-white">
          Nasza oferta.
          <br />
          <span className="text-blue-500">Indywidualna wycena.</span>
        </h2>
        <p className="mt-8 max-w-2xl mx-auto sm:text-lg lg:text-xl text-gray-300">
          Energo Expert Plus oferuje szeroki zakres usług elektrycznych oraz fotowoltaicznych, dostosowanych do Twoich potrzeb. Skontaktuj się z nami, aby uzyskać indywidualną wycenę.
        </p>

        <div className="mt-12 md:mt-24 grid gap-8 sm:grid-cols-2 md:gap-12 xl:gap-16">
          {plans.map((plan, index) => (
            <Link href={plan.buttonLink} key={index}>
              <button
                className={`py-10 px-8 flex flex-col items-center rounded-xl text-center transition-transform duration-300 hover:scale-105 ${plan.bgColor} ${plan.textColor} ${plan.borderStyle} shadow-lg hover:shadow-2xl`}
              >
                <div className="flex items-center mb-6">
                  <FaBolt className="text-5xl text-blue-500 mr-3 animate-pulse" />
                  <h3 className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-300'}`}>
                    {plan.title}
                  </h3>
                </div>

                <p className="py-6 font-semibold text-xl">{plan.price}</p>

                <ul className="w-full text-left space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li className="flex items-center" key={idx}>
                      <FaCheckCircle className="mr-3 text-blue-500" />
                      <span className="text-md">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`w-full py-3 text-center rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-blue-500 hover:text-blue-600'
                  }`}
                >
                  {plan.buttonText}
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
