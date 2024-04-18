import { configureStore } from "@reduxjs/toolkit";
import memberInfoReducer from "./slices/dataSet";
import accountSlice from "./slices/accountSlice";

export const store = configureStore({
   reducer: {
     memberInfo: memberInfoReducer,
     account: accountSlice.reducer,
   },
});
