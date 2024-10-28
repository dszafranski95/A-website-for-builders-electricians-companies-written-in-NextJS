import React from 'react';
import GalleryProjects from '@/components/GalleryProjects';

const images = [
  '/images/realizacje/InvestParkZabkowice/1.jpg',
  '/images/realizacje/InvestParkZabkowice/2.jpg',
  '/images/realizacje/InvestParkZabkowice/3.jpg',
  '/images/realizacje/InvestParkZabkowice/4.jpg',
  '/images/realizacje/InvestParkZabkowice/5.jpg',
  '/images/realizacje/InvestParkZabkowice/6.jpg',
  '/images/realizacje/InvestParkZabkowice/7.jpg',
  '/images/realizacje/InvestParkZabkowice/8.jpg',
  '/images/realizacje/InvestParkZabkowice/9.jpg',
  '/images/realizacje/InvestParkZabkowice/10.jpg',
  '/images/realizacje/InvestParkZabkowice/11.jpg',
  '/images/realizacje/InvestParkZabkowice/12.jpg',
  '/images/realizacje/InvestParkZabkowice/13.jpg',
  '/images/realizacje/InvestParkZabkowice/14.jpg',
  '/images/realizacje/InvestParkZabkowice/15.jpg',
  '/images/realizacje/InvestParkZabkowice/16.jpg',
  '/images/realizacje/InvestParkZabkowice/17.jpg',
  '/images/realizacje/InvestParkZabkowice/18.jpg',
  '/images/realizacje/InvestParkZabkowice/19.jpg',
  '/images/realizacje/InvestParkZabkowice/64e4bf5b3c105_o_medium.jpg',
];

const ZabkowicePage: React.FC = () => {
  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold pt-12">Invest Park Ząbkowice Gallery</h1>
      <GalleryProjects images={images} />
    </div>
  );
};

export default ZabkowicePage;
