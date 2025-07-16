import { useState, useEffect } from 'react';
import { IoClose, IoMenuSharp } from 'react-icons/io5';
import { GoHome } from 'react-icons/go';
import { MdOutlineInsertPhoto } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Beranda', href: '#beranda', icon: GoHome },
    { name: 'Tentang Kami', href: '#tentang', icon: MdOutlineInsertPhoto },
    { name: 'Program', href: '#program', icon: MdOutlineInsertPhoto },
    { name: 'Artikel', href: '#artikel', icon: MdOutlineInsertPhoto },
    { name: 'Kontak', href: '#kontak', icon: MdOutlineInsertPhoto },
  ];

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <header
      className={`fixed top-0 left-0 z-10 bg-white transition-all duration-300 ease-in w-full
        ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }
      `}
    >
      <div className="container mx-auto py-2 px-4 md:px-6 w-full">
        <div className="flex justify-between">
          <div
            className="h-[45px] w-auto cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img
              src="/assets/image/alfilaha.webp"
              alt="logo"
              className="h-full w-auto object-cover"
            />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="hover:text-[#61876b] transition-color duration-200 font-medium"
                variants={navItemVariants}
                custom={i}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              className="bg-[#61876b] hover:bg-[#0c442c] px-3 py-2 rounded-md text-white font-semibold cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Daftar Sekarang
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <IoClose className="h-6 w-6 cursor-pointer" />
            ) : (
              <IoMenuSharp className="h-6 w-6 cursor-pointer" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-green-50 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  whileHover={{ x: 5 }}
                >
                  <link.icon className="h-5 w-5 text-pesantren-600" />
                  <span>{link.name}</span>
                </motion.a>
              ))}
              <motion.div
                className="pt-2"
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
                custom={navLinks.length}
              >
                <motion.button
                  className="bg-[#61876b] w-full hover:bg-[#0c442c] px-3 py-2 rounded-md text-white font-semibold cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Daftar Sekarang
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavbarHome;
