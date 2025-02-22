import { atom } from "recoil";


export const alldata = atom({
    key: "alldata",
    default: [
        {
            question: "Palindrome Number",
            id: 1,
            level: "Easy",
            isCompleted: false
        },
        {
            question: "Roman to Integer",
            id: 2,
            level: "Easy",
            isCompleted:false
        },
        {
            question: "Zigzag Conversion",
            id: 3,
            level: "Medium",
            isCompleted: true
        },
        {
            question: "Reverse Integer",
            id: 4,
            level: "Medium",
            isCompleted: false
        },
        {
            question: "String to Integer (atoi)",
            id: 5,
            level: "Medium",
            isCompleted: false
        },
        {
            question: "Integer to Roman",
            id: 6,
            level: "Medium",
            isCompleted: false
        },
        {
            question: "Median of Two Sorted Arrays",
            id: 7,
            level: "Hard",
            isCompleted: false
        },
        {
            question: "Letter Combination of a Phone number",
            id: 8,
            level: "Medium",
            isCompleted: false,
            
        },
        {
            question: "Next Permutation",
            id: 9,
            level: "Medium",
            isCompleted: false,
            
        }
    ]
})