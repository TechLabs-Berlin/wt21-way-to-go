import requests
import json
import googlemaps
from urllib.parse import urlencode

#fetching API key from textfile
with open('API_KEY/API_key.txt', 'r') as f: #or any other file, for simplicity reasons should be the same as frontend uses
  api_key = f.read()

#function for collecting information about nearby attractions user might want to pass by
def nearby_attractions(latitude_on_default_route, longitude_on_default_route, radius, attraction_type, data_type = 'json'):
  endpoint_nearby_api = f'https://maps.googleapis.com/maps/api/place/nearbysearch/{data_type}'
  point_on_default_route = str(latitude_on_default_route)+', '+str(longitude_on_default_route)
  parameters = {'location': point_on_default_route, 'radius': radius, 'type': attraction_type, 'language': 'en', 'key': api_key}
  url_parameters = urlencode(parameters)
  url = f'{endpoint_nearby_api}?{url_parameters}'
  data = requests.get(url)
  print(url)
  if data.status_code not in range(200, 299):
    return{}
  return data.json()

#calling nearby_attractions function with some made up input
nearby_attractions(52.50547924295601, 13.439621512395023, 1000, 'cafe') 