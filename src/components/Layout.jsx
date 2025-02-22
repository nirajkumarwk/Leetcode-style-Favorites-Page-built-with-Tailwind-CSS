import React, { useEffect, useState } from "react";
import Favorite from "./Favorite";
import Table from "./Table";
import Filter from "./Filter";
import Filterbutton from "./Filterbutton";
import { useRecoilValue } from "recoil";
import { SelectedFilter } from "./Filterbutton";
import { useRecoilState } from "recoil";
import { selectedFilter } from "../store/atoms/selectedFilter";
import { filteredData } from "../store/selectors/filteredData";
import Sidebar from "./Sidebar";

const Layout = () => {
   
  const [showSidebar, setShowSidebar] = useState(true)

  const EveryData = useRecoilValue(filteredData);
  useEffect(() => {
    console.log("EveryData", EveryData);
  }, [EveryData]);

  
  const [selectedValues, setSelectedValues] = useRecoilState(selectedFilter);

  const [showFilter, setShowFilter] = useState(false);

  
  const handleCloseSidebar = () => {
    setShowSidebar(prev => !prev)
    console.log("HandleCloseSidebar")
  }

  const onClick = () => {
    console.log("OnClick Filter show");
    setShowFilter((prev) => !prev);
  };

  return (
    <div className="grid grid-cols-12 h-screen">
      {/* Sidebar div*/}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} handleCloseSidebar={handleCloseSidebar}/>

      {/* mainContent div*/}
      <div
        className={`${showSidebar ? "bg-[#1A1A1A] col-span-12 lg:col-span-10 md:col-span-12 text-white p-10 flex flex-col md:flex-row space-x-6 space-y-6" : "col-span-12 bg-[#1A1A1A] text-white p-10 flex space-x-6 space-y-6 flex-col md:flex-row"}`}
        id="mainContent"
      >
        <div className="w-full md:w-fit h-fit relative">
          <Favorite showSidebar={showSidebar}  setShowSidebar={setShowSidebar} handleCloseSidebar={handleCloseSidebar}/>
          {showSidebar ? "" : (<div 
           className={`w-8 h-8 lg:flex items-center justify-center bg-[#373737] hover:bg-[#434343] rounded-sm absolute top-0 left-[-35px] hidden `}
           onClick={handleCloseSidebar}
           id="Sidebar Icon">
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
          </div>)}
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <div className="relative flex gap-x-2">
            <Filterbutton showFilter={showFilter} onClick={onClick} />
            <div className="flex gap-x-2">
              <Filter show={showFilter} />
              {selectedValues.map((seleted, index) => (
                <SelectedFilter selected={seleted} key={index} />
              ))}
            </div>
          </div>
          {EveryData.map((item) => (
            <Table
              id={item.id}
              question={item.question}
              isCompleted={item.isCompleted}
              level={item.level}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
