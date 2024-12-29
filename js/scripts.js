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
      type: ['lightning', 'mouse']
    }
];

/* Pokemon larger than 1.8ft are considered "big".
Pokemon between 1 and 1.7ft are considered "normal", 
and anything below 1ft is considered "tiny". */
for (let i=0; i <pokemonList.length; i++){
  if (pokemonList[i].height <2.5 && pokemonList[i].height >1.8){
    console.log(pokemonList[i].name + " is a big Pokemon!");
  } else if (pokemonList[i].height <=1.7 && pokemonList[i].height >1){
    console.log(pokemonList[i].name + " is a normal Pokemon.");
  } else {
    console.log(pokemonList[i].name + " is a tiny Pokemon.");
  }
}

//Loop for listing Pokemon and attribute on DOM
for (let i=0; i <pokemonList.length; i++) {
  document.write("<p>" + `${pokemonList[i].name}: Height- ${pokemonList[i].height}` + "</p>")
}

//Loop for specifying "big" Pokemon on DOM
for (let i=0; i <pokemonList.length; i++) {
  if (pokemonList[i].height >2) {
      document.write("<p>" + `${pokemonList[i].name} -This is a big Pokemon!` + "</p>")
  }
}
