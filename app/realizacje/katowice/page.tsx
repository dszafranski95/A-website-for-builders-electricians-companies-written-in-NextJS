import React from 'react';
import GalleryProjects from '@/components/GalleryProjects';

const images = [
  '/images/realizacje/KatowiceSerwerownia/katowice.png',
  '/images/realizacje/KatowiceSerwerownia/katowice1.png',
  '/images/realizacje/KatowiceSerwerownia/katowice3.png',
  '/images/realizacje/KatowiceSerwerownia/katowice4.png',
  '/images/realizacje/KatowiceSerwerownia/katowice5.png',
  '/images/realizacje/KatowiceSerwerownia/katowice6.png',
  '/images/realizacje/KatowiceSerwerownia/katowice7.png',
];

const KatowicePage: React.FC = () => {
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold pt-12">Katowice Serverownia Gallery</h1>
      <GalleryProjects images={images} />
    </div>
  );
};

export default KatowicePage;
