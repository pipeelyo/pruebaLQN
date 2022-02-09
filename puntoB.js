//b. (Inglés) Your task in this exercise is as follows: Take the following selection of 70
// English Pokemon names (extracted from Wikipedia's list of Pokemon), and generate
// the/a sequence with the highest possible number of Pokemon names where the
// subsequent name starts with the final letter of the preceding name. No Pokemon
// name is to be repeated.
var pokemonList = [
  'audino', 'bagon', 'baltoy', 'banette', 'bidoof', 'braviary', 'bronzor', 'carracosta', 'charmeleon', 'cresselia', 'croagunk', 'darmanitan', 'deino', 'emboar', 'emolga', 'exeggcute', 'gabite', 'girafarig', 'gulpin', 'haxorus', 'heatmor', 'heatran', 'ivysaur', 'jellicent', 'jumpluff', 'kangaskhan', 'kricketune', 'landorus', 'ledyba', 'loudred', 'lumineon', 'lunatone', 'machamp', 'magnezone', 'mamoswine', 'nosepass', 'petilil', 'pidgeotto', 'pikachu', 'pinsir', 'poliwrath', 'poochyena', 'porygon2', 'porygonz',
  'registeel', 'relicanth', 'remoraid', 'rufflet', 'sableye', 'scolipede', 'scrafty', 'seaking', 'sealeo', 'silcoon', 'simisear', 'snivy', 'snorlax', 'spoink', 'starly', 'tirtouga', 'trapinch', 'treecko', 'tyrogue', 'vigoroth', 'vulpix', 'wailord', 'wartortle', 'whismur', 'wingull', 'yamask'
];
var nombres = [];
var nombresPokemon = [];

if (pokemonList.length > 0) {
  siguienteNombre();
  nombresPokemon.push(nombres);
  nombres = [];
}

function siguienteNombre() {
  if (nombres.length == 0) {
    var rand = Math.floor(Math.random() * pokemonList.length - 1);
    nombres.push(pokemonList[rand])
    pokemonList.splice(rand, 1);

  }
  for (let i = 0; i < pokemonList.length; i++) {
    if (nombres[nombres.length - 1].substr(-1) == pokemonList[i].charAt(0)) {
      nombres.push(pokemonList[i]);
      pokemonList.splice(rand, 1);
    }
  }
}
console.log('lista Pokemon', pokemonList.length);
console.log('nombres =', nombresPokemon);
