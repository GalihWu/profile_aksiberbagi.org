import { BiGroup, BiCalendarCheck, BiHappyHeartEyes } from 'react-icons/bi';
import { FaDonate, FaHandsHelping } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Achievements = () => {
  // Data pencapaian untuk memudahkan mapping
  const achievements = [
    {
      icon: <FaDonate className="text-tosca-500 text-4xl md:text-5xl" />,
      count: '900+',
      title: 'Program Terdanai',
      description: 'Program sosial yang telah mendapatkan pendanaan',
    },
    {
      icon: <BiGroup className="text-tosca-500 text-4xl md:text-5xl" />,
      count: '137.337',
      title: 'Relawan Bergabung',
      description: 'Orang baik yang telah menjadi bagian dari kami',
    },
    {
      icon: <BiCalendarCheck className="text-tosca-500 text-4xl md:text-5xl" />,
      count: '250+',
      title: 'Kegiatan Rutin',
      description: 'Kegiatan yang diselenggarakan setiap bulan',
    },
    {
      icon: (
        <BiHappyHeartEyes className="text-tosca-500 text-4xl md:text-5xl" />
      ),
      count: '1.2jt+',
      title: 'Penerima Manfaat',
      description: 'Orang yang telah merasakan manfaat program kami',
    },
  ];

  // Animasi untuk setiap item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="achievements" className="section-home bg-tosca-100">
      {/* Background dengan efek modern */}
      <div className="absolute inset-0 bg-gradient-to-br from-tosca-100 to-tosca-50 opacity-90 z-0"></div>

      {/* Efek dekoratif */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-tosca-200 opacity-20 z-0"></div>
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-tosca-300 opacity-20 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Pencapaian <span className="text-tosca-500">Kami</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Kontribusi dan dampak positif yang telah kami berikan bersama para
            donatur dan relawan
          </p>
        </motion.div>

        {/* Grid pencapaian */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="mb-4 p-3 bg-tosca-50 rounded-full">
                {achievement.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {achievement.count}
              </h3>
              <h4 className="text-xl font-semibold text-tosca-600 mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA tambahan */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ingin menjadi bagian dari pencapaian kami selanjutnya?
          </p>
          <button className="bg-white hover:bg-tosca-700 text-tosca-500 font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center mx-auto cursor-pointer">
            <FaHandsHelping className="mr-2" />
            Bergabung Sekarang
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
