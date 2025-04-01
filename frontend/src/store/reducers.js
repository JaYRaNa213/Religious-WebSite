import {
  LOGIN_SUCCESS,
  LOGOUT,
  FETCH_BLOGS_SUCCESS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_BOOKINGS_SUCCESS,
} from './actions';

// Initial State
const initialState = {
  user: null,
  blogs: [],
  products: [],
  bookings: [],
};

// Root Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
      };

    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: action.payload,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };

    case FETCH_BOOKINGS_SUCCESS:
      return {
        ...state,
        bookings: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
