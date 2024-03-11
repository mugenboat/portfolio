import React from "react";

export const NewsCard = ({
  header,
  type,
  title,
  content,
  date,
  view,
  isMain,
}) => {
  return (
    <div class="grid grid-cols-2 place-content-stretch h-auto">
      <div
        className={`bg-cover ${isMain ? "h-[275px]" : "h-[180px]"}`}
        style={{
          backgroundImage: `url("data:image/jpeg;base64,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")`,
        }}
      >
        <div className="p-6 flex justify-center">{header}</div>
      </div>
      <div className="grid place-content-around">
        <div className="flex justify-center">
          <div className="p-4">
            <button className="bg-transparent text-green-400 px-2 border border-green-400 rounded-full">
              {type}
            </button>
            <div className="text-[15px] mb-2">{title}</div>
            <div className="text-[10px]">{content}</div>
          </div>
        </div>

        {isMain && (
          <div className="flex mt-5 justify-center">
            <div className="content-end self-end">
              <p className="text-[8px] flex mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-3 h-3 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                {date}
              </p>
              <p className="text-[8px] flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-3 h-3 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                เข้าชม {view} ครั้ง
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
