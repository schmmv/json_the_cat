const request = require('request');
const breed = process.argv.slice(2);
const url = `https://api.thecatapi.cm/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log('Request error: ', error);
    return;
  }
  const data = JSON.parse(body)[0];
  if (!data) {
    console.log("Requested breed is not found");
    return;
  }
  console.log(data.description);
})