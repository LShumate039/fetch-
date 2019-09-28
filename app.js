var _condition = "pokemon"; 
var _pocketmonster = "gyarados";

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then( data => {
    // console.log(data.sprites)
    const{...img} = data.sprites; 
    //console.log(img)
    selector = document.querySelector('.card');
    pokeIMG = ` <img src="${img.front_default}" class="card-img-top"><div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>`
 
    selector.innerHTML = pokeIMG; 

});