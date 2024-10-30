import React from 'react';
import GalleryProjects from '@/components/GalleryProjects';

const images = [
  '/images/realizacje/TBSBielawa/1.jpg',
  '/images/realizacje/TBSBielawa/2.jpg',
  '/images/realizacje/TBSBielawa/3.jpg',
  '/images/realizacje/TBSBielawa/4.jpg',
  '/images/realizacje/TBSBielawa/5.jpg',
  '/images/realizacje/TBSBielawa/6.jpg',
  '/images/realizacje/TBSBielawa/7.jpg',
  '/images/realizacje/TBSBielawa/8.jpg',
  '/images/realizacje/TBSBielawa/9.jpg',
  '/images/realizacje/TBSBielawa/10.jpg',
  '/images/realizacje/TBSBielawa/11.jpg',
  '/images/realizacje/TBSBielawa/12.jpg',
  '/images/realizacje/TBSBielawa/13.jpg',
  '/images/realizacje/TBSBielawa/14.jpg',
  '/images/realizacje/TBSBielawa/15.jpg',
  '/images/realizacje/TBSBielawa/16.jpg',
  '/images/realizacje/TBSBielawa/17.jpg',
  '/images/realizacje/TBSBielawa/18.jpg',
  '/images/realizacje/TBSBielawa/19.jpg',
  '/images/realizacje/TBSBielawa/20.jpg',
  '/images/realizacje/TBSBielawa/21.jpg',
  '/images/realizacje/TBSBielawa/22.jpg',
  '/images/realizacje/TBSBielawa/23.jpg',
  '/images/realizacje/TBSBielawa/24.jpg',
  '/images/realizacje/TBSBielawa/25.jpg',
  '/images/realizacje/TBSBielawa/26.jpg',
  '/images/realizacje/TBSBielawa/27.jpg',
  '/images/realizacje/TBSBielawa/28.jpg',
  '/images/realizacje/TBSBielawa/29.jpg',
  '/images/realizacje/TBSBielawa/30.jpg',
  '/images/realizacje/TBSBielawa/31.jpg',
  '/images/realizacje/TBSBielawa/32.jpg',
  '/images/realizacje/TBSBielawa/33.jpg',
  '/images/realizacje/TBSBielawa/34.jpg',
  '/images/realizacje/TBSBielawa/35.jpg',
  '/images/realizacje/TBSBielawa/36.jpg',
  '/images/realizacje/TBSBielawa/37.jpg',
  '/images/realizacje/TBSBielawa/38.jpg',
  '/images/realizacje/TBSBielawa/39.jpg',
  '/images/realizacje/TBSBielawa/40.jpg',
  '/images/realizacje/TBSBielawa/41.jpg',
  '/images/realizacje/TBSBielawa/42.jpg',
  '/images/realizacje/TBSBielawa/43.jpg',
  '/images/realizacje/TBSBielawa/tbs.webp',
];

const TBSBielawaPage: React.FC = () => {
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold pt-12 text-blue-100">TBS Bielawa Gallery</h1>
      <GalleryProjects images={images} />
    </div>
  );
};

export default TBSBielawaPage;
