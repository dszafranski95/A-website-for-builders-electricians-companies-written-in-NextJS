// app/page.tsx
import Hero from "@/components/Hero"; // Importujemy Hero
import AboutComponent from "@/components/AboutComponent"; // Import your new component
import TabComponent from '@/components/TabComponent'; // Ensure the correct path to TabComponent
import GallerySection from '@/components/GallerySection';
import ImpactSection from '@/components/ImpactSection';
import ContactButton from '@/components/ContactButton';
import WelcomeSection from '@/components/WelcomeSection';

export default function Home() {
  return (
      <main>
        {/* Include Hero at the top */}
        <Hero />
        
        {/* Add the AboutComponent here */}
        <AboutComponent />
        <TabComponent />

        <GallerySection />
        <div className="pt-12" id="impact">
        <ImpactSection />
        </div>
       <WelcomeSection />

        
      </main>
  );
}
