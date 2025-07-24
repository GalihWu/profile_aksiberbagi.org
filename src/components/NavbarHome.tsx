import { useState, useEffect } from 'react';
import { IoClose, IoMenuSharp } from 'react-icons/io5';
import { GoHome } from 'react-icons/go';
import {
  MdOutlineInsertPhoto,
  MdOutlineExpandMore,
  MdOutlineExpandLess,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
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

  const toggleSubmenu = (menuName: string) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  const navLinks = [
    {
      name: 'Beranda',
      href: '#beranda',
      icon: GoHome,
    },
    {
      name: 'Tentang Kami',
      href: '#tentang',
      icon: MdOutlineInsertPhoto,
    },
    {
      name: 'Program',
      href: '#program',
      icon: MdOutlineInsertPhoto,
      submenu: [
        { name: 'Program Unggulan', href: '#program-unggulan' },
        { name: 'Program Rutin', href: '#program-rutin' },
      ],
    },
    {
      name: 'Artikel',
      href: '#artikel',
      icon: MdOutlineInsertPhoto,
      submenu: [
        { name: 'Berita', href: '#berita' },
        { name: 'Kegiatan', href: '#kegiatan' },
        { name: 'Pengumuman', href: '#pengumuman' },
      ],
    },
    {
      name: 'Kontak',
      href: '#kontak',
      icon: MdOutlineInsertPhoto,
    },
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

  const submenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const submenuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
      },
    }),
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 transition-all duration-300 ease-in w-full
        ${
          isScrolled
            ? 'bg-[#19B697]/70 backdrop-blur-md shadow-md '
            : 'bg-tosca-500'
        }
      `}
    >
      <div className="container mx-auto py-2 px-4 md:px-6 w-full">
        <div className="flex justify-between">
          <div
            className="h-[32px] md:h-[45px] w-auto cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img
              src="/assets/image/akber-new-putih.webp"
              alt="logo"
              className="h-full w-auto object-cover"
            />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-3 items-center relative">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                className="relative"
                variants={navItemVariants}
                custom={i}
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                onMouseLeave={() => link.submenu && setActiveSubmenu(null)}
              >
                <motion.a
                  href={link.href}
                  className={`hover:bg-white rounded-xl hover:text-[#19B697] text-white transition-all duration-200 font-medium px-3 py-2 flex items-center ${
                    link.submenu ? 'pr-1' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {link.submenu && (
                    <span className="ml-1">
                      {activeSubmenu === link.name ? (
                        <MdOutlineExpandLess className="inline" />
                      ) : (
                        <MdOutlineExpandMore className="inline" />
                      )}
                    </span>
                  )}
                </motion.a>

                {link.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === link.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg overflow-hidden"
                        variants={submenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <div className="py-1">
                          {link.submenu.map((subItem, j) => (
                            <motion.a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-800 hover:bg-[#19B697]/10 hover:text-[#19B697] transition-colors duration-200"
                              variants={submenuItemVariants}
                              custom={j}
                              whileHover={{ x: 5 }}
                            >
                              {subItem.name}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
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
              <IoClose className="h-6 w-6 cursor-pointer text-white" />
            ) : (
              <IoMenuSharp className="h-6 w-6 cursor-pointer text-white" />
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
                <div key={link.name}>
                  <motion.div
                    className="flex items-center justify-between py-2 px-4 rounded-md hover:bg-green-50 transition-colors duration-200"
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  >
                    <a
                      href={link.href}
                      className="flex items-center space-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <link.icon className="h-5 w-5 text-[#19B697]" />
                      <span>{link.name}</span>
                    </a>
                    {link.submenu && (
                      <button
                        onClick={() => toggleSubmenu(link.name)}
                        className="p-1"
                      >
                        {activeSubmenu === link.name ? (
                          <MdOutlineExpandLess className="h-5 w-5 text-[#19B697]" />
                        ) : (
                          <MdOutlineExpandMore className="h-5 w-5 text-[#19B697]" />
                        )}
                      </button>
                    )}
                  </motion.div>

                  {link.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === link.name && (
                        <motion.div
                          className="pl-8"
                          variants={submenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          {link.submenu.map((subItem, j) => (
                            <motion.a
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 px-4 text-gray-700 hover:bg-green-50 rounded-md transition-colors duration-200"
                              variants={submenuItemVariants}
                              custom={j}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActiveSubmenu(null);
                              }}
                              whileHover={{ x: 5 }}
                            >
                              {subItem.name}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavbarHome;
