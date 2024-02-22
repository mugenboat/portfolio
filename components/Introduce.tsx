import React from "react";
import Image from "next/image";
import Taglist from "@/components/Taglist";
import Contact from "./Contact";

const Introduce = () => {
  const skills = [
    { name: "React.js", time: "1 yr" },
    { name: "Next.js" },
    { name: "Tailwind" },
    { name: "Vue.js", time: "3 yrs" },
    { name: "Nuxt.js" },
    { name: "Vuetify" },
    { name: "Ant Design" },
    { name: "RESTful API" },
    { name: "Redux" },
    { name: "Javascript" },
    { name: "Typescript" },
  ];

  return (
    <div className="w-[80%] grid-cols-1 mx-auto mt-6 grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center justify-items-center">
      <div className="text-green-300">
        <h1 className="text-[35px] md:text-[35px]">Thanate(Boat)</h1>
        <h1 className="text-[25px] md:text-[25px]">Leaner & Brewer</h1>
        <p className="mb-5">
          this website created to regain some skills from the past and try to
          learn tailwind css,
        </p>
        <h1 className="text-[25px] md:text-[25px]">Experience</h1>
        <p>Geekstart Co.,Ltd.</p>
        <p className="mb-5">Jun 2019 - Jan 2023 · 3 yrs 8 m</p>
        <div>
          {skills.map(skill => (
            <Taglist skill={skill.name} key={skill.name} />
          ))}
        </div>

        <Contact />
      </div>
      <div className="w-[400px] h-[400px] hidden relative lg:flex items-center rounded-full shadow-md shadow-green-300/50">
        <Image
          src="./me.jpg"
          layout="fill"
          className="object-cover rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Introduce;
