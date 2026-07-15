import MainLayout from "../layouts/MainLayout";

import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedEvents from "../components/home/FeaturedEvents";
import FeaturedTalent from "../components/home/FeaturedTalent";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

const Home = () => {
    return (
        <MainLayout>
            <Hero />



            <Categories />

            <FeaturedEvents />

            <FeaturedTalent />

            <WhyChooseUs />

            <Testimonials />

            <CTA />
        </MainLayout>
    );
};

export default Home;