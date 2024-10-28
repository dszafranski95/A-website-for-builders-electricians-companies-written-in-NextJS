"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Zakładki dotyczące elektryki
const tabs = [
  {
    id: 1,
    title: "Instalacje Domowe",
    content:
      "Specjalizujemy się w kompleksowych instalacjach elektrycznych w domach jednorodzinnych oraz budynkach mieszkalnych. Gwarantujemy bezpieczeństwo i wysoką jakość wykonania.",
    image: "/images/house.jpg",
    link: "/uslugi/instalacje-elektryczne-domowe",
  },
  {
    id: 2,
    title: "Instalacje Przemysłowe",
    content:
      "Oferujemy nowoczesne rozwiązania dla przemysłu, w tym instalacje elektryczne dostosowane do specyficznych potrzeb zakładów produkcyjnych i magazynów.",
    image: "/images/przemysl.jpg",
    link: "/uslugi/instalacje-elektryczne-przemyslowe",
  },
  {
    id: 3,
    title: "Rozdzielnie Elektryczne",
    content:
      "Projektujemy i montujemy rozdzielnie elektryczne, dbając o ich niezawodność i bezpieczeństwo. Każda rozdzielnia jest dostosowana do indywidualnych potrzeb klienta.",
    image: "/images/rozdzielnia.jpg",
    link: "/uslugi/rozdzielnie-elektryczne",
  },
  {
    id: 4,
    title: "Oświetlenie i Automatyka",
    content:
      "Instalujemy zaawansowane systemy oświetleniowe oraz automatykę budynkową, umożliwiając inteligentne zarządzanie energią i zwiększenie komfortu użytkowników.",
    image: "/images/smart-home-3920905_1280.jpg",
    link: "/uslugi/oswietlenie-automatyka",
  },
  {
    id: 5,
    title: "Panele fotowoltaiczne",
    content:
      "Panele fotowoltaiczne to przyszłość odnawialnych źródeł energii. W Energo Expert Plus oferujemy kompleksowe rozwiązania fotowoltaiczne, które pomogą Ci zmniejszyć koszty energii oraz wprowadzić ekologiczne i efektywne źródła zasilania do Twojego domu lub firmy.",
    image: "/images/photovoltaic-4522955_1280.jpg",
    link: "/uslugi/panele-fotowoltaiczne",
  },
  {
    id: 6,
    title: "Serwis i Utrzymanie",
    content:
      "Świadczymy usługi serwisowe i konserwacyjne dla instalacji elektrycznych, aby zapewnić ich niezawodność i długą żywotność.",
    image: "/images/electric-meter-5229750_1280.jpg",
    link: "/uslugi/serwis-konserwacja",
  },
];

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]); // Default to the first tab

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900">
      {/* Left side - tab menu */}
      <div className="w-full lg:w-1/4 bg-gray-800 text-white p-4">
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`p-2 cursor-pointer ${
                selectedTab.id === tab.id ? "font-bold text-blue-400 bg-gray-700 rounded-lg" : "hover:bg-gray-700"
              } hover:text-blue-300 transition-all`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side - content display */}
      <div className="w-full lg:w-3/4 flex flex-col lg:flex-row p-6 text-white bg-black">
        {/* Text content */}
        <div className="flex-1 mb-6 lg:mb-0 lg:mr-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Nasze Usługi
          </h3>
          <p className="mb-4 text-lg text-gray-300">{selectedTab.content}</p>
          <Link href={selectedTab.link}>
            <button className="text-gray-400 hover:text-white transition-all flex items-center">
              Dowiedz się więcej
              <span className="ml-2 text-red-500">→</span>
            </button>
          </Link>
        </div>
        {/* Image only visible on large screens */}
        <div className="flex-shrink-0 hidden lg:block">
          <Image
            src={selectedTab.image}
            alt={selectedTab.title}
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
