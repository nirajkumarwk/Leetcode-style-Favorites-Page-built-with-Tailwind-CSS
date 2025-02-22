import { selector } from "recoil";
import { alldata } from "../atoms/alldata";
import { selectedFilter } from "../atoms/selectedFilter";


export const filteredData = selector({
    key: "filteredData",
    get: ({get}) => {
        const datas = get(alldata);
        const selectedFilters = get(selectedFilter);
        if (!selectedFilters || selectedFilters.length === 0) {
            console.log("No filters selected, returning all data.");
            return datas;
        }
        const filteredData = datas.filter((data) =>{
            return (
                selectedFilters.includes(data.level) || 
                (selectedFilters.includes("Completed") && data.isCompleted) || 
                (selectedFilters.includes("InComplete") && !data.isCompleted)
            );
        });
        console.log("Filtered Data:", filteredData);
        return filteredData;
    }
});