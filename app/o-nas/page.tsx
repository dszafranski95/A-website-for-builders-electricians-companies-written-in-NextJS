// energo-app\app\o-nas\page.tsx
// app/o-nas/page.tsx
import AboutUsSection from '@/components/AboutUsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FeaturesSection from '@/components/FeaturesSection';
import FeatureCardsSection from '@/components/FeatureCardsSection';

export default function AboutUsPage() {
  return (
<div className='pt-12'>
<div className='pt-12'>

      <AboutUsSection />
      </div>

      <WhyChooseUsSection />
      <FeaturesSection />

      <FeatureCardsSection />
      


      {/* Możesz dodać więcej treści o firmie poniżej */}
    </div>
  );
}
