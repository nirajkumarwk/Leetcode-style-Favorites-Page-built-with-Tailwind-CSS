import React,{useState} from 'react'

const Sidebar = ({showSidebar, handleCloseSidebar, setShowSidebar }) => {
    
  return (
   
    <>
    {/* Overlay */}
    {showSidebar && (
        <div
          className={`fixed inset-0 bg-black opacity-80  z-40 lg:hidden`}
          onClick={handleCloseSidebar}
        />
      )}

    <div
        className= {`bg-[#333333] p-4 text-white space-y-4 lg:w-full lg:static fixed  w-64 z-50 h-full  ${showSidebar ? "lg:col-span-2 lg:block ": "hidden"}`}
        id="Sidebar Icon"
      >
        {/* My Lists div*/}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg">My Lists</h1>
          <div 
           className={`w-8 h-8 flex items-center justify-center hover:bg-[#434343] rounded-sm `}
           onClick={handleCloseSidebar}>
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
        </div>

        {/*created by me div*/}
        <div className="">
          <h1 className="font-medium text-sm">Created by me</h1>
        </div>
        {/*Favorite div*/}
        <div className="flex bg-[#434343] px-2 py-2 rounded-sm justify-between items-center">
          <div className="flex space-x-2">
            <div className="bg-[#F5F5F5] h-5 w-5 rounded-sm flex justify-center items-center">
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
            <h1 className="text-sm font-medium ">Favorite</h1>
          </div>
          <div className="w-4 h-4 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      

    </>
  )
}

export default Sidebar