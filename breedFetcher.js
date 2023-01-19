const request = require('request');
const catBreedName = process.argv.slice(2);

const breedDescription = function(catBreedName, callback) {
  const domain =  "https://api.thecatapi.com/v1/breeds/search" + catBreedName;
  request((domain, callback) => {
    if(catBreedName === '') {
      callback(errMsg)
    } else {
      console.log(`The ${catBreedName} is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.`)
    }
  });

}
const name = catBreedName;


//https://api.thecatapi.com/v1/breeds/search