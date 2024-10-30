import React from 'react';
import GalleryProjects from '@/components/GalleryProjects';

const images = [
  '/images/realizacje/VirginKrakowBalice/1.jpg',
  '/images/realizacje/VirginKrakowBalice/2.jpg',
  '/images/realizacje/VirginKrakowBalice/3.jpg',
  '/images/realizacje/VirginKrakowBalice/4.jpg',
  '/images/realizacje/VirginKrakowBalice/5.jpg',
  '/images/realizacje/VirginKrakowBalice/6.jpg',
  '/images/realizacje/VirginKrakowBalice/7.jpg',
  '/images/realizacje/VirginKrakowBalice/8.jpg',
  '/images/realizacje/VirginKrakowBalice/9.jpg',
  '/images/realizacje/VirginKrakowBalice/10.jpg',
  '/images/realizacje/VirginKrakowBalice/11.jpg',
  '/images/realizacje/VirginKrakowBalice/virgin.jpg',
];

const VirginKrakowPage: React.FC = () => {
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold pt-12 text-blue-100">Virgin Kraków Balice Gallery</h1>
      <GalleryProjects images={images} />
    </div>
  );
};

export default VirginKrakowPage;
