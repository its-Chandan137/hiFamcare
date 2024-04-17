import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      id: 1,
      title: "Mr. Vijay Sai Ram",
      relation: "Father",
      description:
        "lorem ipsum dolor sit amet, consectetur adip",
      image: "../images/Male.png",
      problem: "BP x",
    },
    {
      id: 2,
      title: "Mrs. Angela",
      relation: "Mother",
      description:
      "lorem ipsum dolor sit amet, consectetur adip",
      image: "../images/Female.png",
      problem: "BP y",
    },
    {
      id: 3,
      title: "Mr. Shiv Sai Ram",
      relation: "Brother",
      description:
      "lorem ipsum dolor sit amet, consectetur adip",
      image: "../images/Brother.png",
      problem: "Blood pressure x",
    },
  ]

const memberInfoSlice = createSlice({
  name: "memberInfo",
  initialState,
  reducers: {
    setMemberInfo: (state, action) => {
      // Update state with payload data
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});


export const { setMemberInfo } = memberInfoSlice.actions;


export default memberInfoSlice.reducer;
