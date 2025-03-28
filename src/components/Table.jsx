import React from "react";

const Table = ({
  id = 2,
  question = "Palindrome Number",
  isCompleted = false,
  level = "Easy",
}) => {
  return (
    <div
      className={`flex justify-between items-center px-2 py-2 w-full rounded-md group ${
        id % 2 === 0 ? "bg-[#1A1A1A]" : " bg-[#282828]"
      }`}
    >
      <div className="flex space-x-2 items-center">
        <div className={`${isCompleted ? "block" : "invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <div className="text-sm font-medium  md:w-40 md:truncate lg:min-w-fit  lg:overflow-visible">
          {id}. {question}
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <div
          className={`font-light text-sm ${
            level === "Easy"
              ? "text-[#03BBBB]"
              : level === "Medium"
              ? "text-[#FFB600]"
              : "text-[#F83837]"
          }`}
        >
          {level}
        </div>

        <div>
          <div
            className={`hover:bg-[#3b3b3b] h-8 w-8 rounded-sm flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-opacity`}
            id="favorite icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#FFAC32"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
