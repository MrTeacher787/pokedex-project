//Pokemon list wrapped in IIFE
let pokemonRepository = (function (){
  //Pokemon List and attributes
  let pokemonList = [
      {
        name: "Bulbasaur",
        height: 2.04,
        type: ['grass', 'poison'],
        category: "seed"
      },
      {
        name: "Charmander",
        height: 2.0,
        type: ['fire'],
        category: "lizard"
      },
      {
        name: "Squirtle",
        height: 1.08,
        type: ['water'],
        category: "tiny turtle"
      },
      {
        name: "Pikachu",
        height: 1.04,
        type: ['electric'],
        category: "mouse"
      }, 
      {
        name: "Psyduck",
        height: 2.07,
        type: ['water', 'psychic'],
        category: "duck"
      }, 
      
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
}) ();

pokemonRepository.add( ({ name: 'Mewtwo', height: 3, type: ['psychic', 'dark']}) );
console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function (pokemon){
  pokemonRepository.addListItem(pokemon);
});
