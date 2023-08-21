import axios from "axios";
import {
  FETCH_DATA_BY_TYPE_FAILURE,
  FETCH_DATA_BY_TYPE_REQUEST,
  FETCH_DATA_BY_TYPE_SUCCESS,
} from "../constant";
import { REACT_APP_NETWORK_API } from "../../API.js";

var url = REACT_APP_NETWORK_API;
const fetchTypeAction =
  ({ selectFilter, inputValue }) =>
  async (dispatch) => {
    if (!selectFilter && !inputValue) {
      return false;
    }
    if (selectFilter !== "all" && inputValue) {
      url = `${url}/filter/${selectFilter}/${inputValue}`;
    }
    try {
      dispatch({ type: FETCH_DATA_BY_TYPE_REQUEST });
      const response = await axios.get(url);
      const fetchDataByType = response.data;
      dispatch({ type: FETCH_DATA_BY_TYPE_SUCCESS, payload: fetchDataByType });
    } catch (error) {
      dispatch({ type: FETCH_DATA_BY_TYPE_FAILURE, payload: error.message });
    }
  };

export default fetchTypeAction;
