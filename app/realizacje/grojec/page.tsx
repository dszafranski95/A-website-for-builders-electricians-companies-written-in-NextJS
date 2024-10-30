import React from 'react';
import GalleryProjects from '@/components/GalleryProjects';

const images = [
  '/images/realizacje/GrojecSerwerownia/1.jpg',
  '/images/realizacje/GrojecSerwerownia/2.jpg',
  '/images/realizacje/GrojecSerwerownia/3.jpg',
  '/images/realizacje/GrojecSerwerownia/4.jpg',
  '/images/realizacje/GrojecSerwerownia/5.jpg',
  '/images/realizacje/GrojecSerwerownia/6.jpg',
  '/images/realizacje/GrojecSerwerownia/7.jpg',
  '/images/realizacje/GrojecSerwerownia/8.jpg',
  '/images/realizacje/GrojecSerwerownia/9.jpg',
];

const GrojecPage: React.FC = () => {
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold pt-12 text-blue-100">Grojec Serverownia Gallery</h1>
      <GalleryProjects images={images} />
    </div>
  );
};

export default GrojecPage;
