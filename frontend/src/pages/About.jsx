import MainLayout from "../layouts/MainLayout";
import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import WhyChoose from "../components/about/WhyChoose";
import Stats from "../components/about/Stats";
import TeamSection from "../components/about/TeamSection";
import Values from "../components/about/Values";
import CTASection from "../components/about/CTASection";

const About = () => {
  return (
    <MainLayout>

      <AboutHero />
      <OurStory />
      <WhyChoose />
      <Stats />
      <TeamSection />
      <Values />
      <CTASection />


    </MainLayout>
  );
};

export default About;