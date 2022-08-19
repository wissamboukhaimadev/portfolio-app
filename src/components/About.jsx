import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm 18 years old I've been working on web development for over 2
          years. I work on some medium projects.{' '}
          {/* <span>
            The reason I Don't Work on some big project is I don't even work for
            a company and also I think my age is an obstacle
          </span> */}
        </p>

        <br />

        <p className="text-xl pt-5">
          I do work as a freelancer. I get some clients. I build, for example, a
          Website That manages Invoices with all CRUD operations. I build That
          With
          <span className="font-bold text-red-300"> React </span>,
          <span className="font-bold text-red-300"> TailWind </span>,
          <span className="font-bold text-red-300"> Material UI </span>and
          <span className="font-bold text-red-300"> Redux </span>.

        </p>
        <p className="text-xl pt-5">This Project helps the company to build invoices faster ( 20 minute to 1 minute )</p>
      </div>
    </div>
  );
};

export default About;
