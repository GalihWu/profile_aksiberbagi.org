import { FaAnglesRight, FaChevronRight, FaRegClock } from 'react-icons/fa6';
import { FiFeather } from 'react-icons/fi';
import { MdOutlinePerson } from 'react-icons/md';

const Article = () => {
  const articles = [
    {
      id: 1,
      title: 'Hasil Panen Meningkat 30% Tahun Ini',
      theme: 'Ekonomi',
      image: '/assets/image/news-3.jpg',
      excerpt:
        'Sit amet consectetur adipisicing elit. Voluptatibus dignissimos in ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, ab voluptate, facere totam debitis molestiae possimus enim...',
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
  ];
  return (
    <section id="artikel" className="py-20 bg-[#7aad42]/4 relative">
      <div className="container mx-auto px-4 md:px-6 relative flex">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          <div className="col-span-full lg:col-span-2 row-span-full mb-24 lg:mb-0">
            {/* top */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Peluncuran Program Baru untuk Petani
              </h2>
              <div className="mb-4 grid grid-cols-2 gap-3 text-sm md:text-lg">
                <div className="flex items-center space-x-2 ">
                  <MdOutlinePerson size={20} />
                  <p>Thomas</p>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <FiFeather />
                  <p>Pertanian</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaRegClock /> <p>Kamis, 27 Maret 2025</p>
                </div>
              </div>
            </div>

            {/* content */}
            <div>
              <div className="">
                <img src="/assets/image/news-1.jpg" alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, quidem! Delectus eveniet temporibus suscipit
                itaque voluptatem quidem, ratione error sequi mollitia, soluta
                repellendus molestias deserunt dolorum consequuntur? Ipsum,
                ratione laborum.
              </p>
              <br />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint?
                <br />
                sit amet consectetur adipisicing elit. Qui voluptatibus
                provident necessitatibus rem quae veritatis sit ex mollitia
                numquam est sunt suscipit at dolorum eum vero, nihil id,
                repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint?
                <br />
                sit amet consectetur adipisicing elit. Qui voluptatibus
                provident necessitatibus rem quae veritatis sit ex mollitia
                numquam est sunt suscipit at dolorum eum vero, nihil id,
                repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint? sit amet consectetur adipisicing elit. Qui
                voluptatibus provident necessitatibus rem quae veritatis sit ex
                mollitia numquam est sunt suscipit at dolorum eum vero, nihil
                id, repellat sint?
              </p>
            </div>
          </div>
          {/* side */}
          <div className="flex flex-col gap-3">
            {articles.slice(0, 4).map((article) => (
              <div
                key={article.id}
                className="rounded overflow-hidden shadow md:shadow-none hover:shadow-md md:hover:shadow p-2 cursor-pointer h-fit relative transition-all duration-200 hover:bg-white flex  w-full"
              >
                {/* Bagian Gambar */}
                <div className="w-[120px] h-[80px] shrink-0 overflow-hidden rounded">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover h-full w-full hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Bagian Konten */}
                <div className="flex-1 px-2 py-2 md:py-[2px] relative">
                  <div className="text-[#0c442c] font-semibold text-base md:text-lg h-auto">
                    {article.title}
                  </div>
                  <p className="text-sm md:text-base text-[#84a094]">
                    - {article.theme}
                  </p>
                  <p className="text-sm md:text-base mt-2 hidden mb-8">
                    {article.excerpt}
                  </p>

                  <div className="px-4 py-2 rounded w-fit absolute bottom-2 right-2">
                    <FaAnglesRight size={14} className="text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
            <a
              className="text-base cursor-pointer text-gray-500 flex items-center gap-3 justify-end hover:underline-offset-1"
              href="/articles"
            >
              Lihat lebih banyak <FaChevronRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
