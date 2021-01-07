from flask import Blueprint, render_template, redirect, jsonify
from app.models import User, Character, Deck

bp = Blueprint('',__name__)

@bp.route('/')
def index():
    return '<h1>Hanzi U<h1><h2>Welcome!</h2>'

#use for testing for now
@bp.route('/characters')
def characters():
    chars = [
        {
            "character": "是",
            "definition": "to be; indeed, right, yes; okay",
            "pinyin": "shì",
            "decomposition": "⿱日疋",
            "hint": "To speak 日 directly 疋",
        },
        {
            "character": "的",
            "definition": "aim, goal; of; possessive particle; -self suffix",
            "pinyin": "de",
            "decomposition": "⿰白勺",
            "hint": "⿰白勺",
        },
    ]
    theChar = chars[0]['character']
    theHint = chars[0]['hint']
    return (f'<p>{theChar} {theHint}</p>')

# @bp.route("/<int:id>", methods=['GET'])
# # # @login_required
# def getChars(id):
#     deck = Deck.query.get(id)
#     deck1 = jsonify(deck.to_dict_chars())
#     # return (f'<p> {deck1} </p>')
#     return deck1