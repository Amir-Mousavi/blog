import axios from "axios";
const basedURL = "http://localhost:3004/";

const handleSuccess = ({ response, type, next, reduxData }) => {
  next({
    data: response.data,
    type,
    ...response,
    ...reduxData
  });

  return new Promise((resolve, reject) => {
    resolve(response);
  });
};

const handleFailed = ({ error, type, next }) => {
  next({
    type,
    error
  });

  return new Promise((resolve, reject) => {
    reject(error);
  });
};

const apiMiddleware = store => next => action => {
  const { isEndpointCall, type, reduxData = {}, data = {} } = action;

  if (isEndpointCall) {
    next({ type });
    const { method, successType, failedTyp } = action;
    return axios(`${basedURL}${action.endpoint}`, {
      method,
      data
    })
      .then(response =>
        handleSuccess({ response, type: successType, next, reduxData })
      )
      .catch(error => handleFailed({ error, type: failedTyp, next }));
  } else {
    next(action);
  }
};

export default apiMiddleware;
