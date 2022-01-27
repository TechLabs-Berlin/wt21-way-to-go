import flask
from flask import request, jsonify
from flask_cors import CORS

app = flask.Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

# Test data
poi = [
    {'name':'Marienkirche',
     'amenity':'historic',
     'lat':'52.520750865026486',
     'lon':'13.40699872216378'},

    {"name":"L'Osteria",
     'amenity':'restaurant',
     'lat': '52.5052495111114',
     'lon': '13.442423934510911'},

    {'name':'Viktoriapark',
     'amenity':'tree',
     'lat': '52.488027395934076',
     'lon': '13.381452255654962'},

    {'name':'Pergamonmuseum',
     'amenity':'museum',
     'lat': '52.52121888464787',
     'lon': '13.39745253301786'}
]

@app.route('/', methods=['GET'])
def home(): # To communicate with FE (in src/package.json add <<"proxy":"[URL]">> to connect FE and BE)
    return "<h1>Way To Go</h1><p>This site is a prototype API of TechLabs-Berlin/wt21-way-to-go.</p>"


# A route to return all of the available entries in our database.
@app.route('/test_poi/all', methods=['GET'])
def api_all():
    return jsonify(poi)

@app.route('/test_poi/', methods=['GET'])
def api_name():
    # Check if a name was provided as part of the URL.
    # If name is provided, assign it to a variable.
    # If no name is provided, display an error in the browser.
    if 'name' in request.args:
        name = str(request.args['name']) # If you want to use IDs instead names, use 'int' not 'str'
    else:
        return "Error: No name field provided. Please specify a name." # Accessing the link without providing a name will give the error message.
    # Create an empty list for our results
    results = []

    # Loop through the data and match results that fit the request name.
    # Names may not be unique, thus they might return many results.
    for place in poi:
        if place['name'] == name:
            results.append(place)

        # Use the jsonify function from Flask to convert our list of python dictionaries to the JSON format.
    return jsonify(results)
# Check the results here : http://127.0.0.1:5000/test_poi/?name=Berliner_Restaurant

app.run()