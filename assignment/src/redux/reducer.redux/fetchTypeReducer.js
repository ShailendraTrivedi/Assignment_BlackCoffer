import {
  FETCH_DATA_BY_TYPE_FAILURE,
  FETCH_DATA_BY_TYPE_REQUEST,
  FETCH_DATA_BY_TYPE_SUCCESS,
} from "../constant";

const initialState = {
  data: [],
  error: false,
};

const fetchTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_BY_TYPE_REQUEST:
      return {
        data: [],
        error: false,
      };
    case FETCH_DATA_BY_TYPE_SUCCESS:
      return {
        data: action.payload,
        error: false,
      };
    case FETCH_DATA_BY_TYPE_FAILURE:
      return {
        data: [],
        error: true,
      };
    default:
      return state;
  }
};

export default fetchTypeReducer;
