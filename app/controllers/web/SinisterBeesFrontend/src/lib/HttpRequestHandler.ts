import axios from 'axios';
import { useNotifications } from '../components/ui/Notifications/notification-store';

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

      useNotifications.getState().addNotification({
        type: 'error',
        title: 'Api error',
        message: `Respne ${err.response.status}`,
      })

      //ha niche ka code chatgpt se likhvaya hai
      switch (err.response.status) {
        case 400: // Bad Request
          console.error('Bad Request: Check your request data or parameters.');

          break;

        case 401: // Unauthorized
          console.error('Unauthorized: Authentication is required.');
          // Optionally redirect to login page
          break;

        case 403: // Forbidden
          console.error('Forbidden: You do not have access to this resource.');

          break;

        case 404: // Not Found
          console.error(
            'Not Found: The requested resource could not be found.',
          );
          break;

        case 500: 
          console.error(
            'Internal Server err: Something went wrong on the server.',
          );
          break;

        case 503: 
          console.error(
            'Service Unavailable: The server is temporarily unavailable.',
          );
          break;

        default:
          console.error(`Unhandled HTTP err: ${err.response.status}`);
      }
      return Promise.reject(err);
    }
  },
);
