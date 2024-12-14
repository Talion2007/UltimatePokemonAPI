function searchKey() {
    if (event.key === "Enter") {
      fetchPokemon();
    }
  }
  
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      nextPokemon();
    }
  });
  
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      prevPokemon();
    }
  });

  
  

async function init() {
    const initID = 25;
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${initID}`);
  
      if (!response.ok) {
        throw new Error(`Error fetching Pokemon: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log(data);
  
      // Chama a função para exibir os dados
      displayPokemonData(data);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      document.getElementById("errorMessage").textContent =
        "Error fetching Pokemon. Please try again.";
      document.getElementById("errorMessage").style.display = "block";
    } finally {
      document.getElementById("loadingMessage").style.display = "none";
    }
  }

  init();

  async function fetchPokemon(currentID) {
    const pokemonName = document.getElementById("pokemonName").value.trim();
  
    if (!pokemonName) {
      document.getElementById("errorMessage").textContent =
        "PLEASE ENTER A POKEMON NAME OR ID";
      document.getElementById("errorMessage").style.display = "block";
      return;
    }
  
    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("loadingMessage").style.display = "block";
  
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
  
      if (!response.ok) {
        throw new Error("POKEMON NOT FOUND");
      }
  
      const data = await response.json();
      console.log(data);
  
      // Chama a função para exibir os dados
      displayPokemonData(data);
  
    } catch (error) {
      document.getElementById("errorMessage").textContent = error.message;
      document.getElementById("errorMessage").style.display = "block";
      document.getElementById("pokemonInfo").style.display = "none";
    } finally {
      document.getElementById("loadingMessage").style.display = "none";
    }
  }
  
  async function nextPokemon(currentID) {
    const nextID = parseInt(document.getElementById("pokemonId").textContent) + 1;
    currentID = nextID;
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nextID}`);
  
      if (!response.ok) {
        throw new Error(`Error fetching Pokemon: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log(data);
  
      // Chama a função para exibir os dados
      displayPokemonData(data);
  
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      document.getElementById("errorMessage").textContent =
        "Error fetching Pokemon. Please try again.";
      document.getElementById("errorMessage").style.display = "block";
    } finally {
      document.getElementById("loadingMessage").style.display = "none";
    }
  }

  async function prevPokemon(currentID) {
    const prevID = parseInt(document.getElementById("pokemonId").textContent) - 1;
    currentID = prevID;
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${prevID}`);
  
      if (!response.ok) {
        throw new Error(`Error fetching Pokemon: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log(data);
  
      // Chama a função para exibir os dados
      displayPokemonData(data);
  
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      document.getElementById("errorMessage").textContent =
        "Error fetching Pokemon. Please try again.";
      document.getElementById("errorMessage").style.display = "block";
    } finally {
      document.getElementById("loadingMessage").style.display = "none";
    }
  }

  async function fetchPokemonId(idVar, currentID) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  
    currentID = idVar;
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idVar}`);
  
      if (!response.ok) {
        throw new Error(`Error fetching Pokemon: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log(data);
  
      // Chama a função para exibir os dados
      displayPokemonData(data);
  
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      document.getElementById("errorMessage").textContent =
        "Error fetching Pokemon. Please try again.";
      document.getElementById("errorMessage").style.display = "block";
    } finally {
      document.getElementById("loadingMessage").style.display = "none";
    }
  }  

  async function displayPokemonData(data) {
    try {
      // Exibe as informações do Pokémon
      document.getElementById("pokemonInfo").style.display = "block";
  
      // Nome e ID do Pokémon
      document.getElementById("pokemonTitle").textContent = data.name.toUpperCase();
      document.getElementById("pokemonId").textContent = data.id;
  
      // Imagens do Pokémon
      document.getElementById("pokemonImage").src = data.sprites.front_default;
      document.getElementById("pokemonImage").alt = `Image of ${data.name}`;
      document.getElementById("pokemonImageBack").src = data.sprites.back_default;
      document.getElementById("pokemonImageBack").alt = `Image of ${data.name}`;
      document.getElementById("pokemonImageShiny").src = data.sprites.front_shiny;
      document.getElementById("pokemonImageShiny").alt = `Image of ${data.name}`;
      document.getElementById("pokemonImageShinyBack").src = data.sprites.back_shiny;
      document.getElementById("pokemonImageShinyBack").alt = `Image of ${data.name}`;
  
      // Estatísticas e outros dados
      document.getElementById("pokemonOrder").textContent = data.order;
      document.getElementById("pokemonTypes").textContent = data.types.map((type) => type.type.name).join(", ");
      document.getElementById("pokemonBaseExperience").textContent = data.base_experience;
      document.getElementById("pokemonHeight").textContent = data.height;
      document.getElementById("pokemonWeight").textContent = data.weight;
      document.getElementById("pokemonAbilities").textContent = data.abilities.map((ability) => ability.ability.name).join(", ");
      document.getElementById("pokemonStats").innerHTML = data.stats.map((stat) => {
        return `<p>${stat.stat.name}: ${stat.base_stat}</p>`;
      }).join('');

      document.getElementById("pokemonHeldItems").textContent = data.held_items.map((item) => item.item.name).join(", ");
      document.getElementById("pokemonMoves").textContent = data.moves.map((move) => move.move.name).join(", ");
      
    } catch (error) {
      console.error("Error displaying Pokemon data:", error);
      document.getElementById("errorMessage").textContent = "Error displaying Pokemon data. Please try again.";
      document.getElementById("errorMessage").style.display = "block";
    } finally {
      document.getElementById("loadingMessage").style.display = "none";
    }
  }
  

