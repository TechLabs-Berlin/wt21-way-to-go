import flask
from flask import request, jsonify
import sqlite3
from flask_cors import CORS

from home import home_bp

app = flask.Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

app.register_blueprint(home_bp, url_prefix='/')

# A route to return all of the available entries in our database.
@app.route('/routes/all', methods=['GET'])
def api_all():
    conn = sqlite3.connect('selected_routes.db') # To connect the database to the server.
    conn.row_factory = dict_factory
    cur = conn.cursor()
    all_routes = cur.execute('SELECT * FROM routes;').fetchall()

    return jsonify(all_routes)

@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404

#header_list = route_id, route_linestring, num_of_waypoint, poi_lat_lgt, poi_category, poi_name, distance
@app.route('/routes/', methods=['GET'])
def api_filter():
    query_parameters = request.args

    print(query_parameters)

    route_id = query_parameters.get('route_id')
    route_linestring = query_parameters.get('route_linestring')
    num_of_waypoint = query_parameters.get('num_of_waypoint')
    poi_lat_lgt = query_parameters.get('poi_lat_lgt')
    poi_category = query_parameters.get('poi_category')
    poi_name = query_parameters.get('poi_name')
    distance = query_parameters.get('distance')

    query = "SELECT * FROM routes WHERE"
    to_filter = []

    if route_id:
        query += ' route_id=? AND'
        to_filter.append(route_id)
    if route_linestring:
        query += ' route_linestring=? AND'
        to_filter.append(route_linestring)
    if num_of_waypoint:
        query += ' num_of_waypoint=? AND'
        to_filter.append(num_of_waypoint)
    if poi_lat_lgt:
        query += ' poi_lat_lgt=? AND'
        to_filter.append(poi_lat_lgt)
    if poi_category:
        query += ' poi_category=? AND'
        to_filter.append(poi_category)
    if poi_name:
        query += ' poi_name=? AND'
        to_filter.append(poi_name)
    if distance:
        query += ' distance=? AND'
        to_filter.append(distance)
    if not (route_id or route_linestring or num_of_waypoint or poi_lat_lgt or poi_category or poi_name or distance):
        return page_not_found(404)

    query = query[:-4] + ';'

    conn = sqlite3.connect('routes.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()

    results = cur.execute(query, to_filter).fetchall()

    return jsonify(results)
# Check the results here : http://127.0.0.1:5000/routes/?route_id=3543318
# http://127.0.0.1:5000/routes/?poi_lat_lgt=POINT+(52.5498034+13.4141921)

app.run()