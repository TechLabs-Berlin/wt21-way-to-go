import flask
from flask import request, jsonify
import sqlite3

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# Test data
#routes = [
#    {'name':'Berliner_Restaurant',
#     'amenity':'restaurant',
#     'lat':'47.52142',
#     'lon':'10.49863'},
#
#    {'name':'Eiscafe',
#     'amenity':'ice_cream',
#     'lat': '50.9273',
#     'lon': '8.47206'}
#]

@app.route('/', methods=['GET'])
def home(): # To communicate with FE (in src/package.json add <<"proxy":"[URL]">> to connect FE and BE)
    return "<h1>Way To Go</h1><p>This site is a prototype API of TechLabs-Berlin/wt21-way-to-go.</p>"


# A route to return all of the available entries in our database.
@app.route('/test_routes/all', methods=['GET'])
def api_all():
    conn = sqlite3.connect('routes.db') # Add the routes db
    conn.row_factory = dict_factory
    cur = conn.cursor()
    all_books = cur.execute('SELECT * FROM routes;').fetchall()

    return jsonify(routes)

@app.route('/test_routes/', methods=['GET'])
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
    for route in routes:
        if route['name'] == name:
            results.append(route)

        # Use the jsonify function from Flask to convert our list of python dictionaries to the JSON format.
        return jsonify(results)
# Check the results here : http://127.0.0.1:5000/test_routes/?name=Berliner_Restaurant
# I don't know why but I can't get the Eiscafe result.
app.run()