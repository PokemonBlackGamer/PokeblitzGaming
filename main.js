const menu = document.querySelector(".menu");
const input = document.querySelector("#input");
const form = document.querySelector("#form");
const burgerMenu = document.querySelector("#burgerMenu");
const output = document.querySelector(".container.second");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputValue = input.value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
    .then((res) => res.json())
    .then((data) => {
      output.innerHTML = `
    <div class="pokemonCard">
      <div class="pokemonInfo">
        <div class="pokemonImg">
          <img src="${data.sprites.front_default}" alt="pokemon" />
        </div>
        <div class="pokemonName">
          <h2>${data.name}</h2>
        </div>
      </div>
      <div class="pokemonDesc">
        <div class="row">
          <h2>Abilities:</h2>
          ${data.abilities.reduce((acc, item) => {
            return `${acc}<p>${item.ability.name}</p>`;
          }, "")}
          <h2 class="stats">Stats</h2>
          ${data.stats.reduce((acc, stat) => {
            return `${acc}<p>${stat.stat.name}:<span>${stat.base_stat}</span></p>`;
          }, "")}
        </div>
        <div class="row">
        <h2>Types:</h2>
         ${data.types.reduce((acc, type) => {
           return `${acc}<p>${type.type.name}</p>`;
         }, "")}
      </div>
      </div>
      <div class="pokemonMoves">
      <h2>Moves:</h2>
       <div class="pokemonWrapper">
       ${data.moves.reduce((acc, move) => {
         return `${acc}<p>${move.move.name}<span>,</span></p>`;
       }, "")}
       </div>
     </div>
    </div>
    `;
    })
    .catch((err) => {
      output.innerHTML =
        "<h1>We couldn't find that pokemon, search for something else.</h1>";
    });
  input.value = "";
});

fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
  .then((res) => res.json())
  .then((data) => {
    output.innerHTML = `
    <div class="pokemonCard">
      <div class="pokemonInfo">
        <div class="pokemonImg">
          <img src="${data.sprites.front_default}" alt="pokemon" />
        </div>
        <div class="pokemonName">
          <h2>${data.name}</h2>
        </div>
      </div>
      <div class="pokemonDesc">
        <div class="row">
          <h2>Abilities:</h2>
          ${data.abilities.reduce((acc, item) => {
            return `${acc}<p>${item.ability.name}</p>`;
          }, "")}
          <h2 class="stats">Stats</h2>
          ${data.stats.reduce((acc, stat) => {
            return `${acc}<p>${stat.stat.name}:<span>${stat.base_stat}</span></p>`;
          }, "")}
        </div>
        <div class="row">
        <h2>Types:</h2>
         ${data.types.reduce((acc, type) => {
           return `${acc}<p>${type.type.name}</p>`;
         }, "")}
      </div>
      </div>
      <div class="pokemonMoves">
      <h2>Moves:</h2>
       <div class="pokemonWrapper">
       ${data.moves.reduce((acc, move) => {
         return `${acc}<p>${move.move.name}<span>,</span></p>`;
       }, "")}
       </div>
     </div>
    </div>
    `;
  })
  .catch((err) => console.log(err));
