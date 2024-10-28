// components/ProjectCard.tsx
import Link from "next/link";

const ProjectCard = ({ title, link, image }) => {
  return (
    <Link href={link} className="relative block overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center p-4">
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
    </Link>
  );
};

export default ProjectCard;
