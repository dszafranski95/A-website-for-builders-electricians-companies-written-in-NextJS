// app/oferta/page.tsx
import PricingSection from '@/components/PricingSection';
import PricingPlansSection from '@/components/PricingPlansSection';
// import FeatureSection from '@/components/FeatureSection'; // Remove this line
import ServicesSection from '@/components/ServicesSectionTwo';
import CallToActionSection from '@/components/CallToActionSection';

export default function OfertaPage() {
  return (
    <div className='pt-12 bg-gradient-to-r from-slate-900 to-blue-900'>
      {/* Inne komponenty lub treści strony */}
      <PricingPlansSection />
      <PricingSection />
      <ServicesSection />
      <CallToActionSection />
      {/* Inne komponenty lub treści */}
    </div>
  );
}
