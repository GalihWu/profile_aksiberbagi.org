import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { MdAnchor } from 'react-icons/md';
import { useState, useEffect } from 'react';
import ModalPrograms from './ModalPrograms';
import axios from 'axios';

interface Program {
  id: number;
  title: string;
  level: string;
  age: string;
  description: string;
  image: string;
  link: string;
  category: {
    name: string;
  };
}

interface Category {
  id: number;
  name: string;
  image_url: string;
}

const Programs = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('semua');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchData() {
      setIsLoading(true);
      setError(null);

      try {
        // Fetch programs and categories concurrently
        const [programsResponse, categoriesResponse] = await Promise.all([
          axios.get(
            `https://admin.aksiberbagi.com/api/beranda/program-vertical`,
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              signal,
            }
          ),
          axios.get(`https://admin.aksiberbagi.com/api/program-category`, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            signal,
          }),
        ]);

        setPrograms(programsResponse.data.data);
        setCategories(categoriesResponse.data.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request canceled:', err.message);
        } else {
          console.error('Error fetching data:', err);
          setError('Gagal memuat data. Silakan coba lagi.');
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  const filteredPrograms =
    activeFilter === 'semua'
      ? programs
      : programs.filter((program) => program.category.name === activeFilter);

  const openModal = (program: Program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (isLoading) {
    return (
      <section id="program" className="section-home bg-gradient-tosca-2">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tosca-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="program" className="section-home bg-gradient-tosca-2">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="program" className="section-home bg-gradient-tosca-2">
        <div className="container mx-auto px-4 md:px-6 ">
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
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.name)}
                  className={`text-sm md:text-base font-medium border w-fit px-3 py-1 rounded-2xl flex items-center gap-2 transition-colors ${
                    activeFilter === category.name
                      ? 'bg-[#19B697] text-white border-[#19B697]'
                      : 'border-gray-300 hover:border-[#19B697] hover:text-[#19B697]'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                    <img
                      src={category.image_url}
                      alt={category.name}
                      className="object-cover h-full"
                      loading="lazy"
                    />
                  </div>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <div className="min-h-40">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-tosca-100">
                          {program.category.name}
                        </span>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold mb-2">
                        {program.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => openModal(program)}
                      className="mt-auto flex justify-center items-center w-full text-white font-semibold cursor-pointer bg-tosca-200 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-tosca-300"
                      aria-label={`Detail program ${program.title}`}
                    >
                      <span>Detail Program</span>
                      <BsArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-8 text-gray-500">
                Tidak ada program yang tersedia
              </div>
            )}
          </div>
        </div>
      </section>

      {/* modal */}
      {isModalOpen && selectedProgram && (
        <ModalPrograms
          linkProgram={selectedProgram.link}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default Programs;
