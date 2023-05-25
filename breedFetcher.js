const request = require('request');

let input = process.argv.slice(2)

request('https://api.thecatapi.com/v1/breeds/search?q=' + input, (error, response, body) => {
  // Print the error if one occurred
  if (error !== null) {
  console.log('error:', error)
  }; 
  // Print the response status code if not 200
  if (response.statusCode !== 200) {
  console.log('statusCode:', response && response.statusCode)
  };
  const data = JSON.parse(body);
  console.log(data[0].description);
});