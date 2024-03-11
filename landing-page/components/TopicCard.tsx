import React from "react";

const TopicCard = ({ header, body, name, role, isShow }) => {
  return (
    <div>
      {isShow && (
        <div className="h-[230px] grid content-between max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow">
          <p className="text-[13px] font-bold tracking-tight text-gray-900 dark:text-white">
            {header}
          </p>
          <p className="text-[10px]">{body}</p>
          <div className="flex mt-5">
            <img
              className="w-7 h-7 rounded-full"
              src="/noimg.jpg"
              alt="Rounded avatar"
            />
            <div className="content-end">
              <p className="text-[8px]">{name}</p>
              <p className="text-[8px]">{role}</p>
            </div>
          </div>
        </div>
      )}

      {!isShow && (
        <div className="h-[230px]  grid content-between max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow">
          <div className="-rotate-90">{header}</div>
          <div className="flex  justify-center">
            <img
              className="w-7 h-7 rounded-full"
              src="/noimg.jpg"
              alt="Rounded avatar"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicCard;
