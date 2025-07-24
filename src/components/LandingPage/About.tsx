import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="tentang"
      className="pt-20 md:pt-32 pb-24 relative overflow-hidden    bg-gradient-tosca"
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
                src="/assets/image/Tentang-Aksiberbagi.webp"
                alt="Santri Pondok Pesantren"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="text-center md:text-left space-y-6 md:pr-6 h-full py-8"
            variants={fadeInUp}
          >
            <div>
              <div className="text-lg md:text-xl font-semibold text-tosca-500 mb-2">
                Tentang Aksiberbagi
              </div>
              <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-tight"
                variants={fadeInUp}
              >
                Bersama <span className="text-tosca-500"> Aksiberbagi</span>{' '}
                <br />
                Berbagi Kebaikan Setiap Hari <br /> Lebih Mudah
              </motion.h1>
            </div>

            <motion.p className="text-lg md:text-xl" variants={fadeInUp}>
              <span className="font-semibold text-tosca-500">
                {' '}
                Aksiberbagi.com{' '}
              </span>{' '}
              adalah platform donasi online yang berkomitmen untuk memudahkan
              setiap individu berkontribusi dalam menciptakan perubahan positif
              bagi sesama. Dengan semangat berbagi dan kepedulian yang tinggi,
              kami menghubungkan para donatur dengan berbagai proyek sosial yang
              membutuhkan bantuan.
            </motion.p>
            <motion.p className="text-lg md:text-xl" variants={fadeInUp}>
              Berdiri sejak 2017. Mulai aktif menggalang dana pada tahun 2020.
              Mendapat izin Dinas Sosial Kota Surakarta pada tahun 2021. Pada
              tahun 2023 resmi menjadi Mitra Pengelola Zakat (MPZ) Dompet
              Dhuafa.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
