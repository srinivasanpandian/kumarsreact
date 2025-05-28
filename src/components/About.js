import React from 'react';

const About = () => {
  return (
    <section id="thestory" className="py-16 bg-[#f4fafd]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-[320px]">
          <h2 className="font-simplifica text-[30px] text-[#66bfbf] border-l-4 font-semibold border-[#66bfbf] pl-4 mb-2 flex items-center">
            About Kumar's Plano
            <span className="w-12 border-t border-[#66bfbf] ml-4"></span>

          </h2>
          <h3 className="font-nunito text-[20px] font-bold text-black mb-4">
            Best Indian Restaurant for Authentic Indian Food
          </h3>
          <p className="mb-2 font-simplifica font-semibold text-[25px] text-[#666565]">
            A volley of sunshine through the protesting leaves of a thousand sleeping coconut trees, casting designs of a quiet rebellion on brick floored courtyards. In a clay pot on a wood fire, mustard seeds crackle to wake up the village. The onions always go next, creating a cosmic sizzle.
          </p>
          <p className="mb-4 font-simplifica font-semibold text-[25px] text-[#666565]">
            The sights and sounds of South Indian cooking are deserving of a riveting Epic. At Kumar's, you can pick up a hardbound copy. No embellishments, fiercely authentic.
          </p>

          {/* Pill Banner */}
          <div className="w-full my-6">
            <div className="bg-secondary text-white text-center text-xl font-simplifica font-semibold rounded-full py-3 px-6 shadow-md" style={{maxWidth:'700px'}}>
              no msg, no food color, no artificial ingredients
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mt-6">
            <div className="border-l-4 border-secondary pl-4 font-amatic font-semibold text-[30px] text-[#0F172B] tracking-wide">
              FARM RAISED CHICKEN
            </div>
            <div className="border-l-4 border-secondary pl-4 font-amatic font-semibold text-[30px] text-[#0F172B] tracking-wide">
              FRESH, NEVER FROZEN MEAT
            </div>
            <div className="border-l-4 border-secondary pl-4 font-amatic font-semibold text-[30px] text-[#0F172B] tracking-wide">
              LIVE SEAFOOD
            </div>
            <div className="border-l-4 border-secondary pl-4 font-amatic font-semibold text-[30px] text-[#0F172B] tracking-wide">
              MADE TO ORDER
            </div>
          </div>
        </div>

        {/* Right: Image Grid */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 min-w-[320px]">
          <img src="/img/about-1.jpg" alt="Thali" className="w-full h-68 object-cover rounded-lg shadow-md col-start-1 row-start-1" />
          <img src="/img/about-2.jpg" alt="Coffee" className="w-full h-68 object-cover rounded-lg shadow-md col-start-1 row-start-2" />
          <img src="/img/about-3.jpg" alt="Dosa" className="w-full h-68 object-cover rounded-lg shadow-md col-start-2 row-start-1" />
          <img src="/img/about-4.jpg" alt="Family" className="w-full h-68 object-cover rounded-lg shadow-md col-start-2 row-start-2" />
        </div>
      </div>
    </section>
  );
};

export default About; 