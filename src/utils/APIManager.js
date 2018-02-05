import axios from 'axios';
import Promise from 'bluebird';

/**
 * Get the host name from the environment when deploying
 *  (Server/ Client are split up for this project)
 */
const host = 'http://localhost:8080';

// Export a series of functions to make HTTP requests
export default {

  // get: (path, params) => {
  //   const url = `${host}${path}`;
  //   return axios.get(url, { params });
  // },

  get: (path, params) => new Promise(async (resolve, reject) => {
    const url = `${host}${path}`;
    try {
      const response = await axios.get(url, { params });
      resolve(response.data);
    } catch (err) {
      reject(err);
    }
  }),

  post: (path, params) => new Promise(async (resolve, reject) => {
    const url = `${host}${path}`;
    try {
      const response = await axios.post(url, params);
      resolve(response.data);
    } catch (err) {
      reject(err);
    }
  }),

};
