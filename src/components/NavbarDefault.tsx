import { useState, useEffect } from 'react';
import { IoClose, IoMenuSharp } from 'react-icons/io5';
import { GoHome } from 'react-icons/go';
import { MdOutlineInsertPhoto } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const NavbarDefault = () => {
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
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-10 bg-white transition-all duration-300 ease-in w-full
      ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#61876b] transition-color duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#61876b] hover:bg-[#0c442c] px-3 py-2 rounded-md text-white font-semibold cursor-pointer">
              Daftar Sekarang
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none "
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <IoClose className="h-6 w-6 cursor-pointer" />
            ) : (
              <IoMenuSharp className="h-6 w-6 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-green-50 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <link.icon className="h-5 w-5 text-pesantren-600" />
                <span>{link.name}</span>
              </a>
            ))}
            <div className="pt-2">
              <button className="bg-[#61876b] w-full hover:bg-[#0c442c] px-3 py-2 rounded-md text-white font-semibold cursor-pointer">
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarDefault;
