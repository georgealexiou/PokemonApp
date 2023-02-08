import requests
import json

url = 'https://pokeapi.co/api/v2/pokemon?limit=1000'
response = requests.get(url)
pokemon_data = response.json()['results']

output = []
for pokemon in pokemon_data:
    pokemon_url = pokemon['url']
    pokemon_response = requests.get(pokemon_url)
    pokemon_info = pokemon_response.json()
    pokemon_dict = {
        'id': pokemon_info['id'],
        'name': pokemon_info['name'],
        'types': [type['type']['name'] for type in pokemon_info['types']]
    }
    output.append(pokemon_dict)

with open('pokemon.json', 'w') as f:
    json.dump(output, f)