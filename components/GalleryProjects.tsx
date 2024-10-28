"use client"
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface GalleryProjectsProps {
  images: string[];
}

const GalleryProjects: React.FC<GalleryProjectsProps> = ({ images }) => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/realizacje');
  };

  return (
    <div>
      <div className="flex items-center mb-6 cursor-pointer mt-5" onClick={handleBack}>
        <FaArrowLeft className="text-blue-500 mr-2" />
        <span className="text-blue-500 font-semibold hover:underline">
          Powrót
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8">
        {images.map((src, index) => (
          <div key={index}>
            <img className="h-auto max-w-full rounded-lg" src={src} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryProjects;
