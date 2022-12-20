const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  };
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Breed not found 😿. Try another?")
    return
  }
  console.log(data[0].description);
  return
});


