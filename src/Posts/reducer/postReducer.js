import { Types } from "../actions/actionTypes";

const initState = {
  error: null,
  posts: [],
  count: 0,
  fetching: false,
  deleting: false,
  deleteError: null
};

export default function postReducer(state = initState, action) {
  switch (action.type) {
    case Types.FETCH_POSTS:
      return {
        ...state,
        fetching: true
      };

    case Types.FETCH_POSTS_SUCCESS:
      const {
        headers: { ["x-total-count"]: count }
      } = action;
      return {
        ...state,
        count,
        fetching: false,
        posts: action.data
      };

    case Types.FETCH_POSTS_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error
      };

    case Types.DELETE_POST:
      return {
        ...state,
        deleting: true
      };

    case Types.DELETE_POST_SUCCESS:
      return {
        ...state,
        deleting: false,
        posts: state.posts.filter(post => post.id != action.id)
      };

    case Types.DELETE_POST_FAILED:
      return {
        ...state,
        deleting: false,
        deleteError: action.error
      };

    default:
      return state;
  }
}
