from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Character, Deck #, deck_completions

deck_routes = Blueprint('decks', __name__)
# route: api/decks

@deck_routes.route("/", methods=['GET'])
# @login_required
def getDecks():
    decks = Deck.query.all()
    print("Decks:", decks)
    # use list comprehension to iterate and pull up characters for each deck
    # return {"decks": [deck.to_dict() for deck in decks]}
    return {"decks": [deck.to_dict_chars() for deck in decks]}

# gets a specific deck
@deck_routes.route("/<int:id>", methods=['GET'])
# @login_required
def getDeck(id):
    deck = Deck.query.get(id)
    return jsonify(deck.to_dict_chars())

# gets a specific deck of characters
@deck_routes.route("/<int:id>/characters", methods=['GET'])
# @login_required
def getChars(id):
    deck = Deck.query.get(id)
    print("Taking a look in your characters route...", deck.to_dict_chars())
    return jsonify(deck.to_dict_chars())

# gets a specific character
@deck_routes.route("/<int:deck_id>/characters/<int:id>", methods=['GET'])
# @login_required
def getChar(deck_id, id):
    # deck = Deck.query.get(id)
    character = Character.query.get(id)
    print("Taking a look in your character route...", character.to_dict())
    return jsonify(character.to_dict())

