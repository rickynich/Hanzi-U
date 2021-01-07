from .db import db

class Character(db.Model):
    __tablename__ = 'characters'

    id = db.Column(db.Integer, primary_key=True)
    deck_id = db.Column(db.Integer, db.ForeignKey("decks.id"), nullable=False)
    character = db.Column(db.String) #may need to use NVARCHAR instead
    pinyin= db.Column(db.String)
    definition = db.Column(db.String)
    hint = db.Column(db.String, nullable= True)
    decomposition = db.Column(db.String, nullable=True )

    deck = db.relationship('Deck', back_populates='characters')

    def to_dict(self):
        return {
            "id": self.id,
            "deck_id": self.deck_id,
            "character": self.character,
            "pinyin": self.pinyin,
            "definition": self.definition,
            "hint": self.hint,
            "decomposition": self.decomposition
        }