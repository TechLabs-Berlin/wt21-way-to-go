import flask
app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home(): # To communicate with FE (in src/package.json add <<"proxy":"[URL]">> to connect FE and BE)
    return {
        'name': 'Hello World!'
    }

app.run()