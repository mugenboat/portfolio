import React from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const Experience = () => {
  return (
    <div>
      <h2 className="flex justify-center items-center text-[15px] text-green-300 my-3">
        Projects that have been involved in developing.
      </h2>

      <div className="w-[80%] mx-auto mt-6 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 gap-[3rem] h-[100%] items-center justify-items-center">
        <div className="text-green-300">
          <div className=" rounded-lg border border-gray-200 w-[260px] h-[250px]">
            <div className="flex justify-center items-center">
              <iframe
                className="p-3"
                src="https://www.youtube.com/embed/CQO9gMIIuys?si=68ick9LbePBt5nFg"
                allowFullScreen
                loading="lazy"
                width="250"
                height="250"
              />
            </div>
          </div>
        </div>
        <div className="text-green-300">
          <div className=" rounded-lg border border-gray-200 w-[260px] h-[250px]">
            <div className="flex justify-center items-center">
              <iframe
                className="p-3"
                src="https://youtube.com/embed/hS4rdwi0Lxc"
                allowFullScreen
                loading="lazy"
                width="250"
                height="250"
              />
            </div>
          </div>
        </div>
        {/* https://youtube.com/shorts/KvML_nF5ZMo */}
        <div className="text-green-300">
          <div className=" rounded-lg border border-gray-200 w-[260px] h-[250px]">
            <div className="flex justify-center items-center">
              <iframe
                className="p-3"
                src="https://youtube.com/embed/hS4rdwi0Lxc"
                allowFullScreen
                loading="lazy"
                width="250"
                height="250"
              />
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="text-green-300">
          <div className=" rounded-lg border border-gray-200 w-[260px] h-[250px]">
            <div className="flex justify-center items-center">
              <iframe
                className="p-3"
                src="https://youtube.com/embed/nmGToClGjnQ"
                allowFullScreen
                loading="lazy"
                width="250"
                height="250"
              />
            </div>
          </div>
        </div>
      </div>
      <h2 className="flex justify-center items-center text-[15px] text-green-300 my-3">
        more clips is coming soon
      </h2>
    </div>
  );
};

export default Experience;
