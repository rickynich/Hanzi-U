from flask import Flask
from app.config import Config

app = Flask(__name__)
app.config.from_object(Config)
print("HEEEELLLLLO")

@app.route('/')
def index():
    return '<h1>Hanzi U<h1>'