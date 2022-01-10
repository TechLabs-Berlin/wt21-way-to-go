#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Dec 21 19:23:13 2021

@author: mervebduman
"""

!pip install GoogleMaps #for GitHub without '!'

import requests
from urllib.parse import urlencode


api_key = "XXX" #Exchange your own key with XXX


#sample call of the Directions API for testing: can later be deleted
data_type = 'json'
endpoint_directions_api = f'https://maps.googleapis.com/maps/api/directions/{data_type}'
parameters = {'origin': 'Berlin Alexanderplatz', 'destination': 'Berlin Zoologischer Garten', 'mode': 'walking', 'language': 'en', 'key': api_key}
url_parameters = urlencode(parameters)
url = f'{endpoint_directions_api}?{url_parameters}'
print(url)


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
print(extract_lat_lng)