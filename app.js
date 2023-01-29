const container = document.querySelector(".container")

function fetchPokemon() {
  try {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then((res) => res.json())
      .then((data) => {
        let pokemons = data.results
        console.log(data);

        showPokemon()
        function showPokemon() {
          pokemons.map((pokemon, i) => {
            fetch(pokemon.url)
              .then(res => res.json())
              .then(data => {
                let weight = data.weight;
                container.innerHTML += `
            <div class="card">
                <h2>${pokemon.name}</h2>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png" alt="" />
                <p>weight: ${weight}</p>
            </div>
            `;
              });
          });
        }
      })
  } catch (error) {
    console.log(error);
  }
}

fetchPokemon();