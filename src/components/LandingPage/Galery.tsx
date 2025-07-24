import React from 'react';
import { BiChevronLeft, BiChevronRight, BiX } from 'react-icons/bi';

const Gallery = () => {
  const [activeImg, setActiveImg] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const images = [
    'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    'https://docs.material-tailwind.com/img/team-3.jpg',
  ];

  const openModal = (imgSrc: string) => {
    setActiveImg(imgSrc);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (isAnimating) return;

    setIsAnimating(true);
    const currentIndex = images.indexOf(activeImg);
    let newIndex;

    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
      newIndex = (currentIndex + 1) % images.length;
    }

    // Fade out current image
    setTimeout(() => {
      setActiveImg(images[newIndex]);
      // Fade in new image
      setTimeout(() => setIsAnimating(false), 300);
    }, 300);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 relative">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-5">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className="cursor-pointer group relative overflow-hidden rounded-lg aspect-square"
            onClick={() => openModal(imgSrc)}
          >
            <img
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
              src={imgSrc}
              alt={`gallery-photo-${index}`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-medium">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-6xl">
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <BiX size={36} />
            </button>

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10 bg-black/50 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              disabled={isAnimating}
            >
              <BiChevronLeft size={32} />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10 bg-black/50 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              disabled={isAnimating}
            >
              <BiChevronRight size={32} />
            </button>

            {/* Image Container */}
            <div className="relative h-[80vh] flex items-center justify-center">
              <img
                className={`max-h-full max-w-full object-contain rounded-lg transition-opacity duration-300 ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
                src={activeImg}
                alt="modal-view"
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {images.indexOf(activeImg) + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
