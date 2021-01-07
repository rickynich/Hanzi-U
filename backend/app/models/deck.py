from .db import db

class Deck(db.Model):
    __tablename__="decks"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    times_completed = db.Column(db.Integer)

    characters = db.relationship("Character", back_populates="decks")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "times_completed": self.times_completed
        }