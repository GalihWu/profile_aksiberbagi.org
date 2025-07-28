import { motion } from 'framer-motion';

const Service = () => {
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
    <section id="collab" className="section-home">
      <div className="container-home ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mb-12 md:mb-16 mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Pelayanan <span className="text-tosca-500">Kami</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Mereka yang percaya pada kami & berhasil membawa misi mereka ke
            kehidupan!
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 w-full mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                viewport={{ once: false, margin: '-50px' }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src="/assets/image/pengawasan.jpg"
                  alt="Pengawasan"
                  className="w-full h-auto mb-4"
                />
                <h2 className="text-lg font-semibold mb-4">
                  Kami melakukan pemantauan & evaluasi yang ketat
                </h2>
                <p>
                  Execute data-driven progress monitoring and refinement to
                  achieve sustainable goals.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
