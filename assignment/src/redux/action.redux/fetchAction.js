import {
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
} from "../constant.js"; // Make sure this path is correct
import axios from "axios";
import { REACT_APP_NETWORK_API } from "../../API.js";
const url = REACT_APP_NETWORK_API;
export const fetchAction = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_REQUEST });
    const response = await axios.get(url);
    const fetchAllData = response.data;
    dispatch({ type: FETCH_ALL_SUCCESS, payload: fetchAllData });
  } catch (error) {
    dispatch({ type: FETCH_ALL_FAILURE });
    console.error("Error fetching data:", error);
  }
};
