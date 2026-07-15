import MainLayout from "../layouts/MainLayout";
import ContactHero from "../components/contact/ContactHero";
import ContactCards from "../components/contact/ContactCards";
import ContactForm from "../components/contact/ContactForm";
import FAQ from "../components/contact/FAQ";
import LocationMap from "../components/contact/LocationMap";
import StayConnected from "../components/contact/StayConnected";

const Contact = () => {
  return (
    <MainLayout>
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <FAQ />
      <LocationMap />
      <StayConnected />
    </MainLayout>
  );
};

export default Contact;