import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import fetchReducer from "./reducer.redux/fetchReducer";
import fetchTypeReducer from "./reducer.redux/fetchTypeReducer";
const store = configureStore({
  reducer: {
    getAllFetchDataFromStore: fetchReducer,
    getFetchDataByTypeFromStore: fetchTypeReducer,
  },
  middleware: [thunk],
});
export default store;
