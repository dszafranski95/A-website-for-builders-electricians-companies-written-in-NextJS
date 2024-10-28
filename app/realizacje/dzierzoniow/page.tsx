import React from 'react';
import GalleryProjects from '@/components/GalleryProjects';

// Generowanie ścieżek dla obrazów od 1 do 50
const images = [
  ...Array.from({ length: 50 }, (_, index) => 
    `/images/realizacje/InvestParkDdz/images/${index + 1}.jpg`
  ),
  // Dodatkowe obrazy
  '/images/realizacje/InvestParkDdz/images/invest.jpg',
  '/images/realizacje/InvestParkDdz/images/photo_2024-02-20_15-53-59 (5).jpg',
  '/images/realizacje/InvestParkDdz/images/photo_2024-02-20_15-53-59.jpg',
];

const DzierzoniowPage: React.FC = () => {
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold pt-12">Dzierżoniów Gallery</h1>
      <GalleryProjects images={images} />
    </div>
  );
};

export default DzierzoniowPage;
