(function(){

    class DogApi {

        constructor(){
            this.baseUrl = 'https://dog.ceo/api/';
        }
        // second task
        getBreed(){
            return $.ajax(`${this.baseUrl}breeds/list/all`).then(res =>  res.message);
        }
        // third task
        getBreedImage(){
            return $.ajax(`${this.baseUrl}breed/african/images/random`).then(res => res.message);
        }
        // forth task
        getBreeds(){
            return $.ajax(`${this.baseUrl}breeds/list/all`).then(result => Object.keys(result.message));
        }


    }

    // class declaration
    class DogBrowserView {
        // a special method for creating and initializing an object created with a class,can use it just once in each class, here we passed a selector string as a parameter.
        constructor(selector){
            // we pick the main elem and assign it to this.root
            this.root = document.body.querySelector(selector);
        }
        // creating the render method and pass htmlString as a parameter to replace all html elements we want.
        render(htmlString){
            this.root.innerHTML = htmlString;
        }
        // creating (On) method with 3 parameters.
        on(eventName, selector, callback){
            // adding event listener to the main element
            this.root.addEventListener(eventName, event => {
                // Exit, don't runt the function if the target doesn't match the selector
                if(!event.target.matches(selector)) return;
                // if its true run it
                callback(event);
            });
        }
        breedListTemplate(buttons){
            const button = buttons.map(breed => `
    <button type="button" class="list-group-item list-group-item-action">${breed}</button>`);
            return `<div class="list-group">
  ${button}
 </div>`;
        }
        dogImageTemplate(images){
            return `<header>
  <button type="button" class="btn btn-primary back-button">Go Back</button>
 </header>
<section>
  <img class="img-fluid" src=${images}>
 </section>`;
        }
    }
    // declare the view with new keyWord which we can use it on the class
    const view = new DogBrowserView('#main');
    //
    // // 1st test
    // console.log(view.root) // --> An htmls element for the root of our view
    //
    // // 2nd test
    // view.render('<p>test</p><p>test5</p><p>test0</p>');
    // console.log(view.root.innerHTML === '<p>test</p>') // true
    //
    // // 3rd test
    // view.on('click', 'p', event => console.log(event.target)) // Element object for the clicked paragraph

    // console.log(view.breedListTemplate(['Hello', 'Hi','word']));
    console.log(view.dogImageTemplate('http://via.placeholder.com/350x150'));
})();
