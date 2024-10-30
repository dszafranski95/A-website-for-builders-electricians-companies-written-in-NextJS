import React from 'react';
import GalleryProjects from '@/components/GalleryProjects';

const images = [
  '/images/realizacje/Inkubator/1.jpg',
  '/images/realizacje/Inkubator/2.jpg',
  '/images/realizacje/Inkubator/3.jpg',
  '/images/realizacje/Inkubator/4.jpg',
  '/images/realizacje/Inkubator/inkubator.jpeg',
];

const InkubatorPage: React.FC = () => {
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold pt-12 text-blue-100">Inkubator Gallery</h1>
      <GalleryProjects images={images} />
    </div>
  );
};

export default InkubatorPage;
