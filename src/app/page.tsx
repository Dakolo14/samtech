import { HeroSection } from "@/components/HeroSection";
// import { MarqueeText } from "@/components/MarqueeText";
import { TrustedPartners } from "@/components/TrustedPartners";
import { LatestProjects } from "@/components/LatestProjects";
import { AchievementsSection } from "@/components/AchievementsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { MarketSectors } from "@/components/MarketSectors";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="w-full overflow-x-clip">
      <Navbar />
      <HeroSection />
      {/* <MarqueeText /> */}
      <TrustedPartners />
      <AboutSection />
      <MarketSectors />
      <LatestProjects />
      <AchievementsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
