const request = require('request');
const arg = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + arg, (error, response, body) => {
  if (!error) {
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    if (data.length <= 0) {
      console.log('yeet');
    } else {
      console.log(data[0].description);
    }
  } else {
    console.log('error:', error);
  }
});


// removing response causes error even though its unused
//https://api.thecatapi.com/v1/breeds/search?q='