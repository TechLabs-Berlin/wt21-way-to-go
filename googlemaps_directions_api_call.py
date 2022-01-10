import requests
import json
import googlemaps
from urllib.parse import urlencode

#fetching API key from textfile
with open('API_KEY/API_key.txt', 'r') as f: #or any other file, for simplicity reasons should be the same as frontend uses
  api_key = f.read()

#function for collecting waypoints of the (at this point unmodified) route
def extract_lat_lng(current_loc, desired_dest, data_type = 'json'):
  endpoint_directions_api = f'https://maps.googleapis.com/maps/api/directions/{data_type}'
  parameters = {'origin': current_loc, 'destination': desired_dest, 'mode': 'walking', 'language': 'en', 'key': api_key}
  url_parameters = urlencode(parameters)
  url = f'{endpoint_directions_api}?{url_parameters}'
  data = requests.get(url)
  print(url)
  if data.status_code not in range(200, 299):
    return{}
  return data.json() 

#calling waypoints function with some made up input
extract_lat_lng('Berlin Volkspark Friedrichshain', 'Berlin Potsdamer Platz')