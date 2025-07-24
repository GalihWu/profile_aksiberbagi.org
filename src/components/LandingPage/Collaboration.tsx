import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Collaboration = () => {
  return (
    <section id="collab" className="section-home">
      <div className="container-home ">
        <div className="text-center max-w-3xl mb-12 md:mb-16 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Mitra <span className="text-tosca-500">Aksiberbagi</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Bekerja sama dengan beberapa lembaga, yayasan, dan komunitas sosial
            masyarakat dalam menyalurkan program kebaikan ke seluruh Nusantara
            dan belahan dunia lainnya.
          </p>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          className=" pb-12"
        >
          {[1, 2, 3, 4, 5].map(
            (
              item // tambahkan lebih banyak slide untuk testing
            ) => (
              <SwiperSlide key={item}>
                <div className="px-2 w-full">
                  <img
                    src="/assets/image/kolaborasi.png"
                    alt={`Kolaborasi ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Collaboration;
