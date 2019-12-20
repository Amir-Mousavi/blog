import { Types } from "./actionTypes";

export const fetchPosts = ({ _limit, _page }) => {
  return {
    type: Types.FETCH_POSTS,
    successType: Types.FETCH_POSTS_SUCCESS,
    failedTyp: Types.FETCH_POSTS_FAILED,
    isEndpointCall: true,
    endpoint: `posts?_limit=${_limit}&_page=${_page}`,
    method: "GET"
  };
};

export const deletePost = id => {
  return {
    type: Types.DELETE_POST,
    successType: Types.DELETE_POST_SUCCESS,
    failedTyp: Types.DELETE_POST_FAILED,
    isEndpointCall: true,
    endpoint: `posts/${id}`,
    method: "DELETE",
    reduxData: { id }
  };
};
