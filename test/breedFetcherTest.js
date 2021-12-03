const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error statement for an invalid breed, via callback', (done) => {
    fetchBreedDescription('Shart', (err, desc) => {
      //error expected
      const expectedError = 'breed not found';

      assert.equal(expectedError, err);

      done();
    });
  });
});

//QUESTIONS
//why do we need to export and import using brackets, we never had to before, but without it the code fails assertion
//assertion not working