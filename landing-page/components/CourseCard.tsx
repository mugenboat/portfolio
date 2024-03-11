import React from "react";

const CourseCard = ({ name, progress, image }) => {
  return (
    <div>
      <div className="inline-block w-[100%] h-[280px] max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="h-[280px] grid grid-cols-1 content-stretch">
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="p-4">{name}</div>
          </div>
          <div className="p-4 grid content-between">
            <div>{name}</div>
            <div>
              <p className="mt-2 text-[12px]">
                เรียนไปแล้ว <span className="font-bold">{progress}%</span>
              </p>
              <div className="h-1 w-full bg-slate-300	">
                <div
                  className="h-1 bg-[#c3c469] self-end"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
