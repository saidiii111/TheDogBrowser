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

class DogBrowserView {
    constructor(selector){
      this.root = document.body.querySelector(selector);
    }

    render(htmlString){
      this.root.innerHTML = htmlString;
    }
    on(eventName, selector, callback){
     this.root.addEventListener(eventName, event => {
       // Exit, don't runt the function if the target doesn't match the selector
       if(!event.target.matches(selector)) return;

       callback(event);
     });
   }

}

    const view = new DogBrowserView('#main');

    // 1st test
    console.log(view.root) // --> An htmls element for the root of our view

    // 2nd test
    view.render('<p>test</p>');
    console.log(view.root.innerHTML === '<p>test</p>') // true

    // 3rd test
    view.on('click', 'p', event => console.log(event.target)) // Element object for the clicked paragraph

})();
