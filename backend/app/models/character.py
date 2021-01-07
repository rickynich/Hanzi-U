from .db import db

class Character(db.Model):
    __tablename__ = 'characters'

    id = db.Column(db.Integer, primary_key=True)
    character = db.Column(db.String(20)) #may need to use NVARCHAR instead
    deck = db.relationship('Deck', back_populates='characters', primaryjoin='Deck.id==Character.id')
    pinyin= db.Column(db.String(40))