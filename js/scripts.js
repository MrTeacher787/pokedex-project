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
  let pokemonList = document.querySelector(".pokemon-list");
  let listPokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
});
