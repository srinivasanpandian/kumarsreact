import React from 'react';

const EventCateringSection = () => {
  return (
    <section className="bg-[#2e8687] py-12 w-full">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-white text-[30px] font-simplifica tracking-wide mb-4 uppercase">
          YOUR EVENTS. OUR FOOD.{' '}
          <a href="#contactus" className="underline hover:text-white font-simplifica">CALL US</a>{' '}
          FOR CATERING AND CORPORATE LUNCHES.
        </h2>
        <div className="text-white text-2xl font-simplifica mb-6">Order Online at Store Price</div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://app.magilhub.com/restaurant/kumars-plano/menu/Pickup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#66bfbf] text-white font-nunito text-[16px] px-8 py-3 rounded shadow hover:bg-opacity-80 transition-all duration-200"
          >
            PICK UP
          </a>
          <a
            href="https://app.magilhub.com/restaurant/kumars-plano/menu/Delivery"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#66bfbf] text-white font-nunito text-[16px] px-8 py-3 rounded shadow hover:bg-opacity-80 transition-all duration-200"
          >
            DELIVERY
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventCateringSection; 