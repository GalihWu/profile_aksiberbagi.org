import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0c442c] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div>
                <h3 className="text-xl font-display font-bold">Al-Filaha</h3>
                <p className="text-xs text-gray-300">Pondok Pesantren Modern</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Membentuk generasi Qurani yang berakhlak mulia dan berwawasan
              global.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-[#0c442c] hover:bg-[#0c442c]/80 transition-colors p-2 rounded-full"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="bg-[#0c442c] hover:bg-[#0c442c]/80 transition-colors p-2 rounded-full"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="#"
                className="bg-[#0c442c] hover:bg-[#0c442c]/80 transition-colors p-2 rounded-full"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="bg-[#0c442c] hover:bg-[#0c442c]/80 transition-colors p-2 rounded-full"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">
              Link Cepat
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#beranda"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#tentang"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#program"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Program
                </a>
              </li>
              <li>
                <a
                  href="#galeri"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Galeri
                </a>
              </li>
              <li>
                <a
                  href="#kontak"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Program</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Madrasah Tsanawiyah
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Madrasah Aliyah
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tahfidzul Qur'an
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ekstrakurikuler
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kursus Bahasa Arab
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#0c442c]/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">
                  Jl. Tirtosumirat, Kabangan, Bumi, Laweyan, Surakarta
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#0c442c]/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400">(021) 1234-5678</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#0c442c]/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">alfilaha@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#0c442c] mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Pondok Pesantren alfilaha. All
              rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
