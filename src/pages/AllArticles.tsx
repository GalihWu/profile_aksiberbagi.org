import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

const AllArticles = () => {
  const [isLoading, setIsloading] = useState(false);

  const handleLoad = () => {
    setIsloading(true);

    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  };

  // Data dummy untuk artikel
  const articles = [
    {
      id: 1,
      title: 'Peluncuran Program Baru untuk Petani',
      theme: 'Pertanian',
      image: '/assets/image/news-1.jpg',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, facere totam debitis voluptate, facere totam debitis dignissimos in ab voluptate, facere totam debitis molestiae possimus enim...',
    },
    {
      id: 2,
      title: 'Workshop Teknologi Pertanian Modern',
      theme: 'Teknologi',
      image: '/assets/image/news-2.jpg',
      excerpt:
        'Dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, adipisicing elit. Quisquam voluptates voluptatum doloremque, quibusdam quia voluptas...',
    },
    {
      id: 3,
      title: 'Hasil Panen Meningkat 30% Tahun Ini',
      theme: 'Ekonomi',
      image: '/assets/image/news-3.jpg',
      excerpt:
        'Sit amet consectetur adipisicing elit. Voluptatibus dignissimos in ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, ab voluptate, facere totam debitis molestiae possimus enim...',
    },
    {
      id: 4,
      title: 'Seminar Nasional tentang Pertanian Berkelanjutan',
      theme: 'Lingkungan',
      image: '/assets/image/news-4.jpg',
      excerpt:
        'Amet consectetur adipisicing elit. Quisquam voluptates voluptatum doloremque, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, quibusdam quia voluptas...',
    },
    {
      id: 5,
      title: 'Peluncuran Program Baru untuk Petani',
      theme: 'Pertanian',
      image: '/assets/image/news-1.jpg',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, facere totam debitis voluptate, facere totam debitis dignissimos in ab voluptate, facere totam debitis molestiae possimus enim...',
    },
    {
      id: 6,
      title: 'Workshop Teknologi Pertanian Modern',
      theme: 'Teknologi',
      image: '/assets/image/news-2.jpg',
      excerpt:
        'Dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, adipisicing elit. Quisquam voluptates voluptatum doloremque, quibusdam quia voluptas...',
    },
    {
      id: 7,
      title: 'Hasil Panen Meningkat 30% Tahun Ini',
      theme: 'Ekonomi',
      image: '/assets/image/news-3.jpg',
      excerpt:
        'Sit amet consectetur adipisicing elit. Voluptatibus dignissimos in ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, ab voluptate, facere totam debitis molestiae possimus enim...',
    },
    {
      id: 8,
      title: 'Seminar Nasional tentang Pertanian Berkelanjutan',
      theme: 'Lingkungan',
      image: '/assets/image/news-4.jpg',
      excerpt:
        'Amet consectetur adipisicing elit. Quisquam voluptates voluptatum doloremque, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, quibusdam quia voluptas...',
    },
  ];

  return (
    <section id="galeri" className="py-20 bg-[#7aad42]/4 relative">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="mx-auto text-center max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Berita <span className="text-[#61876b]">Terkini </span>
          </h2>
          <p className="text-[#84a094]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <a
              href="/article"
              key={article.id}
              className="rounded-xl overflow-hidden shadow hover:shadow-md cursor-pointer relative group p-3 h-[460px] transition-colors hover:bg-white"
            >
              <div className="h-48 overflow-hidden rounded w-full">
                <img
                  src={article.image}
                  alt={article.title}
                  className=" object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-[#0c442c] mt-2 not-last-of-type:font-bold text-lg md:text-xl truncate">
                {article.title}
              </div>
              <p className="text-sm md:text-base text-[#84a094]">
                - {article.theme}
              </p>
              <p className="text-sm md:text-base mt-2">{article.excerpt}</p>
              <div className="px-4 py-2 rounded hover:bg-[#a2cd5f]/30 w-fit absolute bottom-2 right-2">
                <BsArrowRight className="rotate-45" />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={handleLoad}
            className="bg-[#61876b] hover:bg-[#0c442c] text-white px-4 py-2 rounded-md cursor-pointer"
          >
            {isLoading ? '... ' : 'lihat lebih banyak'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllArticles;
