import React from 'react';
import { BiDonateHeart } from 'react-icons/bi';
import { FaDonate } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 relative">
      {/* Background with subtle curve effect */}
      <div className="absolute inset-0 bg-tosca-200 top-1/2 -skew-y-1 origin-top-left z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title (optional) */}
        <div className="text-center mb-12">
          <h2 className="title-section">Pencapaian Kami</h2>
          <p className="text-tosca-600 mt-2 max-w-2xl mx-auto">
            Kontribusi dan dampak yang telah kami berikan bersama
          </p>
        </div>

        {/* Stats Cards - now properly centered with better spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Item 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:shadow-xl border border-gray-100">
            <BiDonateHeart className="text-tosca-500 text-5xl md:text-6xl mb-4" />
            <h4 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              900
            </h4>
            <p className="text-lg text-gray-600 text-center">
              Program terdanai
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:shadow-xl border border-gray-100">
            <FaDonate className="text-tosca-500 text-5xl md:text-6xl mb-4" />
            <h4 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              137.337
            </h4>
            <p className="text-lg text-gray-600 text-center">
              Orang baik Bergabung
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:shadow-xl border border-gray-100">
            <BiDonateHeart className="text-tosca-500 text-5xl md:text-6xl mb-4" />
            <h4 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              900
            </h4>
            <p className="text-lg text-gray-600 text-center">
              Program terdanai
            </p>
          </div>

          {/* Item 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:shadow-xl border border-gray-100">
            <FaDonate className="text-tosca-500 text-5xl md:text-6xl mb-4" />
            <h4 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              137.337
            </h4>
            <p className="text-lg text-gray-600 text-center">
              Orang baik Bergabung
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
