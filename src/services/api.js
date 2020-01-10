import axios from 'axios';

const request = async ({
  method,
  endpoint,
  headers,
  body,
  queryParams,
  callbackFunction,
  exceptionHandlerFunction,
  loaderSetterFunction,
}) => {
  const config = {
    method: method || 'get',
    baseURL: 'https://pokeapi.co/api/v2/',
    url: endpoint,
    timeout: 8000,
    data: body || null,
    params: queryParams || null,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (loaderSetterFunction) loaderSetterFunction(true);

  const {data: response} = await axios(config).catch(error => {
    if (exceptionHandlerFunction) {
      exceptionHandlerFunction();
    } else {
      console.log(error);
    }
  });

  if (loaderSetterFunction) loaderSetterFunction(false);

  if (callbackFunction) {
    callbackFunction(response);
  } else {
    throw new ReferenceError(
      'You should provide a callback function to handle the response.',
    );
  }
};

export default request;
