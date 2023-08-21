import {
  FETCH_ALL_FAILURE,
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
} from "../constant";

const initialData = {
  data: [],
  error: false,
};
const fetchReducer = (state = initialData, action) => {
  switch (action.type) {
    case FETCH_ALL_REQUEST:
      return {
        data: [],
        error: false,
      };
    case FETCH_ALL_SUCCESS:
      return {
        data: action.payload,
        error: false,
      };
    case FETCH_ALL_FAILURE:
      return {
        data: [],
        error: true,
      };
    default:
      return state;
  }
};

export default fetchReducer;
