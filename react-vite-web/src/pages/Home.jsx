import Hero from "../components/Hero";
import OurServices from "../sub-pages/OurServices.jsx";
import Numbers from "../sub-pages/Numbers.jsx";
import Industries from "../sub-pages/Industries.jsx";
import Testimonials from "../sub-pages/Testimonials.jsx";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <Numbers />
      <Industries />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
