import { HeroTitle } from './home/HeroTitle';
import { FeaturesSection } from './home/FeaturesSection';
import { FAQSection } from './home/FAQSection';
import { WaitlistSection } from './home/WaitlistSection';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroTitle />
      <FeaturesSection />
      <FAQSection />
      <WaitlistSection />
    </div>
  );
}

export default HomePage;