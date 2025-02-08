import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
// import project5 from "../assets/images/project-5.png";
// import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Alicaj Website",
      github_link: "https://github.com/LouisOdhiambo/Alicaj-Website",
      live_link: "https://alicaj.co.ke/",
    },
    {
      img: project2,
      name: "Lizola Fashion",
      github_link: "https://github.com/LouisOdhiambo/Alicaj-Website",
      live_link: "https://lizolafashion.com/",
    },
    {
      img: project3,
      name: "Triple OK Law",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://www.tripleoklaw.com/",
    },
    {
      img: project4,
      name: "GA Insurance Kenya",
      github_link:
        "#",
      live_link: "https://www.gainsuranceltd.com/ke/",
    },
    // {
    //   img: project5,
    //   name: "Vue Country",
    //   github_link: "https://github.com/Sridhar-C-25",
    //   live_link: "https://vuecountry05.netlify.app",
    // },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-teal-900">Projects</span>
        </h3>
        <p className="text-teal-700 mt-3 text-lg">Portfolio</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-3/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    {/* <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a> */}
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
