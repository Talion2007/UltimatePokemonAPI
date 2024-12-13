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
      document.getElementById("pokemonStats").textContent = data.stats.map((stat) => stat.stat.name).join(", ");
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
  