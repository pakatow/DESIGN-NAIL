import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import BenefitsSection from "@/components/sections/benefits-section";
import ModulesSection from "@/components/sections/modules-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FaqSection from "@/components/sections/faq-section";
import PricingSection from "@/components/sections/pricing-section";
import {
  heroData,
  beneficios,
  modulos,
  depoimentos,
  faq,
  rodapeData,
  instructorData,
  pacotes,
} from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <HeroSection data={heroData} />
        <BenefitsSection benefits={beneficios} />
        <ModulesSection modules={modulos} />
        <PricingSection pacotes={pacotes} />
        <TestimonialsSection depoimentos={depoimentos} />
        <FaqSection faqs={faq} />
      </main>
      <div className="sticky bottom-0 w-full p-4 bg-background/80 backdrop-blur-sm border-t z-30 md:hidden">
          <a href={heroData.url_cta} className="w-full">
              <Button size="lg" className="w-full text-lg h-14 font-bold bg-green-500 hover:bg-green-600 text-white shadow-lg">
                  <ShoppingCart className="mr-2 h-6 w-6" /> QUERO MINHA VAGA
              </Button>
          </a>
      </div>
      <Footer data={rodapeData} />
    </div>
  );
}
