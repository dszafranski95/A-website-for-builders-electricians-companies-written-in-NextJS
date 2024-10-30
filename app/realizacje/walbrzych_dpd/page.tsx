import React from 'react';
import GalleryProjects from '@/components/GalleryProjects';

const images = [
  '/images/realizacje/MagazynDPDWalbrzych/walbrzych1.jpg',
  '/images/realizacje/MagazynDPDWalbrzych/walbrzych2.jpg',
  '/images/realizacje/MagazynDPDWalbrzych/walbrzych3.jpg',
  '/images/realizacje/MagazynDPDWalbrzych/walbrzych4.jpg',
  '/images/realizacje/MagazynDPDWalbrzych/walbrzych5.jpg',
];

const WalbrzychDPDPage: React.FC = () => {
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold pt-12 text-blue-100">Magazyn DPD Wałbrzych Gallery</h1>
      <GalleryProjects images={images} />
    </div>
  );
};

export default WalbrzychDPDPage;
