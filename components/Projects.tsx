import React from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const Experience = () => {
  return (
    <div>
      <h2 className="flex justify-center items-center text-[15px] text-green-300 my-3">
        Projects that have been involved in developing.
      </h2>

      <div className="w-[80%] mx-auto mt-6 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-[3rem] h-[100%] items-center justify-items-center">
        <div className="text-green-300">
          <div className="p-6 rounded-lg border border-gray-200 w-[260px] h-[250px]">
            <div className="flex justify-center items-center">
              <Image
                src="./geeers.png"
                alt=""
                loading="lazy"
                width={35}
                height={35}
                className="rounded-full"
              />
            </div>
            <h2 className="text-center mb-2">Geeers</h2>
            <div className="break-words">
              <p className="mb-2">
                Geeers is a simple and powerful platform for teams to run &
                automate recurring workflows.
              </p>
            </div>
          </div>
        </div>

        <div className="text-green-300">
          <div className="p-6 rounded-lg border border-gray-200 w-[260px] h-[250px]">
            <div className="flex justify-center items-center">
              <Image
                src="./sansiri.png"
                alt=""
                loading="lazy"
                width={35}
                height={35}
                className="rounded-full"
              />
            </div>
            <h2 className="text-center mb-2">Sansiri</h2>
            <div className="break-words">
              <p className="mb-2">
                Web management to create custom content and promotion to
                webpage.
              </p>
            </div>
          </div>
        </div>
        <div className="text-green-300">
          <div className="p-6 rounded-lg border border-gray-200 w-[260px] h-[250px]">
            <div className="flex justify-center items-center">
              <Image
                src="./one.png"
                alt=""
                loading="lazy"
                width={35}
                height={35}
                className="rounded-full"
              />
            </div>
            <h2 className="text-center mb-2">One Assets Management</h2>
            <div className="break-words">
              <p className="mb-2">
                One Asset Management Limited was asset management company who
                investment management under the Securities and Exchange Act.
              </p>
            </div>
          </div>
        </div>
        <div className="text-green-300">
          <div className="p-6 rounded-lg border border-gray-200 w-[260px] h-[250px]">
            <div className="flex justify-center items-center">
              <Image
                src="./mez.png"
                alt=""
                loading="lazy"
                width={35}
                height={35}
                className="rounded-full"
              />
            </div>
            <h2 className="text-center mb-2">Mez</h2>
            <div className="break-words">
              <p className="mb-2">
                Mez is platform to sell and buy friuts from farmer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="flex justify-center items-center text-[15px] text-green-300 my-3">
        and more but i already forgot it lol.
      </h2>
    </div>
  );
};

export default Experience;
