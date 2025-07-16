import { motion } from 'framer-motion';
import { BiBook, BiCheckCircle, BiStar, BiUserPlus } from 'react-icons/bi';

const About = () => {
  const features = [
    {
      icon: BiBook,
      title: 'Kurikulum Terintegrasi',
      description:
        'Menggabungkan pendidikan agama Islam dengan kurikulum nasional dan internasional',
    },
    {
      icon: BiUserPlus,
      title: 'Tenaga Pengajar Berpengalaman',
      description:
        'Diasuh oleh ustadz dan ustadzah lulusan universitas terkemuka dalam dan luar negeri',
    },
    {
      icon: BiStar,
      title: 'Fasilitas Modern',
      description:
        'Dilengkapi dengan perpustakaan digital, laboratorium sains, dan area olahraga',
    },
    {
      icon: BiCheckCircle,
      title: "Program Tahfidz Al-Qur'an",
      description:
        "Membentuk generasi penghafal Al-Qur'an dengan metode pembelajaran efektif",
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-[#7aad42]/6 relative">
      <div className="absolute inset-0 "></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        }}
        className="container mx-auto px-4 md:px-6 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeInOut' },
          }}
          className="mx-auto text-center max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-base font-bold mb-6">
            Tentang <span className="text-[#61876b]">Al-Filaha</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis id nam est, praesentium doloribus dolore corrupti de
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[#a2cd5f]/80"
            >
              <h3 className="font-base text-2xl font-bold mb-3">Visi</h3>
              <p>
                Menjadi lembaga pendidikan Islam terdepan yang melahirkan
                generasi Muslim berilmu, bertakwa, mandiri, dan berwawasan
                global.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[#a2cd5f]/80"
            >
              <h3 className="font-base text-2xl font-bold mb-3">Misi</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <BiCheckCircle className="h-5 w-5 text-[#61876b] mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Menyelenggarakan pendidikan Islam berbasis Al-Qur'an dan
                    Sunnah
                  </span>
                </li>
                <li className="flex items-start">
                  <BiCheckCircle className="h-5 w-5 text-[#61876b] mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Membekali santri dengan ilmu pengetahuan dan teknologi
                    modern
                  </span>
                </li>
                <li className="flex items-start">
                  <BiCheckCircle className="h-5 w-5 text-[#61876b] mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Mengembangkan karakter dan akhlakul karimah dalam diri
                    santri
                  </span>
                </li>
                <li className="flex items-start">
                  <BiCheckCircle className="h-5 w-5 text-[#61876b] mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Membina keterampilan dan kemandirian santri melalui program
                    ekstrakurikuler
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }}
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[#a2cd5f]/20 hover:border-[#a2cd5f] transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-[#a2cd5f]/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#61876b]" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
