const request = require('request');

let input = process.argv.slice(2)

request('https://api.thecatapi.com/v1/breeds/search?q=' + input, (error, response, body) => {
  // Print the error if one occurred
  if (error !== null) {
    console.log('error:', error)
  } else if (response.statusCode !== 200) {
  // Print the response status code if not 200
    console.log('statusCode:', response && response.statusCode);
  } else if (typeof JSON.parse(body)[0] === 'undefined') {
  // if no breed found 
    console.log("No such breed")
  } else {
  // return desc
    const data = JSON.parse(body);
    console.log(data[0].description);
  };
});