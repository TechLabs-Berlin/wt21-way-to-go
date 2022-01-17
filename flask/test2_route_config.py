from flask import Flask

# app reference
app = Flask(__name__)

# This method executes before any API request
@app.before_request
def before_request():
    print('before API request')

# This method returns routes
# list and by default method will be GET
@app.route('/') # add the path
def get_routes():
    return "routes [GET]"

# This is POST method which stores routes details
@app.route('/', methods=['POST']) #add the path
def store_routes_data():
    return "routes [POST]"

# This method executes after every API request
@app.after_request
def after_request(response):
    return response

