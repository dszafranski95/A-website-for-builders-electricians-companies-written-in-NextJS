// energo-app\components\FeaturesSection.tsx
"use client";

import Image from 'next/image';
import { FaTools, FaUserTie, FaHandshake, FaCogs } from 'react-icons/fa';

const features = [
  {
    title: 'Nowoczesne Technologie Elektryczne',
    description:
      'Stosujemy innowacyjne technologie w zakresie instalacji elektrycznych i fotowoltaiki, aby zagwarantować najwyższą jakość i bezpieczeństwo.',
    icon: <FaTools className="w-8 h-8 text-white" />,
  },
  {
    title: 'Doświadczony Zespół Specjalistów',
    description:
      'Nasz zespół składa się z ekspertów w dziedzinie elektryki przemysłowej i domowej, posiadających wieloletnie doświadczenie w realizacji projektów.',
    icon: <FaUserTie className="w-8 h-8 text-white" />,
  },
  {
    title: 'Indywidualne Podejście do Klienta',
    description:
      'Każdy projekt to dla nas unikalne wyzwanie. Dostosowujemy nasze usługi do indywidualnych potrzeb klienta, zapewniając satysfakcję z realizacji.',
    icon: <FaHandshake className="w-8 h-8 text-white" />,
  },
  {
    title: 'Kompleksowa Obsługa Od A do Z',
    description:
      'Oferujemy pełne wsparcie - od doradztwa technicznego, przez projektowanie instalacji, aż po montaż i regularny serwis.',
    icon: <FaCogs className="w-8 h-8 text-white" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">Nasze Atuty</h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-gray-300">
            Poznaj nasze nowoczesne rozwiązania, które usprawnią Twoje projekty elektryczne i fotowoltaiczne, przynosząc realne oszczędności i korzyści.
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          {/* Lista cech */}
          <div>
            <div className="mt-4 space-y-12">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">{feature.title}</h4>
                    <p className="mt-2 text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Obrazek */}
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <Image
              width={600}
              height={600}
              src="/images/przemysl.jpg"
              alt="Energo Expert Plus - Instalacje Elektryczne"
              className="mx-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
