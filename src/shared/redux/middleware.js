import axios from "axios";
const basedURL = "http://localhost:3004/";

const handleSuccess = ({ response, type, next, reduxData }) => {
  next({
    data: response.data,
    type,
    ...response,
    ...reduxData
  });
};

const handleFailed = ({ error, type, next }) => {
  next({
    type,
    error
  });
};

const apiMiddleware = store => next => action => {
  const { isEndpointCall, type, reduxData = {} } = action;

  if (isEndpointCall) {
    next({ type });
    const { method, successType, failedTyp } = action;
    axios(`${basedURL}${action.endpoint}`, {
      method
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
