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
    <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
      <div className="container max-w-6xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-b from-blue-100 to-blue-300 bg-clip-text text-transparent sm:text-5xl">
            Nasze Atuty
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-300">
            Poznaj nasze nowoczesne rozwiązania, które usprawnią Twoje projekty elektryczne i fotowoltaiczne, przynosząc realne oszczędności i korzyści.
          </p>
        </div>
        <div className="grid lg:gap-16 lg:grid-cols-2 lg:items-center">
          {/* Lista cech */}
          <div>
            <div className="space-y-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 transition-transform duration-300 transform hover:scale-105"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-blue-200">
                      {feature.title}
                    </h4>
                    <p className="mt-2 text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Obrazek */}
          <div aria-hidden="true" className="mt-12 lg:mt-0">
            <Image
              width={600}
              height={600}
              src="/images/przemysl.jpg"
              alt="Energo Expert Plus - Instalacje Elektryczne"
              className="mx-auto rounded-lg shadow-xl transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
