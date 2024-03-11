import React from "react";
import Image from "next/image";
import TopicCard from "./TopicCard";
import { useState } from "react";

const TopicBanner = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 gap-4 ">
      <div className="col-start-1">
        <div>Lorem Ipsum is simply dummy.</div>
        <div>
          <Image
            src="/noimg.jpg"
            alt="Landscape picture"
            width={150}
            height={150}
          />
        </div>
        <div>
          <div className="relative flex rounded-lg  w-full">
            <input
              type="text"
              id="hs-trailing-button-add-on-with-icon-and-button"
              name="hs-trailing-button-add-on-with-icon-and-button"
              className="py-1 px-2 ps-11 block border border-gray-200  rounded-s-lg text-sm "
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
              <svg
                className="flex-shrink-0 size-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <button
              type="button"
              className="py-1 px-4 inline-flex justify-center items-center rounded-e-md border border-transparent bg-[#c3c469] text-white"
            >
              ค้นหา
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-1">
        {/* 2 */}
        <div className="grid lg:grid-cols-3 md:grid-cols-3 xs:grid-cols-1 gap-4 ">
          <TopicCard
            header="Generative AI and Chat GPT: Design Thinking Edition"
            body="ปลดล็อกขีดจำกัดการทำงานด้วยพลังAI"
            name="ณัฐกานต์ สิทธิชัยอนันต์"
            role="CEO Y.I.M Corporation"
            isShow={true}
          />
          <TopicCard
            header="Generative ChatGPT:UX Design Edition"
            body="ปลดล็อกขีดจำกัดการทำงานด้วยพลังAI"
            name="ณัฐกานต์ สิทธิชัยอนันต์"
            role="CEO Y.I.M Corporation"
          />
          <TopicCard
            header="UX Accelerator Bundle"
            body="ปลดล็อกขีดจำกัดการทำงานด้วยพลังAI"
            name="ณัฐกานต์ สิทธิชัยอนันต์"
            role="CEO Y.I.M Corporation"
          />
        </div>
      </div>
    </div>
  );
};

export default TopicBanner;
