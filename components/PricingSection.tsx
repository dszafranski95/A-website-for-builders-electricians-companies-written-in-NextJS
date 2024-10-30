// components/PricingSection.tsx
"use client";
import Link from 'next/link';
import { FaCheckCircle, FaPlug, FaSolarPanel, FaBuilding } from 'react-icons/fa';

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
    icon: <FaSolarPanel className="text-yellow-500 text-4xl animate-pulse" />,
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
    icon: <FaSolarPanel className="text-blue-500 text-4xl animate-bounce" />,
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
    icon: <FaPlug className="text-green-500 text-4xl" />,
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
    icon: <FaBuilding className="text-red-500 text-4xl" />,
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
    icon: <FaSolarPanel className="text-orange-500 text-4xl animate-spin-slow" />,
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
    icon: <FaPlug className="text-purple-500 text-4xl animate-pulse" />,
  },
];

const PricingSection = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-blue-900 py-20" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-lg font-semibold text-blue-500 uppercase tracking-wide">Oferta Elektryczna i Fotowoltaiczna</h1>
          <p className="text-4xl font-extrabold text-white mt-4">
            Idealne rozwiązania dla domów i przemysłu
          </p>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Wybierz ofertę, która najlepiej pasuje do Twoich potrzeb - od instalacji domowych po rozwiązania przemysłowe.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingOptions.map((option) => (
            <div
              key={option.id}
              className={`p-8 rounded-2xl shadow-xl transition transform hover:scale-105 ${
                option.popular ? 'bg-blue-700 ring-2 ring-blue-500' : 'bg-slate-800 ring-1 ring-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {option.icon}
                  <h3 className="ml-3 text-xl font-bold text-white">{option.title}</h3>
                </div>
                {option.popular && (
                  <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                    Najpopularniejsze
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-300 mb-6">{option.description}</p>
              <p className="text-3xl font-bold text-white mb-8">{option.price}</p>
              <Link href="/kontakt">
                <button
                  className={`block py-3 px-5 rounded-lg text-center font-semibold transition ${
                    option.popular ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  }`}
                >
                  Zamów teraz
                </button>
              </Link>
              <ul className="mt-6 space-y-4 text-sm text-gray-300">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCheckCircle className="text-blue-500 mr-2" />
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