function showPokemonList() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    document.getElementById("listSection").style.display = "block";
  }
  
  async function fetchPokemonList() {
    const pokemonListElement = document.getElementById("pokemonList");
  
    for (let i = 1; i <= 1025; i++) {
      if (i == 1030) break;
  
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        if (!response.ok) throw new Error("Erro ao buscar dados do Pokémon :(");
  
        const data = await response.json();
  
        //criação do card do Pokémon
  
        const pokemonCard = document.createElement("button");
        pokemonCard.className = "pokemon-card";
        pokemonCard.onclick = () => {
          fetchPokemonId(data.id);
        };
  
        const pokemonImage = document.createElement("img");
        pokemonImage.src = data.sprites.front_default;
        pokemonImage.alt = `Imagem de ${data.name}`;
        pokemonImage.className = "pokemon-image";
  
        const pokemonName = document.createElement("h4");
        pokemonName.textContent = data.name.toUpperCase();
  
        const pokemonId = document.createElement("p");
        pokemonId.textContent = `ID: ${data.id}`;
  
        //adiciona os elementos ao Card
        pokemonCard.appendChild(pokemonImage);
        pokemonCard.appendChild(pokemonName);
        pokemonCard.appendChild(pokemonId);
  
        //adicona o card á lista
        pokemonListElement.appendChild(pokemonCard);
      } catch (error) {
        console.log("Erro ao buscar dados do Pokémon:", error);
      }
    }
  }

  const musicas = [
    "assets/Music/02 - Title Screen.mp3",
    "assets/Music/03 - Game Tutorial.mp3",
    "assets/Music/04 - Pallet Town.mp3",
    "assets/Music/05 - Professor Oak.mp3",
    "assets/Music/06 - Oak Pokémon Lab.mp3",
    "assets/Music/07 - Strength of a Gym Leader.mp3",
    "assets/Music/08 - Rival.mp3",
    "assets/Music/12 - Route 1.mp3",
    "assets/Music/15 - Pewter City.mp3",
    "assets/Music/16 - Pokémon Center.mp3",
    "assets/Music/19 - Viridian Forest.mp3",
    "assets/Music/23 - Pokémon Gym.mp3",
    "assets/Music/28 - Route 3.mp3",
    "assets/Music/30 - Mt. Moon.mp3",
    "assets/Music/31 - Cerulean City.mp3",
    "assets/Music/32 - Route 24.mp3",
    "assets/Music/35 - Vermilion City.mp3",
    "assets/Music/36 - S.S. Anne.mp3",
    "assets/Music/37 - Cycling.mp3",
    "assets/Music/38 - Route 11.mp3",
    "assets/Music/39 - Lavender Town.mp3",
    "assets/Music/40 - Pokémon Tower.mp3",
    "assets/Music/41 - Celadon City.mp3",
    "assets/Music/42 - Game Corner.mp3",
    "assets/Music/46 - Rocket Hideout.mp3",
    "assets/Music/49 - Silph Co..mp3",
    "assets/Music/51 - Surf.mp3",
    "assets/Music/53 - Cinnabar Island.mp3",
    "assets/Music/54 - Pokémon Mansion.mp3",
    "assets/Music/55 - Pokémon Network Center.mp3",
    "assets/Music/57 - Sevii Islands Four & Five Islands.mp3",
    "assets/Music/61 - Sevii Islands.mp3",
    "assets/Music/62 - Sevii Islands Six & Seven Islands.mp3",
    "assets/Music/63 - Union Room.mp3",
    "assets/Music/68 - Victory Road.mp3",
    "assets/Music/70 - Epilogue.mp3",
    "assets/Music/71 - Hall of Fame.mp3",
    "assets/Music/72 - Ending.mp3",
  ];
  
  const musica = new Audio();
  
  function playMusic() {
    const indiceAleatorio = Math.floor(Math.random() * musicas.length);
    musica.src = musicas[indiceAleatorio];
    musica.play();
    musica.addEventListener("ended", playMusic);
    musica.addEventListener("error", function (err) {
      console.log("Erro ao carregar áudio:", err);
    });
  }
  
  function muteMusic() {
    musica.pause();
  }