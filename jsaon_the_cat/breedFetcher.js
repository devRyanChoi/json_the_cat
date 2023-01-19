const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const domain = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(domain, (error, response, body)=> {
    if (error) {
      callback(error, null);
    } 
    const data = JSON.parse(body);
    if (data.length ===0) {
      errMsg = `the ${breedName} is not founded`;
      callback(errMsg, null);
    } else {
      callback(null, data[0].descrtiption)
  
    }
  });
  
};


module.exports = { fetchBreedDescription };


// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
});