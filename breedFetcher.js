/**
 * Function that fetches cat breed information from TheCatAPI
 * @param {string} breed to search
 * @param {callback} callback that handles the response
 */

const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body)[0];
    if (!data) {
      callback("Requested breed is not found", null);
      return;
    }
    callback(null, data.description);
  });
};

module.exports = { fetchBreedDescription };