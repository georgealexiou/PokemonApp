import json
import requests

with open('pokemon.json', 'r') as f:
    pokemon_data = json.load(f)

for pokemon in pokemon_data:
    print(pokemon['id'])
    pokemon_url = f"https://pokeapi.co/api/v2/pokemon/{pokemon['id']}"
    response = requests.get(pokemon_url)
    pokemon_info = response.json()
    pokemon['types'] = [type['type']['name'] for type in pokemon_info['types']]

with open('pokemon.json', 'w') as f:
    json.dump(pokemon_data, f)