import React from "react";

const SubjectCard = ({ header, content }) => {
  return (
    <div>
      <div className="inline-block w-[100%] h-[200px] max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow">
        <h5>{header}</h5>
        <p>{content}</p>
      </div>
      <div className="relative">
        <button className="absolute bottom-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;
