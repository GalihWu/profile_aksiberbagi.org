import { motion, type Variants } from 'framer-motion';
import { BiChevronRight } from 'react-icons/bi';

const Hero = () => {
  const floatingVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const buttonHover: Variants = {
    hover: { scale: 1.03 },
    tap: { scale: 0.98 },
  };

  return (
    <section
      id="beranda"
      className="pt-20 md:pt-32 pb-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="text-center md:text-left space-y-6 md:pr-6"
            variants={fadeInUp}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-tosca-100 text-gray rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Platform Donasi Online Terpercaya
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
              variants={fadeInUp}
            >
              Bersama Wujudkan Kebaikan Melalui{' '}
              <span className="text-tosca-500"> Aksiberbagi</span>
            </motion.h1>

            <motion.p className="text-lg md:text-xl" variants={fadeInUp}>
              Dengan semangat berbagi dan kepedulian yang tinggi, kami
              menghubungkan para donatur dengan berbagai proyek sosial yang
              membutuhkan bantuan.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
              variants={fadeInUp}
            >
              <motion.a
                className="bg-tosca-500 hover:bg-[#0c442c] font-medium text-white flex space-x-3 px-6 py-2 items-center justify-center rounded-xl cursor-pointer "
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                href="https://donasi.aksiberbagi.org/"
              >
                Donasi Sekarang
                <BiChevronRight className="ml-2 h-6 w-6" />
              </motion.a>

              <motion.button
                className="border-[#61876b] text-[#61876b] font-medium border px-6 py-2 rounded-xl cursor-pointers"
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/assets/image/hero.webp"
                alt="Santri Pondok Pesantren"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs"
              variants={floatingVariants}
              initial="initial"
              animate="animate"
            >
              <div className="flex flex-col items-center space-x-3">
                <h3 className="text-xl font-semibold ">Slogan atau yng lain</h3>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
