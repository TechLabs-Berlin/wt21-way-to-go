import flask
from flask import request, jsonify
import sqlite3

app = flask.Flask(__name__)
app.config["DEBUG"] = True

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


@app.route('/', methods=['GET'])
def home():
    return '''<h1>Way To Go</h1><p>This site is a prototype API of TechLabs-Berlin/wt21-way-to-go.</p>'''


@app.route('/routes/all', methods=['GET'])
def api_all():
    conn = sqlite3.connect('routes.db') # Add the routes db
    conn.row_factory = dict_factory
    cur = conn.cursor()
    all_books = cur.execute('SELECT * FROM routes;').fetchall()

    return jsonify(routes)



@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404


@app.route('/routes', methods=['GET'])
def api_filter():
    query_parameters = request.args

    id = query_parameters.get('id')
    name = query_parameters.get('name')
    amenity = query_parameters.get('amenity')

    query = "SELECT * FROM routes WHERE"
    to_filter = []

    if id:
        query += ' id=? AND'
        to_filter.append(id)
    if name:
        query += ' name=? AND'
        to_filter.append(name)
    if amenity:
        query += ' amenity=? AND'
        to_filter.append(amenity)
    if not (id or name or amenity):
        return page_not_found(404)

    query = query[:-4] + ';'

    conn = sqlite3.connect('routes.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()

    results = cur.execute(query, to_filter).fetchall()

    return jsonify(results)

app.run()