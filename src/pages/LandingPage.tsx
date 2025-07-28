import Hero from '../components/LandingPage/Hero';

import { motion, useScroll } from 'framer-motion';
import Programs from '../components/LandingPage/Programs';
import Collaboration from '../components/LandingPage/Collaboration';
import Achievements from '../components/LandingPage/Achievements';
import About from '../components/LandingPage/About';
import Service from '../components/LandingPage/Service';

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          zIndex: 100,
          backgroundColor: '#15BBDA',
        }}
      ></motion.div>
      <div className="min-h-screen">
        <Hero />
        <Achievements />
        <Collaboration />
        <About />
        <Service />
        <Programs />
        {/* <Articles /> */}
        {/* <Galery /> */}
        {/* <Contact /> */}
      </div>
    </>
  );
};

export default LandingPage;
