//Pokemon list wrapped in IIFE
let pokemonRepository = (function (){
  //Pokemon List and attributes
  let pokemonList = [
      {name: "Bulbasaur", height: 2.04, type: ['grass', 'poison'], category: "seed"},
      {name: "Ivysaur", height: 3.03, type: ['grass', 'poison'], category: "seed"},
      {name: "Venusaur", height: 6.07, type: ['grass', 'poison'], category: "seed"},
      {name: "Charmander", height: 2.0, type: ['fire'], category: "lizard"},
      {name: "Charmeleon", height: 3.07, type: ['fire'], category: "flame"},
      {name: "Charizard", height: 5.07, type: ['fire', 'flying'], category: "flame"},
      {name: "Squirtle", height: 1.08, type: ['water'], category: "tiny turtle"},
      {name: "Wartortle", height: 3.03, type: ['water'], category: "turtle"},
      {name: "Blastoise", height: 5.03, type: ['water'], category: "shellfish"},
      {name: "Caterpie", height: 1.00, type: ['bug'], category: "worm"},
      {name: "Metapod", height: 2.04, type: ['bug'], category: "cocoon"},
      {name: "Butterfree", height: 3.07, type: ['bug', 'flying'], category: "butterfly"},
      {name: "Weedle", height: 1.00, type: ['bug', 'poison'], category: "hairy bug"},
      {name: "Kakuna", height: 2.00, type: ['bug', 'poison'], category: "cocoon"},
      {name: "Beedrill", height: 3.03, type: ['bug', 'poison'], category: "poison bee"},
      {name: "Pidgey", height: 1.00, type: ['normal', 'flying'], category: "tiny bird"},
      {name: "Pidgeotto", height: 3.07, type: ['bug', 'poison'], category: "bird"},
      {name: "Pidgeot", height: 4.11, type: ['bug', 'poison'], category: "bird"},
      {name: "Rattata", height: 1.00, type: ['normal'], category: "mouse"},
      {name: "Raticate", height: 2.04, type: ['normal'], category: "mouse"},
      {name: "Spearow", height: 1.00, type: ['normal', 'flying'], category: "tiny bird"},
      {name: "Fearow", height: 3.11, type: ['normal', 'flying'], category: "beak"},
      {name: "Ekans", height: 6.07, type: ['poison'], category: "snake"},
      {name: "Arbok", height: 11.06, type: ['poison'], category: "cobra"},
      {name: "Pikachu", height: 1.04, type: ['electric'], category: "mouse"},
      {name: "Raichu", height: 2.07, type: ['electric'], category: "mouse"}, 
      {name: "Psyduck", height: 2.07, type: ['water', 'psychic'], category: "duck"}, 
      
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
    button.addEventListener('click', showDetails(pokemon));
  }

  function showDetails(pokemon) {
    console.log(pokemon);
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
