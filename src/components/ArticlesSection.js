import React from 'react';

const articles = [
  {
    image: '/img/dallasobserver.jpg',
    title: 'Dallas Observer',
    desc: 'Indian cuisine varies greatly across regions, with many American restaurants featuring either northern Indian dishes or colonial interpretations...',
    link: 'https://www.dallasobserver.com/best-of/2016/food-and-drink/best-indian-8724601',
  },
  {
    image: '/img/planomagazine.jpg',
    title: 'Plano Magazine',
    desc: "Prem Damodaran and Sheik Dawood are admittedly not seasoned restaurateurs. 'We're just two homeboys trying to open a joint,' as Prem put it...",
    link: 'https://planomagazine.com/kumars-indian-food-restaurant/',
  },
  {
    image: '/img/dmagazine.jpg',
    title: 'D Magazine',
    desc: 'The place is packed by 1 p.m., servers threading through with pails of curry, three to a cluster like a trio of paint buckets, some dribbling...',
    link: 'https://www.dmagazine.com/food-drink/2017/02/lunch-at-kumars-in-plano-in-a-must/',
  },
];

const ArticlesSection = () => {
  return (
    <section className="bg-[#f4fafd] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <span className="flex-1 border-t border-secondary mr-4"></span>
          <h2 className="text-2xl md:text-3xl font-simplifica text-secondary font-semibold text-center whitespace-nowrap">Articles About Kumar's</h2>
          <span className="flex-1 border-t border-secondary ml-4"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <div key={i} className="bg-secondary rounded shadow-lg flex flex-col overflow-hidden">
              <img src={a.image} alt={a.title} className="w-full h-56 object-cover" />
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-white text-2xl font-bold font-nunito mb-2  text-center">{a.title}</h3>
                <p className="text-white font-simplifica text-lg text-[26px] mb-6 text-center">{a.desc}</p>
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="mx-auto mt-auto bg-[#7fd1d1] text-white px-6 py-2 rounded font-simplifica  text-[25px] hover:bg-opacity-80 transition">READ MORE</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection; 