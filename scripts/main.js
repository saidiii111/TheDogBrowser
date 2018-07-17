(function(){

 class DogApi {

   constructor(){
     this.baseUrl = 'https://dog.ceo/api/';
   }
   // second task
   getBreed(){
     return $.ajax(`${this.baseUrl}breeds/list/all`).then(res =>  res.message)
   }
   // third task
   getBreedImage(){
     return $.ajax(`${this.baseUrl}breed/african/images/random`).then(res => res.message)
   }
   // forth task
   getBreeds(){
     return $.ajax(`${this.baseUrl}breeds/list/all`).then(result => Object.keys(result.message))
   }


 }

const api = new DogApi();
// First test
console.log(api.baseUrl) // The base url

// // Second test



api.getBreed().then(res => console.log(res));

// // Third test
api.getBreedImage('african').then(res => console.log(res));

// Forth test
api.getBreeds().then(result => {
  console.log(Array.isArray(result)) // true
  console.log(result) // An array of all the keys in the object that we recieved before
})

class DogBrowserView {
    constructor(selector){
      this.root = document.body.querySelector(selector);
    }

    render(htmlString){
      this.root.innerHTML = htmlString;
    }

}

    const view = new DogBrowserView();

    // 1st test
    console.log(view.root) // --> An htmls element for the root of our view

    // 2nd test
    // view.render('<p>test</p>');
    // console.log(view.root.innerHTML === '<p>test</p>') // true

    // 3rd test
    // view.on('click', 'p', event => console.log(event.target)) // Element object for the clicked paragraph

})();
