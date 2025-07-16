import { BiMailSend, BiMapPin, BiPhone, BiSolidSend } from 'react-icons/bi';
import { CgLock } from 'react-icons/cg';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="kontak" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto text-center max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hubungi <span className="text-[#61876b]/80">Kami</span>
          </h2>
          <p>
            Untuk informasi lebih lanjut tentang pendaftaran dan program kami,
            silakan hubungi kami
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-[#84a094]/20 h-fit">
            <h3 className="text-2xl font-bold mb-6">Formulir Kontak</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nama Lengkap
                    </label>
                    <input
                      className="h-10 px-3 focus:outline-none focus:ring-2 focus:ring-[#a2cd5f] bg-[#84a094]/10 rounded"
                      id="name"
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      No. Telepon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="h-10 px-3 focus:outline-none focus:ring-2 focus:ring-[#a2cd5f] bg-[#84a094]/10 rounded"
                      placeholder="Masukkan nomor telepon"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    className="h-10 px-3 focus:outline-none focus:ring-2 focus:ring-[#a2cd5f] bg-[#84a094]/10 rounded"
                    type="email"
                    placeholder="Masukkan alamat email"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subjek
                  </label>
                  <input
                    id="subject"
                    className="h-10 px-3 focus:outline-none focus:ring-2 focus:ring-[#a2cd5f] bg-[#84a094]/10 rounded"
                    placeholder="Masukkan subjek pesan"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    className="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a2cd5f] bg-[#84a094]/10 rounded"
                    placeholder="Tulis pesan Anda di sini..."
                    rows={5}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex space-x-4 justify-center items-center py-2 rounded-md w-full bg-[#61876b] hover:bg-[#0c442c] text-white font-semibold"
                >
                  Kirim Pesan
                  <BiSolidSend className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6 ">
            <div className="p-6 border border-[#84a094]/20 rounded-md shadow-md">
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#a2cd5f]/20 p-2 rounded-full">
                    <BiMapPin className="h-5 w-5 text-[#0c442c]/80" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Alamat</h4>
                    <p>Jl. Tirtosumirat, Kabangan, Bumi, Laweyan, Surakarta</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#a2cd5f]/20 p-2 rounded-full">
                    <BiPhone className="h-5 w-5 text-[#0c442c]/80" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telepon</h4>
                    <p>(021) 1234-5678</p>
                    <p>0812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#a2cd5f]/20 p-2 rounded-full">
                    <BiMailSend className="h-5 w-5 text-[#0c442c]/80" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>alfilaha@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#a2cd5f]/20 p-2 rounded-full">
                    <CgLock className="h-5 w-5 text-[#0c442c]/80" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Jam Operasional</h4>
                    <p>Senin - Jumat: 08.00 - 16.00 WIB</p>
                    <p>Sabtu: 08.00 - 12.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d306.0915105063178!2d110.79957939922656!3d-7.569536077233865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a15001cb103ef%3A0xae4879c7acc90b6f!2sSiber%20Optima!5e1!3m2!1sid!2sid!4v1749435480518!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Pondok Pesantren alfilaha"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
