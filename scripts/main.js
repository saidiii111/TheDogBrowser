(function(){

 class DogApi {

   constructor(){
     this.baseUrl = 'https://dog.ceo/api/';
   }

 }

const api = new DogApi();
// First test
// console.log(api.baseUrl) // The base url

// // Second test

// api.getBreeds().then(res => console.log(res));

// // Third test
// api.getBreedImage('african').then(res => console.log(res));
})();
