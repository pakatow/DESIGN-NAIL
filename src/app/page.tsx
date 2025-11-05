import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import SolutionsSection from "@/components/sections/solutions-section";
import PainsSection from "@/components/sections/pains-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FaqSection from "@/components/sections/faq-section";
import PricingSection from "@/components/sections/pricing-section";
import {
  dores,
  depoimentos,
  faq,
  rodapeData,
  pacotes,
} from "@/lib/data";
import GuaranteeSection from "@/components/sections/guarantee-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <HeroSection />
        <PainsSection data={dores} />
        <SolutionsSection />
        <PricingSection pacotes={pacotes} />
        <TestimonialsSection depoimentos={depoimentos} />
        <GuaranteeSection />
        <FaqSection faqs={faq} />
      </main>
      <Footer data={rodapeData} />
    </div>
  );
}
