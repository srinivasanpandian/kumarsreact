import React from 'react';

const openingHours = [
  { day: 'Sunday', hours: '12:00 PM – 3:30 PM' },
  { day: 'Monday', hours: '11 AM – 2:30 PM / 5:30 PM – 10:00 PM' },
  { day: 'Tuesday', hours: 'Closed' },
  { day: 'Wednesday', hours: '11 AM – 2:30 PM / 5:30 PM – 10:00 PM' },
  { day: 'Thursday', hours: '11 AM – 2:30 PM / 5:30 PM – 10:00 PM' },
  { day: 'Friday', hours: '11AM – 2:30 PM / 5:30 PM – 11:00 PM' },
  { day: 'Saturday', hours: '11AM – 2:30 PM / 5:30 PM – 11:00 PM' },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-[#f1f8ff] pt-20 pb-8 font-simplifica text-[20px] font-semibold" id="contactus">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
        {/* Contact */}
        <div>
          <div className="flex items-center mb-6">
            <h3 className="text-3xl font-simplifica text-[#f1f8ff] font-semibold">Contact</h3>
            <span className="flex-1 border-t border-[#7fd1d1] ml-4"></span>
          </div>
          <div className="flex items-start mb-3">
            <i className="fas fa-map-marker-alt mr-3 mt-1"></i>
            <span>3948 Legacy Dr #112, Plano, TX 75023, United States.</span>
          </div>
          <div className="flex items-center mb-3">
            <i className="fas fa-phone-alt mr-3"></i>
            <span>(469) 666-0682</span>
          </div>
          <div className="flex items-center mb-3">
            <i className="fas fa-envelope mr-3"></i>
            <span>kumarsplanostore@gmail.com</span>
          </div>
          <div className="flex space-x-6 mt-6">
            <a href="https://facebook.com/kumarmessplano" target="_blank" rel="noopener noreferrer" className="border border-[#f1f8ff] rounded-full p-3 hover:bg-[#f1f8ff] hover:text-secondary transition text-xl"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com/kumars.plano" target="_blank" rel="noopener noreferrer" className="border border-[#f1f8ff] rounded-full p-3 hover:bg-[#f1f8ff] hover:text-secondary transition text-xl"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        {/* Opening */}
        <div>
          <div className="flex items-center mb-6">
            <h3 className="text-3xl font-simplifica text-[#f1f8ff] font-semibold">Opening</h3>
            <span className="flex-1 border-t border-[#7fd1d1] ml-4"></span>
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            {openingHours.map((item, idx) => (
              <React.Fragment key={idx}>
                <div>{item.day}</div>
                <div>{item.hours}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Map */}
        <div>
          <div className="flex items-center mb-6">
            <h3 className="text-3xl font-simplifica text-[#f1f8ff] font-semibold">Map</h3>
            <span className="flex-1 border-t border-[#7fd1d1] ml-4"></span>
          </div>
          <iframe
            title="Kumar's Plano Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.23496429581!2d-96.7692326848136!3d33.07096398088809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19e2e2e2e2e3%3A0x7e7e7e7e7e7e7e7e!2sKumar's%20Plano!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: '0.75rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-[#7fd1d1] text-center py-8 font-simplifica text-[20px] font-semibold">
        <div>2025 © Kumar's <span className="font-semibold">All Right Reserved.</span></div>
        <div className="mt-2 flex items-center justify-center gap-2">Powered by <a href="https://maghil.com" target="_blank" rel="noopener noreferrer"><img src="/img/maghil-logo.png" alt="maghil" className="h-6 inline-block align-middle" /></a></div>
      </div>
    </footer>
  );
};

export default Footer; 