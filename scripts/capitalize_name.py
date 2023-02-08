import json

with open('pokemon.json', 'r') as f:
    pokemon_data = json.load(f)

for pokemon in pokemon_data:
    pokemon['name'] = pokemon['name'].capitalize()

with open('pokemon.json', 'w') as f:
    json.dump(pokemon_data, f)