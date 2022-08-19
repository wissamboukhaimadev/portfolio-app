import React from 'react';
// import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
// import reactParallax from '../assets/portfolio/reactParallax.jpg';

import invoicesapp from '../assets/workassets/whatsapp.jpg'
import investmentsapp from '../assets/workassets/investements.jpg'


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: invoicesapp,
      website:'https://whatsappappclone.netlify.app/',
      github:'https://github.com/wissamboukhaimadev/whatsapp-clone'
    },
    {
      id: 2,
      src: investmentsapp,
      website:'https://investments-app-eta.vercel.app/',
      github:'https://github.com/wissamboukhaimadev/investments-app'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full item-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,website,github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={website} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer">
                  Demo
                </a>
                <a href={github} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
