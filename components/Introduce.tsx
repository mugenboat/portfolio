import React from "react";
import Image from "next/image";
import Taglist from "@/components/Taglist";
import Contact from "./Contact";
import me from "/public/me.jpg";

const Introduce = () => {
  const skills = [
    { name: "Vue.js", time: "3 yrs" },
    { name: "React.js", time: "1 yr" },
    { name: "Next.js" },
    { name: "Tailwind" },
    { name: "Nuxt.js" },
    { name: "Vuetify" },
    { name: "Ant Design" },
    { name: "RESTful API" },
    { name: "Redux" },
    { name: "Javascript" },
    { name: "Typescript" },
    { name: "Power BI" },
    { name: "Python" },
  ];

  return (
    <div className="w-[80%] grid-cols-1 mx-auto mt-6 grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center justify-items-center">
      <div className="text-green-300">
        <h1 className="text-[35px] md:text-[35px]">Thanate(Boat)</h1>
        <h1 className="text-[25px] md:text-[25px]">Leaner & Brewer</h1>
        <p className="mb-4 break-words">
          {`Hi everyone,I'm Boat and i was a front end programmer for 3-4 years. Now i'm looking for a new opportunity in many roles. `}
        </p>
        <h1 className="text-[25px] md:text-[25px]">Experience</h1>
        <p>Geekstart Co.,Ltd.</p>
        <p>Jun 2019 - Jan 2023 · 3 yrs 8 m</p>
        <ul className="list-outside list-disc mb-4">
          <li>
            Developed and maintained responsive web pages using HTML, CSS, and
            JavaScript.
          </li>
          <li>
            Daily maintenance of code, debugging issues and solving clients
            problems.
          </li>
          <li>
            Collaborated with back-end developers to create and deliver a
            project that meets customer requirements.
          </li>
          <li>
            Created reusable components and design systems to streamline the
            development process and improve overall website performance.
          </li>
        </ul>
        <h1 className="text-[25px] md:text-[25px] mb-2">Tech Stack</h1>
        <div className="mb-4">
          {skills.map(skill => (
            <Taglist
              skill={skill.name}
              key={skill.name}
              time={skill.time || ""}
            />
          ))}
        </div>

        <Contact />
      </div>
      <div className="w-[400px] h-[400px] hidden relative lg:flex items-center rounded-full shadow-md shadow-green-300/50">
        <Image
          src={me}
          loading="lazy"
          layout="fill"
          className="object-cover rounded-full"
          alt="boat"
          key="boat"
        />
      </div>
    </div>
  );
};

export default Introduce;
