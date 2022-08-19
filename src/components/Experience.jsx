import React from 'react';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import nextjs from '../assets/nextjs.png';
import graphql from '../assets/graphql.png';
// import github from "../assets/github.png";
import tailwind from '../assets/tailwind.png';

import angularIcon from '../assets/svgIcons/angular.svg';
// import expressIcon from '../assets/svgIcons/expressjs.png';
import reduxIcon from '../assets/svgIcons/redux.svg';
import nodeIcon from '../assets/svgIcons/nodejs.svg';
import nestIcon from '../assets/svgIcons/nestjs.svg';
import mongodbIcon from '../assets/svgIcons/mongodb.svg';
import postgresqlIcon from '../assets/svgIcons/postgresql.svg';
import dockerIcon from '../assets/svgIcons/docker.svg';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: nextjs,
      title: 'Next JS',
      style: 'shadow-white',
    },
    {
      id: 7,
      src: graphql,
      title: 'GraphQL',
      style: 'shadow-pink-400',
    },

    {
      id: 8,
      src: angularIcon,
      title: 'Angular',
      style: 'shadow-red-400',
    },
    {
      id: 9,
      src: '',
      title: 'Express',
      style: 'shadow-yellow-400',
    },
    {
      id: 10,
      src: reduxIcon,
      title: 'Redux',
      style: 'shadow-purple-400',
    },
    {
      id: 11,
      src: nodeIcon,
      title: 'Node js',
      style: 'shadow-green-400',
    },
    {
      id: 12,
      src: nestIcon,
      title: 'Nest js',
      style: 'shadow-rose-400',
    },
    {
      id: 13,
      src: mongodbIcon,
      title: 'MongoDB',
      style: 'shadow-green-400',
    },
    {
      id: 14,
      src: postgresqlIcon,
      title: 'Postgresql',
      style: 'shadow-blue-400',
    },
    {
      id: 15,
      src: dockerIcon,
      title: 'Docker',
      style: 'shadow-blue-400',
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-40"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-center font-bold text-3xl">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`cursor-pointer shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        <p className='text-center font-bold text-3xl'> And I'm experienced with these stacks </p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div
            className={`cursor-pointer shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-green-400`}
          >
            <p className="mt-4 text-red-700 text-4xl">MERN</p>
            <p className="mt-4 text-blue-700 font-bold text-xl">MongoDB - Express - React - NodeJS</p>
          </div>
          <div
            className={`cursor-pointer shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-red-400`}
          >
            <p className="mt-4 text-4xl">MEAN</p>
            <p className="mt-4 text-blue-600 font-bold text-xl">MongoDB - Express - Angular - NodeJS</p>
          </div>
          <div
            className={`cursor-pointer shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-blue-400`}
          >
            <p className="mt-4 text-4xl text-green-300">PERN</p>
            <p className="mt-4 text-red-600 font-bold text-xl">Postgresql - Express - React - NodeJS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
