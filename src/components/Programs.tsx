import { BsArrowRight } from 'react-icons/bs';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'Madrasah Tsanawiyah (MTs)',
      level: 'Setara SMP',
      age: '12-15 tahun',
      description:
        "Program pembelajaran setingkat SMP dengan penekanan pada pendidikan agama Islam dan tahfidzul Qur'an",
      image: '/assets/image/program-1.webp',
    },
    {
      id: 2,
      title: 'Madrasah Aliyah (MA)',
      level: 'Setara SMA',
      age: '15-18 tahun',
      description:
        'Program lanjutan setingkat SMA dengan jurusan IPA, IPS, dan Keagamaan untuk mempersiapkan santri ke perguruan tinggi',
      image: '/assets/image/program-2.webp',
    },
    {
      id: 3,
      title: "Tahfidzul Qur'an",
      level: 'Program Khusus',
      age: 'Semua usia',
      description:
        "Program khusus untuk santri yang ingin menghafal Al-Qur'an dengan bimbingan intensif dari para hafidz",
      image: '/assets/image/program-3.webp',
    },
  ];

  return (
    <section id="program" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto text-center max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl  font-bold mb-6">
            Program <span className="text-[#61876b]">Pendidikan</span>
          </h2>
          <p className="text-[#84a094]">
            Kami menawarkan berbagai program pendidikan untuk mengembangkan
            potensi santri di bidang agama dan akademik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-[#84a094] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium bg-[#a2cd5f]/20 text-[#0c442c] px-3 py-1 rounded-full">
                    {program.level}
                  </span>
                  <span className="text-xs text-[#0c442c]">{program.age}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-[#0c442c] text-sm mb-4">
                  {program.description}
                </p>
                <button className="flex space-x-3 justify-center items-center w-full border-[#61876b] text-[#61876b] hover:bg-[#a2cd5f]/20 px-4 py-2 rounded-md cursor-pointer">
                  Detail Program
                  <BsArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#61876b] hover:bg-[#0c442c] text-white px-4 py-2 rounded-md cursor-pointer">
            Lihat Semua Program
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
