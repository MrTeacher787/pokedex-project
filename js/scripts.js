//Pokemon list wrapped in IIFE
let pokemonRepository = (function (){
  //Pokemon List and attributes
  let pokemonList = [
      {
        name: "Psyduck",
        height: 1.2,
        type: ['water', 'psychic']
      }, 
      {
        name: "Charmander",
        height: 2.1,
        type: ['fire', 'dragon']
      }, 
      {
        name: "Squirtle",
        height: 1.7,
        type: ['water', 'monster']
      },
      {
        name: "Bulbasaur",
        height: 0.9,
        type: ['water', 'monster']
      },
      {
        name: "Pikachu",
        height: 1.3,
        type: ['lightning', 'normal']
      }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
}) ();

pokemonRepository.add( ({ name: 'Mewtwo', height: 3, type: ['psychic', 'dark']}) );
console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function (pokemon){
  let listItem = document.createElement('li'); //create list item
  let button = document.createElement('button'); //create button 

  button.innerText = pokemon.name;
  button.classList.add('button-class');
}
)
