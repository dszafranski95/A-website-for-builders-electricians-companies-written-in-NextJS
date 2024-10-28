// app/page.tsx
import ServicesSection from '@/components/ServicesSection';
import ProjectsCTA from '@/components/ProjectsCTA';
import ContactButtonTwo from '@/components/ContactButtonTwo';

export default function HomePage() {
  return (
    <div>
      {/* Inne komponenty strony głównej */}
      <ServicesSection />
      <ProjectsCTA />

      {/* Nowy komponent przycisku kontaktowego */}
      <ContactButtonTwo />

      {/* Inne komponenty */}
    </div>
  );
}
