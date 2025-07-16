import { FaAnglesRight, FaChevronRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Articles = () => {
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: 'Peluncuran Program Baru untuk Petani',
      theme: 'Pertanian',
      image: '/assets/image/news-1.jpg',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, facere totam debitis voluptate, facere totam debitis dignissimos in ab voluptate, facere totam debitis molestiae possimus enim.',
    },
    {
      id: 2,
      title: 'Workshop Teknologi Pertanian Modern',
      theme: 'Teknologi',
      image: '/assets/image/news-2.jpg',
      excerpt:
        'Dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, adipisicing elit. Quisquam voluptates voluptatum doloremque, quibusdam quia voluptas.',
    },
    {
      id: 3,
      title: 'Hasil Panen Meningkat 30% Tahun Ini',
      theme: 'Ekonomi',
      image: '/assets/image/news-3.jpg',
      excerpt:
        'Sit amet consectetur adipisicing elit. Voluptatibus dignissimos in ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, ab voluptate, facere totam debitis molestiae possimus enim.',
    },
    {
      id: 4,
      title: 'Seminar Nasional tentang Pertanian Berkelanjutan',
      theme: 'Lingkungan',
      image: '/assets/image/news-4.jpg',
      excerpt:
        'Amet consectetur adipisicing elit. Quisquam voluptates voluptatum doloremque, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, quibusdam quia voluptas...',
    },
  ];

  return (
    <section id="artikel" className="py-20 bg-[#7aad42]/4 relative">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Top */}

        <div className="mx-auto text-center max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Berita <span className="text-[#61876b]">Terkini </span>
          </h2>
          <p className="text-[#84a094]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>

        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 relative">
          <p
            className="absolute right-2 -top-10 text-base cursor-pointer text-gray-500 flex items-center gap-3"
            onClick={() => navigate('/articles')}
          >
            Lihat lebih banyak <FaChevronRight size={14} />
          </p>
          <div className="rounded-xl overflow-hidden row-span-3 shadow md:shadow-none hover:shadow-md cursor-pointer relative group p-2 h-full transition-colors hover:bg-white">
            <div className="overflow-hidden h-[200px] md:h-[300px] rounded w-full">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className=" object-contain hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-center my-3 ">
              <p className="text-sm md:text-base bg-[#7aad42]/20 rounded-full px-6 py-1 text-[#0c442c] w-fit">
                {articles[0].theme}
              </p>

              <p className=" text-sm md:text-base text-[#0c442c]">
                27 Agustus 2024
              </p>
            </div>
            <div className="text-[#0c442c] font-semibold text-lg md:text-xl h-auto">
              {articles[0].title}
            </div>
            <p className="text-sm md:text-base mt-2 mb-8">
              {articles[0].excerpt}
            </p>
            <div className="px-4 py-2 rounded w-fit absolute bottom-2 right-2">
              <FaAnglesRight size={14} className="text-gray-400" />
            </div>
          </div>

          <div>
            {articles.slice(1).map((article) => (
              <div
                key={article.id}
                onClick={() => navigate('/article')}
                className="rounded overflow-hidden mb-4 shadow md:shadow-none hover:shadow-md md:hover:shadow p-2 cursor-pointer h-fit relative transition-all duration-200 hover:bg-white flex flex-col lg:flex-row w-full"
              >
                {/* Bagian Gambar */}
                <div className="w-full lg:w-[160px] h-[200px] lg:h-[100px] shrink-0 overflow-hidden rounded">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover h-full w-full hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Bagian Konten */}
                <div className="flex-1 px-2 py-2 md:py-[2px] relative">
                  <div className="flex justify-start gap-4 items-center mb-3 mt-3 md:mt-0  ">
                    <p className="text-xs md:text-sm bg-[#7aad42]/20 rounded-full px-6 py-1 text-[#0c442c]  w-fit">
                      {articles[0].theme}
                    </p>

                    <p className="  text-xs md:text-sm text-[#0c442c]">
                      27 Agustus 2024
                    </p>
                  </div>
                  <div className="text-[#0c442c] font-semibold text-base h-auto">
                    {article.title}
                  </div>

                  <p className="text-sm md:text-base mt-2 block lg:hidden mb-8">
                    {article.excerpt}
                  </p>

                  <div className="px-4 py-2 rounded w-fit absolute bottom-2 right-2">
                    <FaAnglesRight size={14} className="text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
