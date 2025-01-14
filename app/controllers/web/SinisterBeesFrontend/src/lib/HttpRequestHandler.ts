import axios from 'axios';

export const HttpHandler = axios.create({
  baseURL: 'http://0.0.0.0:5000/',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// const Cache = new Map();

HttpHandler.interceptors.request.use(
  (con) => {
    //handle incoming requests
    //auth  agar localstorage me karna hua to
    return con;
  },
  (err) => {
    //handle err
    return Promise.reject(err);
  },
);

HttpHandler.interceptors.response.use(
  (response) => {
    //bad me dekhenge
    return response;
  },
  (err) => {
    if (err.response) {
      //ha niche ka code chatgpt se likhvaya hai
      switch (err.response.status) {
        case 400: // Bad Request
          console.error('Bad Request: Check your request data or parameters.');
          alert(
            'There was an issue with your request. Please check and try again.',
          );
          break;

        case 401: // Unauthorized
          console.error('Unauthorized: Authentication is required.');
          alert('You are not authorized. Please log in again.');
          // Optionally redirect to login page
          window.location.href = '/login';
          break;

        case 403: // Forbidden
          console.error('Forbidden: You do not have access to this resource.');
          alert(
            'Access denied. Please contact support if you think this is a mistake.',
          );
          break;

        case 404: // Not Found
          console.error(
            'Not Found: The requested resource could not be found.',
          );
          alert('The resource you are looking for was not found.');
          break;

        case 500: // Internal Server err
          console.error(
            'Internal Server err: Something went wrong on the server.',
          );
          alert(
            'We are experiencing technical issues. Please try again later.',
          );
          break;

        case 503: // Service Unavailable
          console.error(
            'Service Unavailable: The server is temporarily unavailable.',
          );
          alert('Service is temporarily unavailable. Please try again later.');
          break;

        default:
          console.error(`Unhandled HTTP err: ${err.response.status}`);
          alert(
            `An unexpected err occurred (Status Code: ${err.response.status}).`,
          );
      }
      return Promise.reject(err);
    }
  },
);
