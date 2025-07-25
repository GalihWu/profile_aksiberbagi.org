import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';

interface Program {
  id: number;
  title: string;
  level: string;
  age: string;
  description: string;
  image: string;
  category: {
    name: string;
  };
}

interface ModalProgramsProps {
  linkProgram: string;
  closeModal: () => void;
}

const ModalPrograms = ({ linkProgram, closeModal }: ModalProgramsProps) => {
  const [detailProgram, setDetailProgram] = useState<Program | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function getDetailProgramMinimum(link: string) {
      setIsLoading(true);
      setError(null);

      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/program/link/${link}`,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            signal,
          }
        );
        setDetailProgram(res.data.data);
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

    getDetailProgramMinimum(linkProgram);

    return () => {
      controller.abort();
    };
  }, [linkProgram]);

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
          <div className="h-42 md:h-full relative">
            <img
              src={detailProgram?.image}
              alt={detailProgram?.title}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium bg-tosca-100 text-[#0c442c] px-2 py-1 rounded-full">
                {detailProgram?.category.name}
              </span>
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-3">
              {detailProgram?.title}
            </h3>
            <p className="text-gray-700 mb-4 text-xs md:text-base">
              {detailProgram?.description}
            </p>

            <button className="mt-6 w-full bg-[#19B697] text-white py-3 rounded-md hover:bg-[#138a72] transition-colors duration-300">
              Donasi Sekarang
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ModalPrograms;
