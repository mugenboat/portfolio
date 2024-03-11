import React from "react";

const OnlinecourseCard = ({ topic, name, content, image }) => {
  return (
    <div>
      <div
        className="bg-cover inline-block w-[100%] h-[280px] max-w-sm bg-white border border-gray-200 rounded-lg shadow"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="h-[280px] grid grid-cols-1 content-stretch p-4">
          <div>
            <button className="bg-transparent text-slate-400  py-0.5 px-4 border border-slate-400 rounded-full">
              {topic}
            </button>
            <div className="mb-5">{name}</div>
            <div className="text-[13px]">{content}</div>
          </div>
          <div className="flex mt-5 justify-center">
            <img
              className="w-7 h-7 rounded-full mr-2 self-end"
              src="/noimg.jpg"
              alt="Rounded avatar"
            />
            <div className="content-end self-end">
              <p className="text-[8px]">ณัฐกานต์ สิทธิชัยอนันต์</p>
              <p className="text-[8px]">CEO Y.I.M Corporation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlinecourseCard;
