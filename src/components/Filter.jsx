import React,{useEffect} from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedFilter } from "../store/atoms/selectedFilter";

const Filter = ({ show }) => {
  const [selected, setSelected] = useRecoilState(selectedFilter);

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelected((prev) => [...prev, name]);
    } else {
      setSelected((prev) => prev.filter((item) => item != name));
    }
  };

  const handleReset = () => {
    setSelected([]);

  }
  
  useEffect(() => {
    console.log(selected);
  
  }, [selected])
  

  return (
    <div
      className={`${
        show
          ? "absolute px-4 py-4 rounded-md border border-[#4b4b4b] flex flex-col gap-y-6 w-fit bg-[#333333] bottom-[-226px] left-[-0px]"
          : "hidden"
      }`}
    >
      {/* level*/}
      <div className="flex flex-col gap-y-2">
        <h1 className="font-medium text-base">Difficulty</h1>
        {/* Options */}
        <div className="flex justify-start gap-x-4">
          {/* Easy */}
          <div className="flex items-center gap-x-1">
            <input
              onChange={handleCheckbox}
              checked={selected.includes("Easy")}
              name="Easy"
              type="checkbox"
              className="appearance-none w-4 h-4 bg-[#383838] border border-[#7c7c7c] rounded-sm 
             checked:bg-[#ffffff] checked:border-transparent relative
             before:content-['✔'] before:absolute before:text-white 
             before:inset-0 before:flex before:items-center before:justify-center before:opacity-0 
             checked:before:opacity-100 before:scale-50 before:text-xs cursor-pointer"
            />
            <h1 className={`font-medium text-sm text-[#03BBBB]`}>Easy</h1>
          </div>
          {/* Medium */}
          <div className="flex items-center gap-x-1">
            <input
              checked={selected.includes("Medium")}
              onChange={handleCheckbox}
              name="Medium"
              type="checkbox"
              className="appearance-none w-4 h-4 bg-[#383838] border border-[#7c7c7c] rounded-sm 
             checked:bg-[#ffffff] checked:border-transparent relative
             before:content-['✔'] before:absolute before:text-white 
             before:inset-0 before:flex before:items-center before:justify-center before:opacity-0 
             checked:before:opacity-100 before:scale-50 before:text-xs cursor-pointer"
            />
            <h1 className={`font-medium text-sm text-[#FFB600] `}>Medium</h1>
          </div>
          {/* Hard */}
          <div className="flex items-center gap-x-1">
            <input
              checked={selected.includes("Hard")}
              onChange={handleCheckbox}
              name="Hard"
              type="checkbox"
              className="appearance-none w-4 h-4 bg-[#383838] border border-[#7c7c7c] rounded-sm 
             checked:bg-[#ffffff] checked:border-transparent relative
             before:content-['✔'] before:absolute before:text-white 
             before:inset-0 before:flex before:items-center before:justify-center before:opacity-0 
             checked:before:opacity-100 before:scale-50 before:text-xs cursor-pointer"
            />
            <h1 className={`font-medium text-sm text-[#F83837] `}>Hard</h1>
          </div>
        </div>
      </div>

      {/* Completed*/}
      <div className="flex flex-col gap-y-2">
        <h1 className="font-medium text-base">Status</h1>
        {/* Options */}
        <div className="flex justify-start gap-x-4">
          {/* completed */}
          <div className="flex items-center gap-x-1">
            <input
              onChange={handleCheckbox}
              checked={selected.includes("Completed")}
              name="Completed"
              type="checkbox"
              className="appearance-none w-4 h-4 bg-[#383838] border border-[#7c7c7c] rounded-sm 
             checked:bg-[#ffffff] checked:border-transparent relative
             before:content-['✔'] before:absolute before:text-white 
             before:inset-0 before:flex before:items-center before:justify-center before:opacity-0 
             checked:before:opacity-100 before:scale-50 before:text-xs cursor-pointer"
            />
            <h1 className={`font-medium text-sm`}>Completed</h1>
          </div>
          {/* incomplete */}
          <div className="flex items-center gap-x-1">
            <input
              onChange={handleCheckbox}
              checked={selected.includes("InComplete")}
              name="InComplete"
              type="checkbox"
              className="appearance-none w-4 h-4 bg-[#383838] border border-[#7c7c7c] rounded-sm 
             checked:bg-[#ffffff] checked:border-transparent relative
             before:content-['✔'] before:absolute before:text-white 
             before:inset-0 before:flex before:items-center before:justify-center before:opacity-0 
             checked:before:opacity-100 before:scale-50 before:text-xs cursor-pointer"
            />
            <h1 className={`font-medium text-sm`}>InComplete</h1>
          </div>
        </div>
      </div>
      {/* reset button*/}
      <button className="flex justify-center items-center px-4 py-2 bg-[#383838] rounded-md" onClick={()=> handleReset()}>
        <h1 className="text-sm font-medium">Reset</h1>
      </button>
    </div>
  );
};

export default Filter;
