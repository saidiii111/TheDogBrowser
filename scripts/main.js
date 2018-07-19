(function(){

    class DogApi {

        constructor(){
            this.baseUrl = 'https://dog.ceo/api/';
        }
        // second task
        getBreed(){
            return $.ajax(`${this.baseUrl}breeds/list/all`).then(res => Object.keys(res.message));
        }
        // third task
        getBreedImage(breeds){
            return $.ajax(`${this.baseUrl}breed/${breeds}/images/random`).then(res => res.message);
        }
        // forth task
        // getBreeds(){
        //     return $.ajax(`${this.baseUrl}breeds/list/all`).then(result => Object.keys(result.message));
        // }


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
                // Exit, don't run the function if the target doesn't match the selector
                if(!event.target.matches(selector)) return;
                // if its true run it
                callback(event);
            });
        }
        breedListTemplate(breeds){
            const breedList = breeds.map(list =>`
    <button type="button" data-call=${list} class="bton list-group-item list-group-item-action">${list}</button>`).join('');
            return `<div class="list-group">
  ${breedList}
 </div>`;
        }
        dogImageTemplate(images){
            return`
            <header><button type="button" data-back= ${images} class="btn carousel-caption carousel slide btn-primary back-button">Go Back</button></header><section><img class="img-fluid" src="${images}"></section>`;
        }
    }
    // declare the viewres with new keyWord which we can use it on the class
const view = new DogBrowserView('#main');

    const api = new DogApi();
    // creating a method to let the photo appear
    api.getBreed().then(res => {
        view.render(view.breedListTemplate(res));
    });
    // adding event using on method which we created before
    view.on('click', '.bton', event => {
        event.preventDefault();
        // declare breed and assign it to event with data attribute..
        const breed = event.target.dataset.call;
        api.getBreedImage(breed).then(res => {
            view.render(view.dogImageTemplate(res));
        });
    });
// the same methode before but this one to let us go back from photo to the breedListTemplate
view.on('click', '.back-button', event => {
  event.preventDefault();
  const back = event.target.dataset.back;
api.getBreed(back).then(res => {
  view.render(view.breedListTemplate(res));
});
});

})();
