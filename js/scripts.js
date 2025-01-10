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

console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function (pokemon){
  document.write(pokemon.name + ': Height- ' + pokemon.height + ' Type: ' + pokemon.type[0] + ', ' + pokemon.type[1] + '<p>')}
)
