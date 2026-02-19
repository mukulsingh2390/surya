import Hero from "../components/Hero";
import OurServices from "../sub-pages/ourservices";
import Numbers from "../sub-pages/numbers";
import Contact from "./Contact";
import Industries from "../sub-pages/industries";
import Testimonials from "../sub-pages/testimonials";

const Home = () => {
  return (
    <>
      <Hero />

      {/* Our Services Section */}
      <OurServices />
       <Numbers />
       <Industries/>
       <Testimonials/>

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default Home;
