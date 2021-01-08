from .db import db

class Deck(db.Model):
    __tablename__="decks"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    # times_completed = db.Column(db.Integer)

    characters = db.relationship("Character", back_populates="deck")
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), default=1)
    user = db.relationship("User", back_populates="decks")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
        }

    def to_dict_chars(self):
        return {
            "id": self.id,
            "characters": [char.to_dict() for char in self.characters]
        }