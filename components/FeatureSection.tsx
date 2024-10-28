// components/FeatureSection.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSolarPanel,
  faBolt,
  faChargingStation,
  faNetworkWired,
  faBatteryFull,
  faTools,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureSection.module.css';

const FeatureSection = () => {
  return (
    <section className={`${styles.bgAnimated} ${styles.cyberGrid} py-20 relative overflow-hidden bg-slate-900 text-white`}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${styles.neonText} ${styles.glitchEffect} text-blue-500`}
          data-text="NASZE TECHNOLOGIE"
        >
          NASZE TECHNOLOGIE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pierwsza cecha */}
          <div className={`${styles.featureCard} rounded-lg p-6 bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <div className="text-5xl mb-4 text-blue-400 feature-icon">
              <FontAwesomeIcon icon={faSolarPanel} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Nowoczesne Panele Fotowoltaiczne</h3>
            <p className="text-gray-400">
              Wykorzystujemy najnowsze panele słoneczne o wysokiej wydajności, aby zapewnić maksymalną efektywność energetyczną.
            </p>
          </div>
          {/* Druga cecha */}
          <div className={`${styles.featureCard} rounded-lg p-6 bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300`} style={{ animationDelay: '1s' }}>
            <div className="text-5xl mb-4 text-yellow-400 feature-icon">
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Inteligentne Instalacje Elektryczne</h3>
            <p className="text-gray-400">
              Nasze inteligentne systemy elektryczne zapewniają bezpieczeństwo i oszczędność energii w Twoim domu.
            </p>
          </div>
          {/* Trzecia cecha */}
          <div className={`${styles.featureCard} rounded-lg p-6 bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300`} style={{ animationDelay: '2s' }}>
            <div className="text-5xl mb-4 text-green-400 feature-icon">
              <FontAwesomeIcon icon={faChargingStation} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Stacje Ładowania Pojazdów Elektrycznych</h3>
            <p className="text-gray-400">
              Oferujemy instalację nowoczesnych stacji ładowania dla Twojego pojazdu elektrycznego.
            </p>
          </div>
          {/* Czwarta cecha */}
          <div className={`${styles.featureCard} rounded-lg p-6 bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300`} style={{ animationDelay: '0.5s' }}>
            <div className="text-5xl mb-4 text-red-400 feature-icon">
              <FontAwesomeIcon icon={faNetworkWired} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Systemy Inteligentnego Domu</h3>
            <p className="text-gray-400">
              Integrujemy systemy inteligentnego zarządzania domem dla pełnej kontroli nad zużyciem energii.
            </p>
          </div>
          {/* Piąta cecha */}
          <div className={`${styles.featureCard} rounded-lg p-6 bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300`} style={{ animationDelay: '1.5s' }}>
            <div className="text-5xl mb-4 text-purple-400 feature-icon">
              <FontAwesomeIcon icon={faBatteryFull} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Magazynowanie Energii</h3>
            <p className="text-gray-400">
              Nasze systemy magazynowania energii pozwalają na optymalne wykorzystanie wyprodukowanej energii.
            </p>
          </div>
          {/* Szósta cecha */}
          <div className={`${styles.featureCard} rounded-lg p-6 bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300`} style={{ animationDelay: '2.5s' }}>
            <div className="text-5xl mb-4 text-teal-400 feature-icon">
              <FontAwesomeIcon icon={faTools} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Serwis i Wsparcie Techniczne</h3>
            <p className="text-gray-400">
              Zapewniamy profesjonalny serwis i wsparcie techniczne dla wszystkich naszych instalacji.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
