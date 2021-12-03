const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (!error) { //if no error
      const data = JSON.parse(body); //turn into array
      if (data.length <= 0) { //if array is 0 or less
        return callback('breed not found', null);//
      }
      return callback(null, data[0].description);
    } else {
      return callback(error, null);
    }
  });


};

//removing request causes a syntax error because request library expects the order of variables to be error response body, removing response makes it think that body is response
//https://api.thecatapi.com/v1/breeds/search?q='

module.exports = { fetchBreedDescription };

