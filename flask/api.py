from flask import Flask
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index(): # To communicate with FE (in src/package.json add <<"proxy":"[URL]">> to connect FE and BE)
    return {
        'name': 'Hello World!'
    }


if __name__ == '__main__':
    app.run(debug=True)