import { configureStore } from "@reduxjs/toolkit";
import memberInfoReducer from "./slices/dataSet";

export const store = configureStore({
   reducer: {
     memberInfo: memberInfoReducer,
   },
});
