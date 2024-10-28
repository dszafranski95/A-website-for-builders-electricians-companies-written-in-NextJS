// components/PricingSection.tsx
"use client";
import Link from 'next/link';
import { FaCheckCircle, FaPlug, FaSolarPanel, FaBuilding } from 'react-icons/fa'; // Added icons for a more dynamic look

const pricingOptions = [
  {
    id: 'product1',
    title: 'Instalacja Fotowoltaiczna Standard',
    description: 'Kompleksowa instalacja fotowoltaiczna do 5kW dla domów jednorodzinnych.',
    price: '15 000 zł',
    features: [
      'Moc instalacji: do 5kW',
      'Panele monokrystaliczne',
      'Inwerter jednofazowy',
      'Montaż i uruchomienie',
    ],
    popular: false,
    icon: <FaSolarPanel className="text-yellow-500 text-3xl" />, // Added icon for visual enhancement
  },
  {
    id: 'product2',
    title: 'Instalacja Fotowoltaiczna Premium',
    description: 'Wysokowydajna instalacja fotowoltaiczna do 10kW z monitoringiem online.',
    price: '28 000 zł',
    features: [
      'Moc instalacji: do 10kW',
      'Panele monokrystaliczne premium',
      'Inwerter trójfazowy',
      'Monitoring online',
      'Montaż i uruchomienie',
    ],
    popular: true,
    icon: <FaSolarPanel className="text-blue-500 text-3xl" />,
  },
  {
    id: 'product3',
    title: 'Instalacja Elektryczna dla Domu',
    description: 'Kompleksowe usługi instalacji elektrycznej dla nowych budynków mieszkalnych.',
    price: 'od 5 000 zł',
    features: [
      'Projekt instalacji',
      'Montaż okablowania',
      'Montaż gniazdek i wyłączników',
      'Podłączenie do sieci',
    ],
    popular: false,
    icon: <FaPlug className="text-green-500 text-3xl" />,
  },
  {
    id: 'product4',
    title: 'Instalacja Elektryczna Przemysłowa',
    description: 'Usługi elektryczne dla dużych obiektów przemysłowych i zakładów.',
    price: 'Wycena indywidualna',
    features: [
      'Instalacje wysokoprądowe',
      'Systemy automatyki przemysłowej',
      'Oświetlenie LED dla hal produkcyjnych',
      'Serwis i konserwacja',
    ],
    popular: false,
    icon: <FaBuilding className="text-red-500 text-3xl" />,
  },
  {
    id: 'product5',
    title: 'Systemy Fotowoltaiczne dla Przemysłu',
    description: 'Fotowoltaika przemysłowa dla firm, zakładów produkcyjnych i magazynów.',
    price: 'Wycena indywidualna',
    features: [
      'Panele fotowoltaiczne o dużej mocy',
      'Optymalizatory zużycia energii',
      'System monitoringu zużycia',
      'Serwis i konserwacja',
    ],
    popular: false,
    icon: <FaSolarPanel className="text-orange-500 text-3xl" />,
  },
  {
    id: 'product6',
    title: 'Serwis i Modernizacja Systemów',
    description: 'Modernizacja i serwis istniejących instalacji elektrycznych oraz fotowoltaicznych.',
    price: 'Wycena indywidualna',
    features: [
      'Modernizacja instalacji elektrycznych',
      'Audyty energetyczne',
      'Serwis urządzeń i systemów',
      'Doradztwo techniczne',
    ],
    popular: false,
    icon: <FaPlug className="text-purple-500 text-3xl" />,
  },
];

const PricingSection = () => {
  return (
    <div className="bg-slate-900 py-10" id="pricing">
      <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-blue-500">Oferta Elektryczna i Fotowoltaiczna</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Idealne rozwiązania dla domów i przemysłu.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Wybierz ofertę, która najlepiej pasuje do Twoich potrzeb - od instalacji domowych po rozwiązania przemysłowe.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Generowanie kart ofert */} 
          {pricingOptions.map((option) => (
            <div
              key={option.id}
              className={`rounded-3xl p-8 xl:p-10 ${
                option.popular
                  ? 'bg-blue-700 ring-2 ring-blue-500'
                  : 'bg-gray-800 ring-1 ring-gray-700'
              } transition-shadow duration-300 hover:shadow-lg`}
            >
              <div className="flex items-center justify-between gap-x-4">
                {/* Icon and title */}
                <div className="flex items-center">
                  {option.icon}
                  <h2 id={option.id} className="ml-3 text-lg font-semibold leading-8 text-white">
                    {option.title}
                  </h2>
                </div>
                {option.popular && (
                  <p className="rounded-full bg-blue-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Najpopularniejsze
                  </p>
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{option.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {option.price}
                </span>
              </p>
              <Link href="/kontakt">
                <button
                  aria-describedby={option.id}
                  className={`mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    option.popular
                      ? 'bg-blue-500 text-white shadow-sm hover:bg-blue-600 focus-visible:outline-blue-500'
                      : 'bg-gray-700 text-white hover:bg-gray-600 focus-visible:outline-gray-500'
                  }`}
                >
                  Zamów teraz
                </button>
              </Link>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                {option.features.map((feature, index) => (
                  <li key={index} className="flex gap-x-3">
                    <FaCheckCircle className="h-5 w-5 flex-none text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
