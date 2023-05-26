const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    // Print the error if one occurred
    if (error !== null) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
    // Print the response status code if not 200
      callback(response && response.statusCode, null);
    } else if (typeof JSON.parse(body)[0] === 'undefined') {
    // if no breed found
      callback("No such breed", null);
    } else {
    // return desc
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };

