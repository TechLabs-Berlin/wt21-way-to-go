from flask import Blueprint

home_bp = Blueprint('home', __name__)
@home_bp.route('/', methods=['GET'])
def home(): # To communicate with Frontend
    return "<h1>Way To Go</h1><p>This site is a prototype API of TechLabs-Berlin/wt21-way-to-go.</p>"