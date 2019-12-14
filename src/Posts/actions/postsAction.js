import { Types } from "./actionTypes";

export const fetchPosts = () => {
  return {
    type: Types.FETCH_POSTS,
    successType: Types.FETCH_POSTS_SUCCESS,
    failedTyp: Types.FETCH_POSTS_FAILED,
    isEndpointCall: true,
    endpoint: "posts/",
    method: "GET"
  };
};
