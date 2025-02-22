import React from "react";

function Favorite({handleCloseSidebar}) {
  
  
  return (
    <div className="relative p-6 bg-[#262626] flex flex-col lg:items-start items-center rounded-sm w-full">
      {/* navbar close icon */}
      <div id="Sidebar Icon" className={`absolute w-8 h-8 flex items-center justify-center bg-[#383838] rounded-sm left-4 top-4 border border-[#5a5a5a]  lg:hidden`} onClick={handleCloseSidebar}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="sidebar"
          className="size-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M224 80V432H448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H224zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88c-13.3 0-24 10.7-24 24zm24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88zM64 312c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88c-13.3 0-24 10.7-24 24z"
          ></path>
        </svg>
      </div>
      {/* Favorite icon */}
      <div className="pb-4">
        <div className="bg-[#F5F5F5] h-20 w-20 rounded-sm flex justify-center items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#FFAC32"
            className=""
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* Favorite text */}
      <div className="pb-2">
        <h1 className="text-2xl font-medium ">Favorite</h1>
      </div>
      {/* name, questions, private text */}
      <div className="flex space-x-1.5 items-center pb-4">
        <h2 className="text-sm font-light">Niraj</h2>
        <div className="w-[2px] h-[2px] rounded-full bg-white"></div>
        <h2 className="text-sm font-light">19 questions</h2>
      </div>

      {/* button */}
      <div className="flex space-x-2.5 pb-4 items-center">
        <button className="bg-white px-5 py-2 flex items-center space-x-2 text-gray-950 rounded-4xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="font-medium text-base">Practice</h1>
        </button>
        {/* plus button */}
        <button className="w-9 h-9 flex justify-center items-center bg-[#383838] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* edit button */}
        <button className="w-9 h-9 flex justify-center items-center bg-[#383838] rounded-full">
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
        {/* more button */}
        <button className="w-9 h-9 flex justify-center items-center bg-[#383838] rounded-full">
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
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </button>
      </div>
      {/* line */}
      <div className="w-full h-0.5 bg-[#3C3C3C] rounded-full hidden md:block"></div>
      {/* Progress */}
      <div className="md:flex flex-col box-border hidden w-full ">
        {/* Progress text and refress icon */}
        <div className="flex justify-between items-center pt-4 pb-2">
          <h1 className="font-medium text-sm">Progress</h1>
          <div className="w-7 h-7 flex justify-center items-center hover:bg-[#383838] rounded-md">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="arrow-rotate-left"
              className="size-3.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M40 224c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v80.1l20-23.5C125 63.4 186.9 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-50.4 0-97-16.7-134.4-44.8c-10.6-8-12.7-23-4.8-33.6s23-12.7 33.6-4.8C179.8 418.9 216.3 432 256 432c97.2 0 176-78.8 176-176s-78.8-176-176-176c-54.3 0-102.9 24.6-135.2 63.4l-.1 .2 0 0L93.1 176H184c13.3 0 24 10.7 24 24s-10.7 24-24 24H40z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Progressbar and easy */}
        <div className=" flex space-x-2.5">
          {/* Progressbar */}
          <div className="bg-[#333333] flex justify-center items-center p-3 rounded-sm">
            <div className="w-52 h-52 rounded-full border-4 border-[#019727] flex justify-center items-center flex-col">
              {/* 19/19 and solved */}
              <div className="flex flex-col justify-center items-center">
                <div className="flex items-baseline">
                  <h1 className="font-bold text-2xl">19</h1>
                  <h1 className="font-medium text-sm">/19</h1>
                </div>
                {/* solved */}
                <div className="flex items-center space-x-1">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#019727"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h1 className="font-medium text-sm">Solved</h1>
                </div>
              </div>
              {/* 0 attempting */}
              <div className="flex justify-center items-center">
                <h1 className="text-[12px] text-[#A8A8A8]">0 Attempting</h1>
              </div>
            </div>
          </div>

          {/* Easy, medium and hard */}
          <div className="flex flex-col justify-between gap-y-2">
            {/* Easy */}
            <div className="flex flex-col justify-center items-center px-10 h-full bg-[#333333] rounded-sm space-y-0.5">
              <h1 className="text-[#03BBBB] text-xs font-medium">Easy</h1>
              <h1 className="text-xs font-medium">11/11</h1>
            </div>
            {/* Medium */}
            <div className="flex flex-col justify-center items-center px-10 h-full bg-[#333333] rounded-sm space-y-0.5">
              <h1 className="text-[#FFB600] text-xs font-medium">Medium</h1>
              <h1 className="text-xs font-medium">18/18</h1>
            </div>
            {/* Hard */}
            <div className="flex flex-col justify-center items-center px-10 h-full bg-[#333333] rounded-sm space-y-0.5">
              <h1 className="text-[#F83837] text-xs font-medium">Hard</h1>
              <h1 className="text-xs font-medium">09/09</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Progress div */}
      <div className="w-full block md:hidden">
        <div className="flex px-4 py-3 bg-[#383838] space-x-2.5 rounded-md items-center justify-start w-fit">
          <div className="flex space-x-1 items-center">
            <h1 className="text-sm">Progress:</h1>
            <span className="font-bold text-base">0</span>
            <h1 className="text-sm">Solved</h1>
          </div>
          <div>
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
