from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Character, Deck #, deck_completions

deck_routes = Blueprint('decks', __name__)
# route: api/decks

@deck_routes.route("/", methods=['GET'])
@login_required
def getDecks():
    decks = Deck.query.all()
    print("Decks:", decks)
    return {"decks": [deck.to_dict() for deck in decks]}

@deck_routes.route("/<int:id>", methods=['GET'])
# @login_required
def getDeck(id):
    deck = Deck.query.get(id)
    return jsonify(deck.to_dict())

@deck_routes.route("/<int:id>/characters", methods=['GET'])
# @login_required
def getChars(id):
    deck = Deck.query.get(id)
    # print("Taking a look in your characters route...", deck.to_dict_chars())
    return jsonify(deck.to_dict_chars())

# @deck_routes.route("/done/<int:id>", methods=["POST"])
# @login_required
# def deck_completed(id):
#     deck = Deck.query.get(id)
#     user = current_user
#     print("*********Deck in add deck to deck_completions", deck.to_dict())
#     print("************current user", user.to_dict_full())
#     user.deck_completions.append(deck)
#     db.session.commit()

#     return user.to_dict_full()

# @deck_routes.route("/done/<int:id>", methods=["POST"])
# @login_required
# def deck_completed(id):
#     deck = Deck.query.get(id)
#     user = current_user
#     print("*********Deck in add deck to deck_completions", deck.to_dict())
#     print("************current user", user.to_dict_full())
#     user.deck_completions.append(deck)
#     db.session.commit()

#     return user.to_dict_full()