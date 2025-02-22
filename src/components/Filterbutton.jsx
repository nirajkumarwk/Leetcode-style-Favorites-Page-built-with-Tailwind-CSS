import React, { useState } from "react";
import Filter from "./Filter";
import { useRecoilState } from "recoil";
import { selectedFilter } from "../store/atoms/selectedFilter";

const Filterbutton = ({ onClick, showFilter }) => {
    

  return (
    <div className=" w-fit flex items-center gap-x-2" onClick={onClick}>
      <div
        className={`${
          showFilter
            ? "bg-white flex items-center gap-x-2 px-3 py-1.5 rounded-full text-[#252525]"
            : "flex items-center gap-x-2 px-3 py-1.5 border rounded-full border-[#383838]"
        } `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
            clipRule="evenodd"
          />
        </svg>
        <div className="text-sm font-medium">Filter</div>
      </div>
    </div>
  );
};

export const SelectedFilter = ({ selected }) => {
    const [selectedValues, setSelectedValues] = useRecoilState(selectedFilter)
  const onClose = (selected) => {
    setSelectedValues((prev) => prev.filter((item) => item != selected))
  };
  return (
    <div className="flex gap-x-1 items-center bg-white text-[#383838] text-sm font-medium border border-[#a9a9a9] py-1.5 px-3 rounded-full">
      <h1>{selected}</h1>
      <div className="flex items-center">
        <button onClick={() => onClose(selected)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 text-[#383838]"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Filterbutton;
