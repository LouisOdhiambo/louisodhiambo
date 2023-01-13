import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-teal-900">Me</span>
        </h3>
        <p className="text-teal-800 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
          Designing a program that is truly helpful to the user is my ultimate goal on every project, 
          and I am delighted by every opportunity to be part of a software development team. 
          In my previous roles, I have worked on multiple production-ready projects. 
          As a Software Developer, my goal is to continually increase my programming skills 
          in order to present better solutions to my clients. I enjoy uncovering new ideas and 
          would use them to advance your project to the next level. Thank you for your time and consideration.
          </p>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
