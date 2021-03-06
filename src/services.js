const baseURL = "https://pokeapi.co/api/v2/";

export async function getPokemons(limit, offset) {
  console.log('getpokemons');
  try {
    const response = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getPokemon(name) {
  try {
    const response = await fetch(`${baseURL}pokemon/${name}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
