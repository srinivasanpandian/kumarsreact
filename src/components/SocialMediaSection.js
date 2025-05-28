import React from 'react';

const SocialMediaSection = () => {
  return (
    <section className="bg-[#f4fafd] py-16">
      <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-center mb-12">
  <span className="w-12 border-t border-secondary mr-4"></span>
  <h2 className="text-2xl md:text-3xl font-simplifica text-secondary text-center font-bold whitespace-nowrap">
    Social Media
  </h2>
  <span className="w-12 border-t border-secondary ml-4"></span>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Instagram */}
          <div className="bg-white rounded-2xl shadow-lg p-0 flex flex-col pt-12 relative">
            <div className="absolute top-0 left-0 right-0 flex justify-center z-10">
              <div className="bg-secondary text-white font-simplifica text-2xl px-12 py-2 rounded-b-2xl shadow">Instagram</div>
            </div>
            <div className="pb-4 px-2 flex-1 flex items-center justify-center">
              <iframe
                src="https://www.instagram.com/kumars.plano/embed"
                title="Instagram"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                className="w-full h-[500px] rounded-xl"
                style={{ minHeight: 400 }}
              ></iframe>
            </div>
          </div>
          {/* Facebook */}
          <div className="bg-white rounded-2xl shadow-lg p-0 flex flex-col pt-12 relative">
            <div className="absolute top-0 left-0 right-0 flex justify-center z-10">
              <div className="bg-secondary text-white font-simplifica text-2xl px-12 py-2 rounded-b-2xl shadow">Facebook</div>
            </div>
            <div className="pb-4 px-2 flex-1 flex items-center justify-center">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkumarmessplano%2F&tabs=timeline&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                title="Facebook"
                width="100%"
                height="500"
                style={{ border: 'none', overflow: 'hidden', borderRadius: '0.75rem' }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection; 