import React from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const Experience = () => {
  const tiktoks = [
    "https://www.youtube.com/embed/CQO9gMIIuys?si=68ick9LbePBt5nFg",
    "https://youtube.com/embed/VWRyhuojz7s",
    "https://youtube.com/embed/CbW4DvW_DOc",
    "https://youtube.com/embed/hS4rdwi0Lxc",
    "https://youtube.com/embed/JXUhg9WXCnY",
    "https://youtube.com/embed/KvML_nF5ZMo",
    "https://youtube.com/embed/nmGToClGjnQ",
  ];

  return (
    <div>
      <h2 className="flex justify-center items-center text-[15px] text-green-300 my-3">
        This is sample of my trying editing video, there more because im still
        learning .
      </h2>
      <h2 className="flex justify-center items-center text-[15px] text-green-300 my-3">
        watch me more in Tiktok :
        <a href="https://www.tiktok.com/@boattheblur" className="text-blue-300">
          boattheblur
        </a>
      </h2>
      <h2 className="flex justify-center items-center text-[15px] text-green-300 my-3">
        Ps. I just created tiktok account on 26 Feb 2025.
      </h2>

      <div className="w-[80%] mx-auto mt-6 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 gap-[3rem] h-[100%] items-center justify-items-center">
        {tiktoks.map((tiktok, index) => (
          <div className="text-green-300" key="index">
            <div className=" rounded-lg border border-gray-200 w-[260px] h-[250px]">
              <div className="flex justify-center items-center">
                <iframe
                  className="p-3"
                  src={tiktok}
                  allowFullScreen
                  loading="lazy"
                  width="250"
                  height="250"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="bt-5 flex justify-center items-center text-[15px] text-green-300 my-3">
        more clips is coming soon
      </h2>

      <h2 className="flex justify-center items-center text-[15px] text-green-300 my-3">
        And this is acting(i know it weird lol) and some of my idea
        brainstorming with my friends since when i had been university .
      </h2>
      <div className="w-[80%] mx-auto mt-6 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 gap-[3rem] h-[100%] items-center justify-items-center">
        <div className="text-green-300">
          <div className=" rounded-lg border border-gray-200 w-[260px] h-[250px]">
            <div className="flex justify-center items-center">
              <iframe
                className="p-3"
                src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/chongnomst/videos/1780449818702034/"
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
                src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/chongnomst/videos/2119944344786195/"
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
                src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/chongnomst/videos/1926046817475666"
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
                src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/chongnomst/videos/2205632489531585/"
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
                src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/chongnomst/videos/738362913227850/"
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
                src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/chongnomst/videos/307033649895047"
                allowFullScreen
                loading="lazy"
                width="250"
                height="250"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
