// app/realizacje/page.tsx
import ProjectCard from "@/components/ProjectCard";

const projects = [
  { title: "Magazyn DPD Wałbrzych", link: "/realizacje/walbrzych_dpd", image: "/images/realizacje/MagazynDPDWalbrzych/walbrzych5.jpg" },
  { title: "Virgin Krakow Airport, Balice", link: "/realizacje/virgin_krakow", image: "/images/realizacje/VirginKrakowBalice/virgin.jpg" },
  { title: "Inkubator Ząbkowice Śląskie", link: "/realizacje/inkubator", image: "/images/realizacje/Inkubator/inkubator.jpeg" },
  { title: "TBS Bielawa ul. Techników", link: "/realizacje/tbs", image: "/images/realizacje/TBSBielawa/tbs.webp" },
  { title: "InwestPark Ząbkowice Śląskie", link: "/realizacje/zabkowice", image: "/images/realizacje/InvestParkZabkowice/64e4bf5b3c105_o_medium.jpg" },
  { title: "Invest Park Dzierżoniów", link: "/realizacje/dzierzoniow", image: "/images/realizacje/InvestParkDdz/images/26.jpg" },
  { title: "Katowice Serwerownia", link: "/realizacje/katowice", image: "/images/realizacje/KatowiceSerwerownia/katowice3.png" },
  { title: "Grójec Serwerownia", link: "/realizacje/grojec", image: "/images/realizacje/GrojecSerwerownia/8.jpg" },
];

export default function RealizacjePage() {
  return (
    <div className="pt-12 bg-gradient-to-r from-slate-900 to-blue-900">
    <div className="max-w-7xl mx-auto p-6 pt-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-300">Nasze Realizacje</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
