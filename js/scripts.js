//Pokemon list wrapped in IIFE
let pokemonRepository = (function (){
  //Pokemon List and attributes
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon
      ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    //button for every pokemon in array
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);    
  }

  function showModal(title, text, img) {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.innerHTML = '';
    
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
    
    let pokemonName = document.createElement('h1');
    pokemonName.innerText = title;
    let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = text;
    let pokemonImage = document.createElement('img');

    pokemonImage.setAttribute("src", img);
    pokemonImage.setAttribute("width", "100%");
    pokemonImage.setAttribute("height", "100%");
    pokemonImage.setAttribute("alt", "Pokemon picture");
    
    modal.appendChild(closeButtonElement);
    modal.appendChild(pokemonName);
    modal.appendChild(pokemonHeight);
    modal.appendChild(pokemonImage);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
    
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  })

  //show pokemon details on console
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal( pokemon.name, "Height: " + pokemon.height, pokemon.imgUrl);
    });    
  }

  //load the list of Pokemon
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e); 
    })
  }

  //adding details to Pokemon
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      //details to be added
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
