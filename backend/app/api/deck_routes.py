from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Character, Deck

deck_routes = Blueprint('decks', __name__)

@deck_routes.route("/<int:id>/characters", methods=['GET'])
# @login_required
def getChars(id):
    deck = Deck.query.get(id)
    return jsonify(deck.to_dict_chars())

@deck_routes.route("/<int:id>", methods=['GET'])
# @login_required
def getDecks(id):
    deck = Deck.query.get(id)
    return jsonify(deck.to_dict())