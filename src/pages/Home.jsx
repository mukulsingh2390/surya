import Hero from "../components/Hero.jsx";
import OurServices from "../sub-pages/OurServices.jsx";
import Numbers from "../sub-pages/Numbers.jsx";
import Industries from "../sub-pages/Industries.jsx";
import Partners from "../sub-pages/Partners";
import Testimonials from "../sub-pages/Testimonials.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <Numbers />
      <Industries />
      <Partners />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
