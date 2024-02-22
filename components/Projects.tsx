import React from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const Experience = () => {
  return (
    <div>
      <h2 className="flex justify-center items-center text-green-300 my-3">
        Some Project i have
      </h2>

      <div className="w-[80%]  mx-auto mt-6 grid lg:grid-cols-2 md:grid-cols-2 gap-[3rem] h-[100%] items-center justify-items-center">
        <div className="text-green-300">
          <div className="p-6 rounded-lg border border-gray-200 w-[300px] h-[300px]">
            <div className="flex justify-center items-center">
              <Image
                src="./geeers.png"
                alt=""
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
              <p>- dasdkjk</p>
              <p>- dasdkjk</p>
            </div>
          </div>
        </div>

        <div className="text-green-300">
          <div className="p-6 rounded-lg border border-gray-200 w-[300px] h-[300px]">
            <div className="flex justify-center items-center">
              <Image
                src="./sansiri.png"
                alt=""
                width={35}
                height={35}
                className="rounded-full"
              />
            </div>
            <h2 className="text-center mb-2">Sansiri</h2>
            <div className="break-words">
              <p className="mb-2">
                Geeers is a simple and powerful platform for teams to run &
                automate recurring workflows.
              </p>
              <p>- dasdkjk</p>
              <p>- dasdkjk</p>
            </div>
          </div>
        </div>
        <div className="text-green-300">
          <div className="p-6 rounded-lg border border-gray-200 w-[300px] h-[300px]">
            <div className="flex justify-center items-center">
              <Image
                src="./one.png"
                alt=""
                width={35}
                height={35}
                className="rounded-full"
              />
            </div>
            <h2 className="text-center mb-2">One Assets Management</h2>
            <div className="break-words">
              <p className="mb-2">
                Geeers is a simple and powerful platform for teams to run &
                automate recurring workflows.
              </p>
              <p>- dasdkjk</p>
              <p>- dasdkjk</p>
            </div>
          </div>
        </div>
        <div className="text-green-300">
          <div className="p-6 rounded-lg border border-gray-200 w-[300px] h-[300px]">
            <div className="flex justify-center items-center">
              <Image
                src="./mez.png"
                alt=""
                width={35}
                height={35}
                className="rounded-full"
              />
            </div>
            <h2 className="text-center mb-2">Mez</h2>
            <div className="break-words">
              <p className="mb-2">
                Geeers is a simple and powerful platform for teams to run &
                automate recurring workflows.
              </p>
              <p>- dasdkjk</p>
              <p>- dasdkjk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
