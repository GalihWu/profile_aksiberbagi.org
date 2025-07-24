import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { MdAnchor } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';

interface Program {
  id: number;
  title: string;
  level: string;
  age: string;
  description: string;
  image: string;
  category: 'masyarakat' | 'anak' | 'semua';
}

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<
    'semua' | 'masyarakat' | 'anak'
  >('semua');

  const programs: Program[] = [
    {
      id: 1,
      title: 'Bantuan Pendidikan Anak Yatim',
      level: 'Program Pendidikan',
      age: '6-18 tahun',
      description:
        'Bantuan biaya pendidikan untuk anak yatim dan dhuafa agar bisa terus bersekolah',
      image: '/assets/image/program-1.webp',
      category: 'anak',
    },
    {
      id: 2,
      title: 'Bantuan Modal Usaha',
      level: 'Program Ekonomi',
      age: 'Dewasa',
      description:
        'Bantuan modal usaha untuk keluarga prasejahtera agar bisa mandiri secara ekonomi',
      image: '/assets/image/program-2.webp',
      category: 'masyarakat',
    },
    {
      id: 3,
      title: 'Paket Sembako Bulanan',
      level: 'Program Sosial',
      age: 'Semua usia',
      description:
        'Distribusi paket sembako bulanan untuk keluarga yang membutuhkan',
      image: '/assets/image/program-3.webp',
      category: 'masyarakat',
    },
    {
      id: 4,
      title: 'Beasiswa Santri Berprestasi',
      level: 'Program Pendidikan',
      age: '12-18 tahun',
      description:
        'Beasiswa untuk santri berprestasi yang kurang mampu secara ekonomi',
      image: '/assets/image/program-4.webp',
      category: 'anak',
    },
  ];

  const filteredPrograms =
    activeFilter === 'semua'
      ? programs
      : programs.filter((program) => program.category === activeFilter);

  const openModal = (program: Program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <section id="program" className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Program <span className="text-tosca-500">Donasi</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Mereka membutuhkan kita segera!
            </p>
          </div>

          {/* filter */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-wrap gap-2 md:gap-4">
              <button
                onClick={() => setActiveFilter('semua')}
                className={`text-sm md:text-base font-medium border w-fit px-3 py-1 rounded-2xl flex items-center gap-2 transition-colors ${
                  activeFilter === 'semua'
                    ? 'bg-[#19B697] text-white border-[#19B697]'
                    : 'border-gray-300 hover:border-[#19B697] hover:text-[#19B697]'
                }`}
              >
                <MdAnchor className="text-xs md:text-sm" />
                Semua Program
              </button>
              <button
                onClick={() => setActiveFilter('masyarakat')}
                className={`text-sm md:text-base font-medium border w-fit px-3 py-1 rounded-2xl flex items-center gap-2 transition-colors ${
                  activeFilter === 'masyarakat'
                    ? 'bg-[#19B697] text-white border-[#19B697]'
                    : 'border-gray-300 hover:border-[#19B697] hover:text-[#19B697]'
                }`}
              >
                <MdAnchor className="text-xs md:text-sm" />
                Masyarakat
              </button>
              <button
                onClick={() => setActiveFilter('anak')}
                className={`text-sm md:text-base font-medium border w-fit px-3 py-1 rounded-2xl flex items-center gap-2 transition-colors ${
                  activeFilter === 'anak'
                    ? 'bg-[#19B697] text-white border-[#19B697]'
                    : 'border-gray-300 hover:border-[#19B697] hover:text-[#19B697]'
                }`}
              >
                <MdAnchor className="text-xs md:text-sm" />
                Anak
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-48 md:h-56 overflow-hidden relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full">
                      {program.level}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {program.description}
                  </p>
                  <button
                    onClick={() => openModal(program)}
                    className="flex justify-center items-center w-full text-tosca-500 font-semibold cursor-pointer bg-tosca-100 px-4 py-2 rounded-md transition-colors duration-300"
                    aria-label={`Detail program ${program.title}`}
                  >
                    <span>Detail Program</span>
                    <BsArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* modal */}
      {isModalOpen && selectedProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <CgClose size={24} className="text-gray-600" />
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-64 md:h-full relative">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium bg-[#a2cd5f]/20 text-[#0c442c] px-2 py-1 rounded-full">
                    {selectedProgram.level}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {selectedProgram.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {selectedProgram.description}
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Detail Program:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Bantuan diberikan setiap bulan</li>
                    <li>Penerima akan diseleksi secara ketat</li>
                    <li>Monitoring perkembangan penerima manfaat</li>
                    <li>Laporan transparan untuk donatur</li>
                  </ul>
                </div>
                <button className="mt-6 w-full bg-[#19B697] text-white py-3 rounded-md hover:bg-[#138a72] transition-colors duration-300">
                  Donasi Sekarang
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Programs;
