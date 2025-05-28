import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[60vh] md:h-screen overflow-hidden">
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://video.wixstatic.com/video/2b3401_ef568fbae534468fbc6eae6e0d0c23ed/720p/mp4/file.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center px-4">
          {/* Buttons: always horizontal, but small and centered on desktop */}
          <div className="w-full max-w-lg mx-auto flex flex-row justify-center items-center space-x-2 z-10">
  <a
    href="https://app.magilhub.com/restaurant/kumars-plano/menu/Pickup"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary text-white font-bold rounded px-8 py-3 shadow hover:bg-opacity-80 transition-all duration-200 font-nunito text-[14px] md:text-[16px] w-full md:w-auto md:min-w-[120px] text-center"
  >
    PICKUP
  </a>
  <a
    href="https://app.magilhub.com/restaurant/kumars-plano/menu/Delivery"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary text-white font-bold rounded px-8 py-3 shadow hover:bg-opacity-80 transition-all duration-200 font-nunito text-[14px] md:text-[16px] w-full md:w-auto md:min-w-[120px] text-center"
  >
    DELIVERY
  </a>
  <a
    href="/ourmenu"
    className="bg-primary text-white font-bold rounded px-8 py-3 shadow hover:bg-opacity-80 transition-all duration-200 font-nunito text-[14px] md:text-[16px] w-full md:w-auto md:min-w-[120px] text-center"
  >
    MENU
  </a>
</div>

        </div>
      </div>
    </div>
  );
};

export default Hero; 