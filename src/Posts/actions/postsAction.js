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

export const editPost = postObject => {
  return {
    type: Types.EDIT_POST,
    successType: Types.EDIT_POST_SUCCESS,
    failedTyp: Types.EDIT_POST_FAILED,
    isEndpointCall: true,
    endpoint: `posts/${postObject.id}`,
    method: "PATCH",
    data: postObject
  };
};

export const addPost = postObject => {
  return {
    type: Types.ADD_POST,
    successType: Types.ADD_POST_SUCCESS,
    failedTyp: Types.ADD_POST_FAILED,
    isEndpointCall: true,
    endpoint: `posts`,
    method: "POST",
    data: postObject
  };
};

export const addPostAndFetch = (postObject, filters) => {
  return dispatch => {
    dispatch(addPost(postObject)).then(response => {
      if (response.status === 201) {
        dispatch(fetchPosts(filters));
      }
    });
  };
};

export const editPostAndFetch = (postObject, filters) => {
  return dispatch => {
    dispatch(editPost(postObject)).then(response => {
      if (response.status === 200) {
        dispatch(fetchPosts(filters));
      }
    });
  };
};

export const deletePostAndFetch = (id, filter) => {
  return dispatch => {
    dispatch(deletePost(id)).then(response => {
      if (response.status === 200) {
        dispatch(fetchPosts(filter));
      }
    });
  };
};
