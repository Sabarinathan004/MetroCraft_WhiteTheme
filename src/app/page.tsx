import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { BusinessVerticals } from "@/components/sections/BusinessVerticals";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TrustedClients } from "@/components/sections/TrustedClients";
import { WhyPartner } from "@/components/sections/WhyPartner";
import { NewsAndResources } from "@/components/sections/NewsAndResources";
import { ContactSection, Footer } from "@/components/sections/ContactFooter";
import { PageLoader } from "@/components/motion/MotionWrappers";

export default function Home() {
  return (
    <PageLoader>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <BusinessVerticals />
        <FeaturedProjects />
        <TrustedClients />
        <WhyPartner />
        <NewsAndResources />
        <ContactSection />
      </main>
      <Footer />
    </PageLoader>
  );
}
